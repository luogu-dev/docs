# Special Judge 功能说明

当一道题目的答案不唯一，即存在多组符合要求的解时，必须使用 Special Judge（以下简称 SPJ）进行评测。

SPJ 程序会根据输入数据以及其他相关信息来判定选手程序的输出是否正确，并返回评测结果。

洛谷采用的 SPJ 标准与 Codeforces 一致，均基于 Testlib 库。

下载地址：

[https://github.com/MikeMirzayanov/testlib/releases/download/0.9.41/testlib-0.9.41.zip](https://github.com/MikeMirzayanov/testlib/releases/download/0.9.41/testlib-0.9.41.zip)

在洛谷上，SPJ 的编译参数为：`g++ -fno-asm -std=c++14 -O2`，即已经开启 C++14 以及 O2 优化。

## 使用方法

### 基础教程

SPJ 仅支持使用 C++ 编写。其编写方式与普通题目类似，主要区别在于输入输出的处理。首先创建文件 `checker.cpp`，并将上述压缩包中的所有内容解压至与该文件相同的目录下。

以下为一个简单示例：若选手答案和标准答案输出的差值小于 $0.01$，则判定为通过（AC），否则判定为错误（WA）。

```cpp
#include "testlib.h"

int main(int argc, char* argv[]) {
    setName("compares two doubles");
    registerTestlibCmd(argc, argv); // 初始化 checker，必须在最前面调用一次。
    double pans = ouf.readDouble(); // 从选手输出读取一个 double 类型变量
    double jans = ans.readDouble(); // 从标准答案读取一个 double 类型变量

    if (fabs(pans - jans) < 0.01) // 如果差值小于 0.01，返回答案正确
        quitf(_ok, "The answer is correct.");
    else // 否则返回答案错误
        quitf(_wa, "The answer is wrong: expected = %f, found = %f", jans, pans);
}

```

在 Testlib checker 中，不使用 cin/cout 来读写判题数据，而是使用三条输入流（由评测系统提供）：

- `inf`：测试输入文件（题目输入数据），在上例中未使用；
- `ans`：标准答案文件（参考输出/最优值/一组可行解等，不一定唯一）；
- `ouf`：选手输出文件（你要判定的对象）；

Checker 的职责通常是验证 ouf 是否满足题意（例如：选手的输出是否是一组合法的可行解）。

在 testlib.h 中，有四种常见的答案判定：
- `_ok`：通过本题；
- `_wa`：答案错误；
- `_pe`：格式错误（洛谷目前不支持此类评测结果）；
- `_fail`：checker 自身异常，**不要用它表示选手答案错误**；

对于 checker，有以下的常用指令，可以用于读入测试数据：

- `void registerTestlibCmd(argc, argv)`：初始化 checker，必须在最前面调用一次。
- `char readChar()`：读入一个 char，指针后移一位。
- `char readChar(char c)`：和上面一样，但是只能读到一个字母 c。
- `char readSpace()`：同 readChar(' ')。
- `string readToken()`：读入一个字符串，但是遇到空格、换行、eof 为止。
- `long long readLong()`：读入一个 long long。
- `long long readLong(long long L, long long R)`：同上，但是限定只能读入 $[L, R]$ 范围的整数。$L,R$ 必须是 long long 类型的变量。
- `int readInt()`：读入一个 int。
- `int readInt(int L, int R)`：同上，但是限定只能读入 $[L, R]$ 范围的整数。
- `double readReal()`：读入一个实数。
- `double readReal(double L, double R)`：同上，但是限定只能读入 $[L, R]$ 范围的实数。
- `double readStrictReal(double L, double R, int minPrecision, int maxPrecision)`：读入一个限定范围精度位数的实数。
- `string readString()`、`string readLine()`：碰撞一行 string，到换行或者 eof 为止。
- `void readEoln()`：读入一个换行符。
- `void readEof()`：读入一个 eof。
- `void skipBlanks()`：跳过空白字符，跳到下一个非空白字符。如果需要对输入格式做严格的换行校验，但是不在意输出行末空格的话，务必先使用 `skipBlanks` 再 `readEoln`，否则对用户输出格式的要求可能将过于苛刻。
- `bool seekEof()`：跳过空白字符后，返回是否读到了 eof。

当读入完毕测试数据后，即可和其他正常程序一样，通过编写 C++ 代码，对选手的输出进行校验，最后需要返回评测结果，类似于 printf 的使用方式：

- `quitf(_ok, "The answer is correct. answer is %d", ans);`：返回 AC。
- `quitf(_wa, "The answer is wrong: expected = %f, found = %f", jans, pans);`：返回 WA。
- `quitp(0.5,"Partially Correct get %d percent", 50);`：给出 50% 的部分分。

testlib.h 要求程序必须以 quitf 或者 quitp 结束，不允许没有返回评测结果的情况。

### 常用案例

接下来，提供 testlib.h 官方提供的若干个案例，它们可以用于你进一步了解 testlib.h 的使用，也可以直接用于试题中。

#### 浮点数比较

该文件可以用于任意数量的浮点数判断。该程序用于判断两个浮点数的绝对误差或者相对误差是否小于 $\epsilon$。换句话说，如果你的程序输出 $a$ 而正确值为 $b$，当满足以下条件时答案被接受：

$$
\frac{|a - b|}{\max(1, b)} \le \epsilon
$$

```cpp
#include "testlib.h"

using namespace std;

const double EPS = 1E-6;

int main(int argc, char *argv[]) {
    setName("compare two sequences of doubles, max absolute or relative  error = %.7f", EPS);
    registerTestlibCmd(argc, argv);

    int n = 0;
    double j = 0, p = 0;

    while (!ans.seekEof()) {
        n++;
        j = ans.readDouble();
        p = ouf.readDouble();
        if (!doubleCompare(j, p, EPS)) {
            quitf(_wa, "%d%s numbers differ - expected: '%.7f', found: '%.7f', error = '%.7f'",
                  n, englishEnding(n).c_str(), j, p, doubleDelta(j, p));
        }
    }

    if (n == 1)
        quitf(_ok, "found '%.7f', expected '%.7f', error '%.7f'", p, j, doubleDelta(j, p));

    quitf(_ok, "%d numbers", n);
}
```

需要指出，通常推荐使用 testlib.h 自带的 `doubleCompare` 函数进行浮点数比较，而非自己随意实现。`doubleCompare` 传参分别是标准答案、用户答案和容许的相对误差，返回 true 表示用户答案在误差范围内，返回 false 表示用户答案超过误差范围。

#### 判断 Yes/No

该文件可以用于任意数量的 Yes 和 No 判断，且大小写不敏感。例如：如果标准答案是 Yes，那么选手答案是 YEs 也视作正确。

```cpp
#include "testlib.h"
#include <string>

using namespace std;

const string YES = "YES";
const string NO = "NO";

int main(int argc, char *argv[]) {
    setName("%s", ("multiple " + YES + "/" + NO + " (case insensitive)").c_str());
    registerTestlibCmd(argc, argv);

    int index = 0, yesCount = 0, noCount = 0;
    string pa;
    while (!ans.seekEof() && !ouf.seekEof()) {
        index++;
        string ja = upperCase(ans.readToken());
        pa = upperCase(ouf.readToken());

        if (ja != YES && ja != NO)
            quitf(_fail, "%s or %s expected in answer, but %s found [%d%s token]",
                  YES.c_str(), NO.c_str(), compress(ja).c_str(), index, englishEnding(index).c_str());

        if (pa == YES)
            yesCount++;
        else if (pa == NO)
            noCount++;
        else
            quitf(_pe, "%s or %s expected, but %s found [%d%s token]",
                  YES.c_str(), NO.c_str(), compress(pa).c_str(), index, englishEnding(index).c_str());

        if (ja != pa)
            quitf(_wa, "expected %s, found %s [%d%s token]",
                  compress(ja).c_str(), compress(pa).c_str(), index, englishEnding(index).c_str());
    }

    int extraInAnsCount = 0;
    while (!ans.seekEof()) {
        ans.readToken();
        extraInAnsCount++;
    }

    int extraInOufCount = 0;
    while (!ouf.seekEof()) {
        ouf.readToken();
        extraInOufCount++;
    }

    if (extraInAnsCount > 0)
        quitf(_wa, "Answer contains longer sequence [length = %d], but output contains %d elements",
              index + extraInAnsCount, index);

    if (extraInOufCount > 0)
        quitf(_wa, "Output contains longer sequence [length = %d], but answer contains %d elements",
              index + extraInOufCount, index);

    if (index == 0)
        quitf(_ok, "Empty output");
    else if (index == 1)
        quitf(_ok, "%s", pa.c_str());
    else
        quitf(_ok, "%d token(s): yes count is %d, no count is %d", index, yesCount, noCount);

    quitf(_fail, "Impossible case");
}
```

#### 针对 Case #%d: 的解析：

部分 ICPC 试题以及 Google CodeJam 试题会使用形如：

```
Case #1: 2
Case #2: 4
Case #3: 0
```

的形式输出答案。对于此类情形，testlib.h 提供了一个官方的解析模板，可以在此基础上增加需要自定义校验的内容:

```cpp
/**
 * Checker to compare output and answer in the form:
 *
 * Case #1: <number>
 * Case #2: <number>
 * ...
 * Case #n: <number>
 *
 */

#include "testlib.h"
#include <vector>
#include <string>

using namespace std;

vector<long long> readStream(InStream &in) {
    vector<long long> result;

    for (int testCase = 1; !in.seekEof(); testCase++) {
        string caseStr = in.readToken();
        if (caseStr != "Case")
            in.quitf(_pe, "Expected 'Case' but found '%s' [test case %d]", compress(caseStr).c_str(), testCase);

        string numExpStr = "#" + to_string(testCase) + ":";
        string numStr = in.readToken();
        if (numExpStr != numStr)
            in.quitf(_pe, "Expected '%s' but found '%s' [test case %d]", compress(numExpStr).c_str(),
                     compress(numStr).c_str(), testCase);

        result.push_back(in.readLong()); // 如果一行内有多个整数，可以编辑这里。
    }

    return result;
}

int main(int argc, char *argv[]) {
    setName("Single int64 checker with testcase-support");
    registerTestlibCmd(argc, argv);

    vector<long long> ja = readStream(ans);
    vector<long long> pa = readStream(ouf);

    for (unsigned int i = 0; i < min(ja.size(), pa.size()); i++)
        if (ja[i] != pa[i])
            quitf(_wa, "Expected %s found %s [test case %d]", vtos(ja[i]).c_str(), vtos(pa[i]).c_str(), i + 1);

    if (ja.size() != pa.size())
        quitf(_pe, "Expected %u test case(s) but found %u", (unsigned int) (ja.size()), (unsigned int) (pa.size()));

    string message = format("%u case(s):", (unsigned int) (ja.size()));
    if (ja.size() <= 5) {
        for (auto elem: ja)
            message += " " + vtos(elem);
    } else {
        for (int i = 0; i < 3; i++)
            message += " " + vtos(ja[i]);
        message += " ...";
        for (int i = 0; i < 2; i++)
            message += " " + vtos(ja[ja.size() - 2 + i]);
    }

    quitf(_ok, "%s", message.c_str());
}
```

可以在这个案例中发现，为了便于处理 `ans` 流和 `ouf` 流，可以编写一个通用的函数。事实上，`ans`、`ouf` 和 `inf` 都是 `InStream` 类型的对象，因此它们可以共享相同的读取处理方法。`readStream` 函数接受的是一个 `InStream` 类型的引用。由于 `InStream` 是一个通用的输入流类，`ans` 和 `ouf` 都可以作为参数传递给该函数，执行相同的读取操作。当需要编写较复杂的处理逻辑时，可以通过这一点优化代码编写。

## 测试

使用编译器将该文件编译。在命令行中输入：

```
./checker in.txt out.txt ans.txt (Linux)
checker.exe in.txt out.txt ans.txt (Windows)
```

其中 in.txt out.txt ans.txt 分别是放在同一目录下的输入文件、选手输出、标准答案。

程序将返回结果。

## 上传与配置

直接将 checker.cpp（必须这个名字）塞入测试数据的压缩包内然后上传就行了。

:::caution[重要]

必须加上“Special Judge”标签。

:::

由于在线评测时需要编译 checker.cpp 并且执行比较，评测带有 Special Judge 的试题会慢于正常试题。

## Codeforces 赛制

由于 Hack 机制的存在，CF 赛制中 SPJ 是必须的。即使你有一个标程并且在 Hack 的时候直接比较这个标程的输出和用户程序的输出就可以判断 Hack 的有效与否，你也需要把这个标程改成 SPJ 的形式。也就是说，CF 赛制的题目数据包中必须有 checker.cpp 一个程序。

同时，还需要 validator.cpp 一个程序，用来验证提交的 Hack 数据的合法性，书写方式和规范同如上的 SPJ 说明，具体请参考 Testlib 的文档。
