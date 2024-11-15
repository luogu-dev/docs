# 交互题功能说明

交互题既用户提交的程序，通过出题人提供的交互库，与判题程序（SPJ）进行交互并获得输入、解答问题。

洛谷上的交互题评测，由以下三个部分组成：判题程序（SPJ）、交互库、用户程序。其中出题人需要提供 SPJ 以及交互库。交互题需要打上  **交互题** 标签。如果使用 SPJ 功能，还需要 **Special Judge** 标签。

在数据压缩包中，除了测试点输入输出文件，还需包含 `checker.cpp` SPJ 程序文件、以及 `interactive_lib.cpp` 交互库文件。与 SPJ 相同，均使用 C++14 标准进行编译，不支持其他语言。

- 交互题的 SPJ 写法

交互题可以不使用 SPJ 功能。不使用的情况下，交互库将直接读取测试点输入，并由默认比较器进行输出比较。和普通题目相比，除了链接交互库到用户程序外没有其他区别。

交互题的 SPJ 与普通的 Special Judge 类似，使用 testlib。具体请参考 [Testlib 文档](https://github.com/MikeMirzayanov/testlib) 以及 [Special Judge 使用说明](./special-judge.md)。

需要注意的是，该 SPJ 同时承担判题和与交互库交换数据两个功能。交换数据通过标准输入输出进行，既 SPJ 的 `stdout` 可在交互库的 `stdin` 中读出，交互库的 `stdout` 可在 SPJ 的 `stdin` 中读出。

这里给出一个简单的例子：

```cpp
#include "testlib.h"
#include <iostream>

using namespace std;

int main(int argc, char* argv[])
{
    setName("Interactor A+B");
    registerInteraction(argc, argv);

    // 从测试数据中读取输入
    int a = inf.readInt();
    int b = inf.readInt();

    // 发送给交互库
    cout << a << " " << b << endl;

    // 读取交互库的输出。直接使用 cin 或者 scanf 也可以。
    int pa = ouf.readInt();
    int ja = a + b;

    if (ja != pa) quitf(_wa, "expected %d, found %d", ja, pa);
    quitf(_ok, "answer is %d", ja);
}
```

- 交互库的写法

交互库 `interactive_lib.cpp` 是被链接到用户程序的一个模块，包含或者不包含 `main` 函数均可。理论上如果你希望用户直接与 SPJ 通过标准输入输出交互，直接什么都不提供也可以，但这种情况也必须放一个空的文件。

建议交互库的所有需要用户调用的导出函数、以及需要用户定义的函数，都使用 `extern "C"` 关键字定义，以方便不同语言编写的用户程序调用这些函数。

下面给出如上同一题目的交互库例子：

```cpp
#include <iostream>

extern "C" {
	extern int plus(int a, int b);
}

int main() {
	int a,b;
	std::cin >> a >> b;
	std::cout << plus(a, b) << std::endl;
	return 0;
}
```

显然该交互库需要用户定义 `plus` 函数来实现加法功能。正确的解答可以如此编写：

```cpp
extern "C" int plus(int a, int b) {
    return a + b;
}
```

如果希望用户实现的函数调用交互库的函数，可以在  `extern "C"` 中实现。例如，如果在交互库中有一个 `inc()` 函数，用于给这个数字增加 1，那么交互库可以这么写：

```cpp
#include <iostream>

extern "C" {
	extern int plus(int a, int b);
	int inc(int a){
		return a+1;
	}
}

int main() {
	int a,b;
	std::cin >> a >> b;
	std::cout << plus(a, b) << std::endl;
	return 0;
}
```

正确的解答可以这么写：

```cpp
extern "C" int inc(int a); // 需要声明这个函数 
extern "C" int plus(int a, int b) {
    int k;
    k = inc(a); // 调用函数
    return k + b - 1; // 其实没啥意义，仅供演示
}
```

- 特别需要注意的点

缓冲区问题。C/C++语言的输入输出函数均自带有一定的缓冲区，因此你输出的内容不一定能立刻被交互库/SPJ所读取。如果不在合适的时间清空缓冲区，很可能会造成两个程序互相等待对方输出的情况而 TLE。

每次输出完一定内容、希望对面的程序开始进行处理时，都必须手动清空缓冲区。在 C 语言中，可使用 `fflush(stdout)` 函数。在C++语言中，可使用 `std::cout << std::flush`；在使用 `std::endl` 输出一个换行时，C++语言也会自动清空缓冲区。

交互SPJ最好不要占用太多的 CPU 资源，因为它将与用户的程序在同一个核心上执行。最好在评测程序等待来自SPJ的输入，或者评测程序已经结束运行之后，再进行复杂的计算。
