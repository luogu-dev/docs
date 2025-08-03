---
sidebar_position: 1
---
# 在线评测

洛谷评测系统运行于 Linux 上，虽与主流竞赛相同，但无法保证 Linux 内核版本一致。洛谷评测系统采用分布式集群保证评测效率，采用基于 Linux 内核 cgroup 模块的沙盒技术保证评测安全。

洛谷评测系统支持的语言请参考下面的[语言支持](#languages)部分。

:::info[注意]

除 C/C++/Pascal 外的语言，由于常数时间差距，不保证正确算法的执行所用时间和内存能够通过评测而不超出限制。洛谷不为此类语言提供多余的时间和内存限制。

:::

目前所有支持 O2 优化的语言将默认开启 O2 优化，用户可手动关闭。有"O2 优化"标签的题目在评测时均会自动开启 O2 优化，题目上传者或者管理员可根据需要自行开启。

优先级：“O2 优化”标签 > “O2 优化”选项

## 各个评测状态

- AC：Accept，程序通过。
- CE：Compile Error，编译错误。
- PC：Partially Correct，部分正确。
- WA：Wrong Answer，答案错误。
- RE：Runtime Error，运行时错误。
- TLE：Time Limit Exceeded，超出时间限制。
- MLE：Memory Limit Exceeded，超出内存限制。
- OLE：Output Limit Exceeded，输出超过限制。
- UKE：Unknown Error，出现未知错误。

为什么在本地/其他网站 AC 了，洛谷上却没过？请[点击查阅常见问题](../faq.md#why-unac)。

## Special Judge

[帮助：Special Judge](./special-judge.md)

## 语言支持 {#languages}

洛谷评测系统的语言环境使用 Nix 准备，Nix 的配置、使用的 nixpkgs 版本、使用的编译器版本公开在 [luogu-dev/judge-env](https://github.com/luogu-dev/judge-env)。

评测环境中定义环境变量 `ONLINE_JUDGE=luogu`，可根据此判断是否在评测环境。

### 输入输出格式

各语言的标准输入输出方法请参考 [P1001 A+B Problem](https://www.luogu.com.cn/problem/P1001#:~:text=%E6%9C%AC%E9%A2%98%E5%90%84%E7%A7%8D%E8%AF%AD%E8%A8%80%E7%9A%84%E7%A8%8B%E5%BA%8F%E8%8C%83%E4%BE%8B%EF%BC%9A)。

### C/C++ 家族

C/C++ 家族提供多个 C/C++ 语言标准的 GCC 编译环境，这些标准为：
- C (C99, ISO/IEC 9899:1999)
- C++98 (ISO/IEC 14882:1998)
- C++11 (ISO/IEC 14882:2011)
- C++14 (ISO/IEC 14882:2014)
- C++17 (ISO/IEC 14882:2017)
- C++20 (ISO/IEC 14882:2020)
- C++23 (ISO/IEC 14882:2024)

他们都有相同的编译开关：

```shell
# O2 优化开关为 -O2
gcc -x c -std=c99 -DONLINE_JUDGE -Wall -fno-asm -lm -march=native
g++ -x c++ -std=$version -fPIC -DONLINE_JUDGE -Wall -fno-asm -lm -march=native
```

当前的版本信息为：

```
# gcc --version
gcc (GCC) 15.1.0
Copyright (C) 2025 Free Software Foundation, Inc.
```

:::caution[优化开关提示]

为了比赛等情况下的公平，在 C/C++ 代码的编译中，如果出现了通过 `pragma` 和 `attribute` 打开优化开关的行为是会导致编译失败的，详见[公告帖](https://www.luogu.com.cn/discuss/show/259685)。为了达成这一效果，我们对 GCC 进行了[一点小修改](https://github.com/luogu-dev/judge-env/blob/master/gcc/13_disable-pragma-and-attribute-for-optimize.patch)。

:::

另外，针对 NOI 系列比赛（也是洛谷用户参赛比例最大的比赛）的环境，我们专门提供了 GCC 9.3.0 版本的 C++14 标准选项，以符合 CCF 公布的 NOI Linux 2.0 竞赛环境（[官网](https://www.noi.cn/gynoi/jsgz/2021-07-16/732450.shtml)）。这也是洛谷在大多数情况的默认选择的语言。它的编译开关和上面一样，当前版本信息如下：

```
# gcc --version
gcc (GCC) 9.3.0
Copyright (C) 2019 Free Software Foundation, Inc.
```

### Pascal

Pascal 语言使用如下编译开关：

```shell
# O2 优化开关为 -O2
fpc -dONLINE_JUDGE -vnw 
```

当前版本信息如下：

```
# fpc -i
Free Pascal Compiler version 3.2.2

Compiler date      : 2025/07/05
Compiler CPU target: x86_64
```

### Python 家族

Python 家族目前仅提供 Python 3（CPython）、PyPy 3 两种选项。Python 3 同时提供 NumPy 库，PyPy 3 无此支持。

他们当前版本信息如下：

```
# python3 -VV
Python 3.13.5 (main, Jun 11 2025, 15:36:57) [GCC 14.3.0]

# python3 -c 'print(__import__("numpy").__version__)'
2.3.1
```

```
# pypy3 -VV
Python 3.10.14 (39dc8d3c85a7, Jun 24 2025, 03:33:34)
[PyPy 7.3.17 with GCC 14.2.1 20250322]
```

Python 2 已于 2020 年结束了它的生命周期，因此洛谷也不再提供 Python 2 和 PyPy 2 支持。

### Java 家族

Java 家族提供多个版本的选项，它们均使用 OpenJDK：
- Java 8
- Java 21

使用的编译/执行选项为：

```shell
javac
java -DONLINE_JUDGE
```

:::info[注意]

Java 源代码将保存为 `Main.java` 文件，因此被评测的代码应该有类似如下的格式，即类名为 `Main`：

```java
public class Main {
    public static void main(String args[]) throws Exception {
        // insert your code here
    }
}
```

:::

当前版本信息为：

```
# java -version
openjdk version "1.8.0_442"
OpenJDK Runtime Environment (build 1.8.0_442-06)
OpenJDK 64-Bit Server VM (build 25.442-b06, mixed mode)
```

```
# java -version
openjdk version "21.0.7" 2025-04-15
OpenJDK Runtime Environment (build 21.0.7+6-nixos)
OpenJDK 64-Bit Server VM (build 21.0.7+6-nixos, mixed mode, sharing)
```

### Rust

其编译开关为：

```shell
# O2 开关为 -C opt-level=2
rustc --edition 2024 -W warnings
```

当前版本信息为：

```
# rustc -V
rustc 1.88.0 (6b00bc388 2025-06-23)
```

### Go

当前版本信息为：

```
# go version
go version go1.24.4 linux/amd64
```

### C#

C# 目前仅提供 Mono 的编译器实现。编译/执行指令为：

```shell
mcs -define:ONLINE_JUDGE
mono
```

当前版本信息为：

```
# mono --version
Mono JIT compiler version 6.14.1 (tarball Tue Apr 29 17:43:02 UTC 2025)
Copyright (C) Novell, Inc, Xamarin Inc and Contributors. www.mono-project.com
        TLS:
        SIGSEGV:       altstack
        Notifications: epoll
        Architecture:  amd64
        Disabled:      none
        Misc:          softdebug
        Interpreter:   yes
        LLVM:          supported, not enabled.
        Suspend:       hybrid
        GC:            sgen (concurrent by default)
```

### Haskell

编译开关为：

```shell
# O2 开关为 -O2
ghc -DONLINE_JUDGE -Wall
```

当前版本信息为：

```
# ghc --version
The Glorious Glasgow Haskell Compilation System, version 9.8.4

# ghc --show-packages | grep -E 'id: (.+)'
id: base
id: stm-2.5.3.1-bf39
id: ghci-9.8.4-13f2
id: haskeline-0.8.2.1-4be1
id: ghc-compact-0.1.0.0-db7e
id: filepath-1.4.301.0-abf5
id: text-2.1.1-332f
id: system-cxx-std-lib-1.0
id: parsec-3.1.17.0-9df1
id: containers-0.6.8-bda1
id: mtl-2.3.1-4301
id: unix-2.8.6.0-a07b
id: ghc-boot-9.8.4-5858
id: process-1.6.25.0-a883
id: exceptions-0.10.7-9038
id: semaphore-compat-1.0.0-4217
id: array-0.5.8.0-25c5
id: terminfo-0.4.1.6-97ac
id: hpc-0.7.0.0-4276
id: pretty-1.1.3.6-0329
id: xhtml-3000.2.2.1-8f3e
id: deepseq-1.5.1.0-013a
id: directory-1.3.8.5-3f1c
id: time-1.12.2-85bf
id: Cabal-syntax-3.10.3.0-aa2e
id: ghc-heap-9.8.4-7357
id: binary-0.8.9.1-6bc0
id: transformers-0.6.1.0-4025
id: Cabal-3.10.3.0-2169
id: bytestring-0.12.1.0-7d6c
id: integer-gmp-1.1-2f6a
id: ghc-boot-th-9.8.4-fe63
id: ghc-9.8.4-4b7d
id: ghc-prim
id: rts
id: template-haskell
id: ghc-bignum
```

### OCaml

OCaml 语言使用 `ocamlopt` 编译为 native 程序进行评测，其编译开关为：

```shell
# O2 开关为 -O2
ocamlopt
```

当前版本信息为：

```
# ocamlopt -version
5.3.0
```

### Lua

Lua 语言目前仅提供 Lua 实现。当前版本信息为：

```
# luac -v
Lua 5.2.4  Copyright (C) 1994-2015 Lua.org, PUC-Rio
```

### Julia

当前版本信息为：

```
# julia -version
julia version 1.11.6
```

### Kotlin

Kotlin 有 JVM 和 native 两种编译目标，但由于某些原因，洛谷目前仅支持 Kotlin/JVM。

Kotlin/JVM 的编译目标为 Java 21 的 JVM，编译/执行指令如下：

```shell
kotlinc-jvm -jvm-target 21 -include-runtime
java -DONLINE_JUDGE 
```

当前版本信息为：

```
# kotlinc-jvm -version
info: kotlinc-jvm 2.2.0 (JRE 21.0.7+6-nixos)
```

### Scala

Scala 目前仅支持 2.x 版本。编译目标为 Java 21 的 JVM，编译/执行指令如下：

```shell
scalac -optimize -deprecation -feature -explaintypes -target:21
java -DONLINE_JUDGE 
```

当前版本信息为：

```
# scalac -version
Scala compiler version 3.3.6 -- Copyright 2002-2025, LAMP/EPFL
```

### PHP

当前版本信息为：

```
# php --version
PHP 8.4.10 (cli) (built: Jul  2 2025 02:22:42) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.4.10, Copyright (c) Zend Technologies
    with Zend OPcache v8.4.10, Copyright (c), by Zend Technologies
```

### Perl

当前版本信息为：

```
# perl --version
This is perl 5, version 40, subversion 0 (v5.40.0) built for x86_64-linux-thread-multi
Copyright 1987-2024, Larry Wall
```

### Ruby

当前版本信息为：

```
# ruby --version
ruby 3.3.8 (2025-04-09 revision b200bad6cd) [x86_64-linux]
```

### Node.js

当前版本信息为：

```
# node --version
v22.17.0
```
