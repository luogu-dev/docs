# 交互题功能说明

交互题即用户提交的程序，通过出题人提供的交互库，与判题程序进行交互并获得输入、解答问题。

洛谷上的交互题评测，由以下三个部分组成：判题程序（评测机或者 SPJ）、交互库、用户程序。其中出题人需要提供交互库，并且根据试题需求可能需要 SPJ。交互题需要打上  **交互题** 标签。如果使用 SPJ 功能，还需要 **Special Judge** 标签。

在数据压缩包中，除了测试点输入输出文件，还需包含 `interactive_lib.cpp` 交互库文件。交互库与 SPJ 相同，均使用 C++14 标准进行编译，不支持其他语言。

## 函数式交互题

函数式交互题是一种题目类型，其中参赛者的程序需要与判题系统进行交互，但这种交互的方式通常是通过函数调用的形式来实现，而不是通过标准输入输出流进行交互。也就是说，选手的程序与系统的交互是通过一组预定义的函数接口来进行的，而不是通过输入输出文本。

### 无需使用 SPJ 的情况

以 [P13691 [CEOI 2025] highest](https://www.luogu.com.cn/problem/P13691) 为例，本题需要用户实现以下函数：

```cpp
vector<int> solve(vector<int> &v, vector<int> &w, vector<pair<int,int>> &queries);
```

那么本题的交互库所需要承担的行为是：
- 将输入数据读入进交互库；
- 调用 `vector<int> solve(vector<int> &v, vector<int> &w, vector<pair<int,int>> &queries);` ，此时选手程序运行并且返回结果；
- 输出结果，与答案文件进行比较；

换而言之，这类试题中，交互库的本质是帮助选手写完输入输出，选手只需编写核心程序。因此，它的交互库可以写作：

```cpp
#include <iostream>
#include <vector>
using namespace std;
vector<int> solve(vector<int> &v, vector<int> &w, vector<pair<int, int>> &queries);
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    vector<int> v(n);
    for (int i = 0; i < n; i++) {
        cin >> v[i];
    }
    vector<int> w(n);
    for (int i = 0; i < n; i++) {
        cin >> w[i];
    }
    int m;
    cin >> m;
    vector<pair<int, int>> queries(m);
    for (int i = 0; i < m; i++) {
        cin >> queries[i].first >> queries[i].second;
    }
    vector<int> results = solve(v, w, queries);
    for (int i = 0; i < m; i++) {
        cout << results[i] << "\n";
    }
	fflush(stdout);
    return 0;
}
```

在文件目录下仅需 interactive_lib.cpp 即可，无需添加 checker.cpp，只需勾选交互题标签。

### 需要使用 SPJ 的情况

事实上，大部分函数式交互题目并不像上例那么简单。以 [P13612 [IOI 2018] combo 组合动作](https://www.luogu.com.cn/problem/P13612) 为例，本题需要选手实现函数 `string guess_sequence(int N)`，允许选手调用函数 `int press(string p)`，且根据函数调用次数反馈评分。这个时候需要用到 Special Judge 功能。在文件目录下需要 interactive_lib.cpp 和 checker.cpp，并且同时勾选交互题和 Special Judge 标签。

在此类情况下，测试数据在 checker、interactive_lib 的流转如下：
- 从 checker 的 inf 流读取试题原本的测试数据，再使用 stdout 输出信息。
- 此时，interactive_lib 可以从 stdin 输入 checker 输出的信息，进行处理，然后从 interactive_lib 的 stdout 输出信息。
- 接着，checker 从 stdin（或者 ouf 流）获得 interactive_lib 输出的信息，进行处理。
- 最后，checker 根据函数调用次数等信息，为选手的程序评分。

以上述试题为例，在测试数据内存放的是字符串 $S$，因此需要 checker 从 inf 流内输入 $S$。由于题目要求选手只应知道字符串的长度 $N$，因此需要将字符串 $S$ 的长度输出给交互库。

```cpp
// 这里是在 checker 内的行为
S = inf.readLine(); // 从输入文件读入 S
N = S.length();
std::cout << N << std::endl; // 将 S 输出给 interactive_lib
```

在 interactive_lib 中，需要实现选手可以调用的函数 `int press(string p)`。通常而言的实现方式是，交互库通过输出，与 checker 进行交互，checker 可以从 stdin（或者 ouf 流）中读取交互库的需求，进行判断处理，然后重新输出给交互库。

```cpp
// 这里是在 interactive_lib 内的行为
#include <cstdio>
#include <string>

std::string guess_sequence(int N); // 选手程序需要完成的部分

int press(std::string p) {
	printf("? %s\n", p.c_str()); // 输出 ? p，可以让交互库读取到请求。 
	fflush(stdout);
	int t; scanf("%d", &t); // 读入从 checker 提供的“当按出按键序列 p 后你赚到的金币数量。”
	return t; // 返回给选手程序
}

int main() {
	int N; scanf("%d", &N); // 读入从 checker 获取的 N，然后将其传给选手的程序
	printf("! %s\n",guess_sequence(N).c_str());
	fflush(stdout);
}
```

```cpp
// 这里是在 checker 的部分行为
std::string cmd_str = ouf.readToken("[?!]", "cmd");
// 读取 interactive_lib 发来的操作类型
char cmd = cmd_str[0];
if (cmd == '?') {
	// 处理查询
	query_count++;
	if (query_count > MAX_QUERIES) {
		quitf(_wa, "too many moves: made %d queries, limit is %d", query_count, MAX_QUERIES);
	}
	std::string p = ouf.readToken();
    // 读取 interactive_lib 发来的函数调用申请
	if (p.length() > (size_t)4 * N) {
		quitf(_wa, "invalid press: p is too long. length=%zu, max_len=%d", p.length(), 4 * N);
	}
	for (size_t i = 0; i < p.length(); ++i) {
		if (VALID_CHARS.find(p[i]) == std::string::npos) {
			quitf(_wa, "invalid press: p contains invalid character '%c' at index %zu", p[i], i);
		}
	}
	int result = calculate_press_result(p);
	std::cout << result << std::endl; // 将答案使用 stdout 发送给交互库
} 
```

## IO 交互题

在 Codeforces、ICPC 上更常见的是 IO 交互题。参赛者的程序需要与判题系统进行交互，但交互是通过输入输出流（stdin 和 stdout）进行的。选手的程序与判题系统之间的交互是基于标准输入和输出流的读取和写入，而不是通过函数调用。

IO 交互题的配置相对简单，在文件目录下需要 checker.cpp 用作交互，以及空的 interactive_lib.cpp 用于占位。

以 [P14843 [ICPC 2022 Yokohama R] Interactive Number Guessing](https://www.luogu.com.cn/problem/P14843) 为例，这是一道 IO 交互题，用户输出指令（query 或者 answer，在样例输出栏），交互库读取指令后输出给用户信息（在样例输入栏的正整数）。在此类交互题中，checker 可以通过 inf 读入试题测试数据，并且从 stdin 或者 ouf 读取选手程序的输出（即 stdout）。checker 可以从 stdout 输出信息到选手程序的 stdin，允许选手程序读入。

本题的 checker 如下：

```cpp
#include "testlib.h"
#include <bits/stdc++.h>
using namespace std;
using ll = long long;

static int digitsum(ll x) {
	int s = 0;
	while (x > 0) { s += int(x % 10); x /= 10; }
	return s;
}

int main(int argc, char **argv) {
	registerInteraction(argc, argv);
	ll x = inf.readLong();
	int query_count = 0;
	
	while (true) {
		if (ouf.seekEof()) quitf(_wa, "invalid type in query_count=%d", query_count);
		string type = ouf.readToken();
		
		if (type == "query") {
			if (query_count >= 75) quitf(_wa, "query limit exceeded");
			if (ouf.seekEof()) quitf(_wa, "invalid query in query_count=%d", query_count);
			ll a = ouf.readLong(); // 从 ouf/stdin 读取选手程序输出
			if (a < 0 || a >= 1000000000000000000LL)
				quitf(_wa, "invalid range in query_count=%d: %lld", query_count, a);
			cout << digitsum(a + x) << '\n'; // 从 stdout 将信息发送给选手程序，选手程序可以在 stdin 读取
			cout.flush();
			query_count++;
		} else if (type == "answer") {
			if (ouf.seekEof()) quitf(_wa, "invalid guess in query_count=%d", query_count);
			ll guess = ouf.readLong();
			if (guess < 0 || guess >= 1000000000000000000LL)
				quitf(_wa, "invalid guess range in query_count=%d: %lld", query_count, guess);
			if (guess == x) {
				if (!ouf.seekEof()) quitf(_wa, "Trailing output: '%s'", ouf.readToken().c_str());
				quitf(_ok, "accepted");
			} else {
				quitf(_wa, "wrong guess: %lld  actual: %lld", guess, x);
			}
		} else {
			quitf(_wa, "invalid type: %s", type.c_str());
		}
	}
}
```

## 重要注意事项

1. 缓冲区问题。C/C++ 语言的输入输出函数均自带有一定的缓冲区，因此你输出的内容不一定能立刻被交互库/SPJ 所读取。如果不在合适的时间清空缓冲区，很可能会造成两个程序互相等待对方输出的情况而 TLE。
2. 每次输出完一定内容、希望对面的程序开始进行处理时，都必须手动清空缓冲区。在 C 语言中，可使用 `fflush(stdout)` 函数。在 C++ 语言中，可使用 `std::cout << std::flush` ；在使用 `std::endl` 输出一个换行时，C++ 语言也会自动清空缓冲区。
3. 交互库（以及 SPJ）最好不要占用太多的 CPU 资源，因为它将与用户的程序在同一个核心上执行。最好在评测程序等待来自 SPJ 的输入，或者评测程序已经结束运行之后，再进行复杂的计算。