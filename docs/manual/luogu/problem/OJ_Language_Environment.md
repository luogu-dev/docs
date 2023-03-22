# 评测机语言环境信息

为了方便大家使用洛谷，现在将评测机的语言环境公布如下：

| 语言 | 版本信息 |
| :----------- | :----------- |
| Pascal | `Free Pascal Compiler version 3.2.0 [2021/11/21] for x86_64` |
| C/C++ | `gcc version 11.2.0 (GCC)` |
| C++14 (GCC 9) | `gcc version 9.3.0 (GCC)` |
| Python 3 | `3.9.6, NumPy 1.21.2` |
| PyPy 3 | `Python 3.7.10 (77787b8f4c49115346d1e9cbaf48734137417738, Nov 21 2021, 04:50:42), PyPy 7.3.5 with GCC 10.3.0` |
| Java 8 | `OpenJDK Runtime Environment (build 1.8.0_272-b10)` |
| Node.js | `14.18.1` |
| Ruby | `ruby 2.7.4p191 (2021-07-07) [x86_64-linux]` |
| Go | `1.16.9` |
| Rust | `rustc 1.58.0-nightly (65f3f8b22 2021-11-21)` |
| PHP | `PHP 7.3.19-1~deb10u1 (cli) (built: Jul  5 2020 06:46:45) ( NTS ) Zend Engine v3.3.19, with Zend OPcache v7.3.19-1~deb10u1` |
| PHP | `PHP 8.0.12 (cli) (built: Oct 19 2021 10:34:32) ( ZTS ) Zend Engine v4.0.12, with Zend OPcache v8.0.12` |
| Mono C# | `mono-6.2.0.122` |
| Mono VB | `Visual Basic Compiler version 3.6.0-4.20224.5 (ec77c100)` |
| Kotlin/JVM | `kotlinc-jvm 1.6.0 (JRE 17.0.1+12-nixos)` |
| Scala | `Scala compiler version 2.13.7` |
| Haskell | `Glasgow Haskell Compiler, Version 8.10.7` |
| Perl | `perl 5, version 34, subversion 0 (v5.34.0) built for x86_64-linux-thread-multi` |

*最后更新时间：2021/12/01*  

注意：

- 除 C/C++/Pascal 外的语言，由于常数时间差距，不保证正确算法的执行所用时间和内存能够通过评测而不超出限制。洛谷不为此类语言提供多余的时间和内存限制。
- 为了比赛等情况下的公平，在 C/C++ 代码的编译中，如果出现了通过 pragma 和 attribute 打开优化开关的行为是会导致编译失败的，详见[公告贴](https://www.luogu.com.cn/discuss/show/259685)。比赛主办方统一打开优化的情况下例外。可以使用评测机 CPU 支持的指令集。
- C++14 (GCC 9) 与 NOI 官网公布的版本保持一致。
- PyPy 无 NumPy 支持，若需要使用 NumPy，请选择 Python。
- Python 2 已于 2020 年结束了它的生命周期，洛谷也不再提供 Python 2 和 PyPy 2 支持。请使用 Python 3 或 PyPy 3。
- Haskell 环境安装了[官网](https://www.haskell.org)所列举的核心包和常用包(见 Features-Packages 栏)。
- 环境使用 Nix 管理，nixpkgs commit hash 57be0c5d9650a5c3970439ba7a1f4a017cd98cc0。
- 评测环境中定义环境变量 `ONLINE_JUDGE=luogu`，可根据此判断是否在评测环境。

另附部分语言的编译命令行（不包括源码和二进制文件路径、开启 O2 优化的参数和 gcc 的语言标准限定参数）：

| 语言 | 参数 |
| :----------- | :----------- |
| Pascal | `fpc -dONLINE_JUDGE -vnw` |
| C/C++ | `gcc -DONLINE_JUDGE -Wall -fno-asm -lm -march=native` |
| Java 8 | `javac` |
| Go | `go build` |
| Rust | `rustc --edition 2021 -W warnings` |
| Mono C# | `mcs -define:ONLINE_JUDGE` |
| Mono VB | `vbnc -define:ONLINE_JUDGE` |
| Kotlin/JVM | `kotlinc -jvm-target 1.8 -include-runtime` |
| Scala | `scalac -optimize -deprecation -feature -explaintypes -target:jvm-1.8` |
| Haskell | `ghc -DONLINE_JUDGE -Wall` |
