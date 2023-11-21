---
sidebar_position: 1
---
# 在线评测

洛谷评测系统搭建于 Linux 上，采用分布式集群保证评测效率，采用沙盒技术保证评测安全。目前，评测系统支持的提交语言可以参考[洛谷开放平台-评测能力-语言支持](https://docs.lgapi.cn/open/judge/langs)。

有"O2 优化"标签的题目在评测时均会自动开启 O2 优化，题目上传者或者管理员可根据需要自行开启。  

目前所有支持 O2 优化的语言将默认开启 O2 优化，用户可手动关闭。

优先级："O2 优化"标签 > O2 优化选项

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

## 常见“我在本地/xxOJ AC了、洛谷却不过”的原因

- Linux 中换行符是'\n'而Windows中是'\r\n'（多一个字符），有些数据在 Windows 中生成，而在洛谷评测机 Linux 环境下评测。这种情况在字符串输入中非常常见。
- 评测系统建立在 Linux 下，可能由于使用了 Linux 的保留字而出现 CE，但在 Windows 下正常。
- Linux 对内存的访问控制更为严格，因此在 Windows 上可能正常运行的无效指针或数组下标访问越界，在评测系统上无法运行。
- 严重的内存泄露的问题很可能会引起系统的保护模块杀死你的进程。因此，凡是使用 `malloc`(或 `calloc,realloc,new`)分配而得的内存空间，请使用 `free`(或 `delete`)完全释放。
- 数据可能真的有问题。但是如果不止一个人通过了这道题，那最好不要怀疑是数据的锅。

## Special Judge

[帮助：Special Judge](./special-judge.md)
