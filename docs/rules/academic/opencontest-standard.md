---
sidebar_position: 1
sidebar_label: 公开赛规范
---

# 公开比赛规范及要求

:::tip

本规范将作为洛谷公开比赛的比赛规范，管理将以此规范为标准进行审核，规范的最终解释权归管理所有。

提交公开赛审核后，一般情况下一周内会得到反馈，请勿催促。

非官方的 Unrated 比赛仅保证通过了基于基本规范的形式审查，不保证其题目质量，但题目质量过低将进行适当的惩罚。

当前版本更新时间：2023-10-08。

:::

## 基本规范

### 比赛名称

- 比赛名称不应与较高知名度的比赛相同或相似。
- 未经管理组许可，不应冠以「模拟赛」或类似名称。

### 题目要求

- 题目需遵守[洛谷主题库题目规范](./problem-standard.md)，不要打上难度或算法标签。
- 题目数量应 $\ge 3$，难度不应低于 CSP-J。
- **题目必须原创。**

### 比赛说明

- 应当遵守如下基本规范：
  - 请正确使用**全角中文**标点符号。特别地，句末要有**句号**。
  - 数学公式（运算式、运算符、参与运算的常数、作为变量的字母等）应使用 LaTeX，非数学公式（一般英文单词、题目名、算法名、人名等）不应使用 LaTeX。
  - **中文与英文字符或公式之间以半角空格隔开，但中文标点符号与英文字符或公式之间不应有空格。**
- 应当有一名**蓝钩或金钩用户**作为比赛负责人，并在显著位置标明。
  - **必须由该负责人将比赛提交审核。**
  - **该负责人对公开赛负有全部责任，并将承担可能的惩罚。**
  - 如果是个人公开赛，建议以比赛出题人为负责人；如果是团队公开赛，建议以团队所有者为负责人。**当二者不为同一人时，另一人也默认为比赛负责人，也将承担可能的惩罚。**
  - 无论赛前、赛时还是赛后，管理只会与**在显著位置标明的负责人**交流，其他人（包括默认的负责人）联系管理将可能影响审核。
- **所有参与比赛相关事务的人员，包括出题人、验题人、负责人、出题团队成员等，都需要在洛谷进行奖项认证**。由于奖项认证目前主要针对 OI 选手，因此非 OI 选手如果希望举办比赛，请直接联系管理组确认身份。
- 应当声明比赛的**整体难度**，目的是给参赛者一定的参考，故要求必须真实。
  - 声明形式不限，如下是几种推荐的声明形式：CSP-J/CSP-S/NOIP/NOI、Div. 1/2、**普及+/提高** 至 **省选/NOI-**。**不允许对标特定年份某场比赛的难度声明**，如「难度对标 NOIP2018 普及组」。
  - 声明难度下限不高于 **普及+/提高** 的比赛将会审查是否属实。
- 声明整体难度为 CSP-J 或同等难度的比赛将受到审查，必须满足：
  - 涉及的知识点需在 CCF 大纲入门级范围内。
  - 第一题不超过 普及-，题目描述应为贴近生活的、$\le 500$ 字的现代文，不应存在任何抽象概念或者长难句，进行了良好的分段以及句读。
  - 至少一半的题目不超过 普及/提高-，出现的所有数学概念**不得超过初中范围**。（例如，求和不得使用 $\sum$ 符号，而应使用省略号表示。）
  - 所有题目难度不超过 普及+/提高，题目描述不得超过 $1000$ 字。
  - 如上要求当中，“字数”指的是“题目描述”部分**以及题目描述的补充说明**，例如专业领域术语的定义。
- 应当注明所有题目的贡献名单，至少包括**出题人和验题人**。
  - 所有公开赛题目默认加入主题库，题目贡献者为出题人。**如果出题人不愿意将题目加入主题库，请提前私信管理。**
  - 每道题目都需要至少一位验题人，**出题人和所有验题人都需要提交独立完成的 AC 代码**。
- 应当给出**隐藏在洛谷博客中的题解**，题解需遵守[题解审核及反馈要求](./solution-standard.md)。

## 基本要求

### 提交审核

- 请提交 [工单](https://www.luogu.com.cn/ticket) 进行审核，点击【新建工单】→【申请公开赛】→输入比赛 ID→输入申请信息，并且选择对应的比赛类型。
- 提交审核时，应确保整个比赛的全部内容已经准备完毕。在此之前，比赛应当保持个人邀请赛、团队邀请赛或其它状态。
- 请尽量确保比赛的报名人数为 0。

### 申请 Rated

- 申请 Rated 对比赛工作人员的奖项认证有更高的要求。具体而言，要求负责人达到 7 级，各题出题人均达到 5 级，其他人员的要求不变。
- 若希望比赛 Rated，请在新建工单页面的比赛类型选择“Rated 公开赛”。
- **如果明显不够 Rated 质量却依然申请 Rated，将进行适当的惩罚。**

### 修改题目

比赛过审后，在赛前和赛时，禁止未经管理允许进行**改变题目本质的修改**。

**改变题目本质的修改**包括但不限于增加/减少/更换题目、大幅修改题面、更换测试数据、修改分数配置等。

- 赛前，若需进行改变题目本质的修改，必须上报管理，或重新提交审核。**未经管理允许私自操作，一经发现将可能直接撤下比赛。**
- 赛时，若出现可能影响比赛公平性的事件（如疑似重题），应第一时间上报管理。**原则上，任何情况下，都不允许在赛时进行改变题目本质的修改。**

### 比赛时间

- 非官方的 Unrated 比赛至多提前**一周**在主页显示，官方比赛和 Rated 比赛至多提前**两周**在主页显示，如若修改时间请告知管理。
- 若出现比赛时间冲突的情况，按下述原则处理：
  - 非官方的 Unrated 比赛不允许与官方比赛和 Rated 比赛时间冲突。
  - 非官方的 Unrated 比赛允许时间冲突，但建议协商修改。

### 发布讨论

- 赛前至少一小时在**学术版**发布**赛时答疑帖**，赛后至多一小时在**学术版**发布**赛后总结帖**，可联系管理置顶，置顶时间各不超过一天。

## 惩罚

因申请举办公开赛而可能受到的惩罚有**警告、棕名、失去出题资格一个月/三个月/半年/一年**。

**失去出题资格**指禁止参与公开赛的所有相关事务，包括但不限于作为出题人、验题人、负责人、出题团队成员等参与公开赛。

比赛的负责人包括了标明的负责人和默认的负责人。

所有针对个人的惩罚，效力范围为此人的**所有账号**，欢迎举报。

- 提交明显不合格的比赛，将警告后失去出题资格。
- 多次提交不合格的比赛，将警告后失去出题资格。情节严重者，封禁团队和团队主。
- 故意搬题，该题的出题人将棕名且失去出题资格，比赛的负责人将失去出题资格。如是团队公开赛，团队本身也将失去出题资格。
- 对于负面评价过多的题目，该题的出题人和验题人，以及比赛的负责人将被警告。如是团队公开赛，团队本身也将被警告。若警告后再犯，将失去出题资格。

### 惩罚公告

见 [https://www.luogu.com.cn/discuss/174936](https://www.luogu.com.cn/discuss/174936)。

## 原帖存档

[https://www.luogu.com.cn/paste/birjyc4p](https://www.luogu.com.cn/paste/birjyc4p)
