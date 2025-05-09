---
sidebar_label: 官方比赛规范【出题组必读】
sidebar_position: 10
---

# 官方比赛规范

## 分类

- 洛谷大月赛（Div.1+Div.2）：接受申办，比赛名称为 `【LGR-xxx-Div.1/2】洛谷 x 月月赛 I/II/... (& ???)`。
- 洛谷小月赛（Div.2）：接受申办，比赛名称为 `【LGR-xxx-Div.2】洛谷 x 月月赛 I/II/... (& ???)`。
- 普及组月赛（Div.3）：不接受申办，比赛名称为 `【LGR-xxx-Div.3】洛谷网校 x 月普及组月赛 (& ???)`。
- 洛谷基础赛（Div.3）：接受申办，比赛名称为 `【LGR-xxx-Div.3】洛谷基础赛 #x (& ???)`。
- 洛谷入门赛（Div.4）：不接受申办，比赛名称为 `【LGR-xxx-Div.4】洛谷入门赛 #x (& ???)`。

## 洛谷大/小月赛流程

### 申办

请将待审核比赛的类别设置为“团队内部赛”。

请提交 [工单](https://www.luogu.com.cn/ticket) 进行审核，点击【新建工单】→【申请公开赛】→输入比赛 ID→输入申请信息，并且选择对应的比赛类型，并写明联系人的QQ号。

请在工单详情中写明以下信息：

- 负责人：原则上要求**金钩**，但蓝钩也可以。
- 出题履历（可选）：如果负责人只有蓝钩，强烈建议包含此项。
- 申办类型：大月赛 6 题，Div.2 ABCD，Div.1 CDEF；小月赛 4 题，ABCD。
- 题目列表：比赛中包含所有题目和所有备用题目。如果存在备用题，可以在比赛说明中说明每题的位置。题目不要求施工完毕，但需要有完整题意（可以先不进行题面的艺术加工）、输入输出格式、数据范围和部分分设置。
- 审核管理偏好（可选）：分配审核管理时会酌情参考。

**请注意，负责人必须全程切实对本场月赛负责，对每道题目负责，而不能仅仅只是挂名。审核员将主要与负责人进行对接和交流。在任意阶段，如果审核员认为负责人没有起到负责的作用，将有权暂停或中止比赛的举办。**

### 初审

管理组会对申办进行初审，主要是对举办资格进行审查。

### 立项

初审通过的申办将会立项，并加入待审核队列中。

### 审核

每个立项的月赛会按照立项时间顺序分配两位（大月赛）或一位（小月赛）月赛审核员。

审核流程：

- 明确所有参与比赛工作的人员，包括负责人、出题人、验题人、造数据人等，不包括月赛审核员和仅知道题目 idea 而不参与比赛工作的人（但需做好保密工作）。**所有人都需要在洛谷进行奖项认证**（非 OI 选手可以通过其他途径确认身份，但需要额外报备），**总人数不得超过题目数的 2 倍**。
- 明确所有知道题目 idea 的人，无论他们是否参与比赛工作。
- 明确题目来源，包括**出题人资格**和 **idea 形成的过程**，其中**出题人原则上要求蓝金钩**，非蓝金钩的出题人需提供出题履历并由月赛审核员额外审查。
- 明确题目质量和知识点分布。
- 明确题目难度，要求第一题的通过率不低于 50%，前两题涉及的知识点需在 CCF 大纲入门级范围内，前四题涉及的知识点需在 CCF 大纲入门级和提高级范围内。
- 与出题人共同进行查重。
- 考量部分分和测试数据的设计。
- 组题。**可以留有备用题，用于赛前特殊情况下更换。**

经上述流程审核后，月赛审核员决定是否通过该场月赛。若通过，则需要将上述流程中所有审核的内容整理形成一份**文字报告**提交。由审核员提交到洛谷月赛审核群中。请使用该 [文字报告模板](https://www.luogu.com.cn/paste/g6pnkxsv)。

在审核过程中，出题组应当积极配合月赛审核员的工作，尽量多与月赛审核员交换信息。

审核通过之前，出题人可以主动撤销立项。

### 筹办

审核通过后，出题组需要交付完整题目，包含**中文题面、时空限制、部分分与测试数据、官方题解**等内容，可以额外提供英文题面，要求如下：

- 题目需严格遵守 [洛谷主题库题目规范](../problem-standard.md)，不要打上难度或算法标签，**但要打上「洛谷月赛」和「洛谷原创」标签，且应打上「O2 优化」标签。**
- 如果有英文题面，英文题面需要是中文题面的翻译。不可以有差距过大的表述。
- 在无特殊情况下时，任何测试点的时间限制**不应少于 500ms**，所有测试点的时间限制之和**不应超过 360s**，具体限制如下：  
  小月赛各题所有测试点的时间限制之和分别**不应超过 30s、30s、120s、360s**。  
  大月赛各题所有测试点的时间限制之和分别**不应超过 30s、30s、120s、120s、360s、360s**。  
  前两题测试点数量**不应超过 30 个**。  
  如果有超出上述限制的需求，请出题人和比赛审核慎重考虑此需求是否确实合理。如果确实有需求，**请提前与 kkksc03 联系**。
- 在无特殊情况下时，任何测试点的空间限制**应为 512 MiB**。
- 部分分的设计应当合理，测试数据的强度应当尽可能大，数据格式要求详见 [传统题数据格式要求](../../../manual/luogu/problem/testcase-format.md)。
- 如果原定的题目因各种原因（如无法设计合理的部分分、无法保证数据强度、发现做法假了、发现撞题了等）无法使用，且无**事先报告过的备用题**，应当**立刻中止筹办过程**。**禁止临时添加未报告过的题目。**
- 官方题解需严格遵守 [题解审核及反馈要求](../solution-standard.md)，**隐藏在洛谷博客中，但不应在比赛界面显示。**

审核通过后，出题人若需要进行题面的增删和更换需要和审核员沟通，不可以主动撤销立项。

交付完整题目后，出题组与审核员联系比赛排期。排期时间需要距离交付完整题目的时间**至少十天**。

应当在**赛前不少于一周**将比赛挂上主页（[比赛界面模板](https://www.luogu.com.cn/paste/igwgqgfg)），并通知 kkksc03 制作宣传海报。**此项工作主要由月赛审核员完成。**

应当在**赛前不少于三天**完成验题。至少需要第二份 AC 代码。

应当在**赛前至少一小时**在**学术版**发布**赛时答疑帖**。

应当在**赛前**完成直播讲评的测试及讲评课件的制作。

月赛审核员负责完成上述内容的验收工作。

在上述所有流程中，需要确保无关人员无法通过任何渠道获取到题目。特别地，在验题时，一个有风险的途径是把私题的可见性设置为公众可见，正确的做法是将私题迁移至团队内，并设置为**仅团队可见**，让验题人加入团队进行验题。

### 举办

赛时应保证随时都有人进行答疑。

赛时应保证月赛的负责人和至少一位审核管理全程在线。出现任何问题，负责人应及时告知审核管理，由他上报管理组。

赛后收尾工作：

- 审核管理应及时将月赛题目加入主题库，注意修改题目提供者为**出题人**，将题目状态改为**公众可见**，添加对应题目的**算法标签**，并在三天后打开前两题的**题解通道**。
- 负责人应当在赛后至多一小时在**学术版**发布**赛后总结帖**，内容包括**各题的通过率**、一血（可选）、**赛时出现的所有失误及致歉**（没有锅当然就可以不致歉）和奖品发放的结果（可选）等。**该帖同时视为官方的评价渠道。**
- 讲评人进行直播讲评。
- 讲评完成后，出题人应及时将除前两题外的官方题解**取消隐藏并提交审核**。前两题的题解通道打开后，前两题的官方题解也应及时被取消隐藏并提交审核。
- 管理组计算报酬并由 kkksc03 支付，基准出题费为大月赛 4300 元、小月赛 2200 元，详见[细则](./payroll.md)。

另外，该比赛所使用的题目版权归属洛谷，不得授权其他商业机构（无论是否免费）公开使用这些题目及其附属资源，特别包括**在未经洛谷允许的情况下举办同步赛**。

## 洛谷基础赛说明

如果你希望举办洛谷基础赛：

- 你需要在比赛名称前加上 `【申办洛谷基础赛】` 后提交公开赛审核，加上这个前缀的比赛默认为申办洛谷基础赛而非普通的公开赛。同时由**负责人**联系 E.Space，发送「申办洛谷基础赛」的字样并告知比赛链接和 QQ 号。
- 由于申办的方式不同，你需要在已经完成所有准备工作后进行申办，即严格遵守 [洛谷公开比赛规范及要求](../opencontest-standard.md) 中的基本规范。
- 申办洛谷基础赛对比赛工作人员的奖项认证有更高的要求。具体而言，要求负责人达到 7 级，各题出题人均达到 5 级，其他人员的要求不变。

比赛审核组会对比赛进行审核，如果审核通过，该比赛将正式成为洛谷基础赛，这意味着：

- 该比赛将成为洛谷官方比赛。
- 该比赛将重新排期。
- 该比赛将会 Rated。
- 该比赛有额外的难度要求：
  - 基础赛至少要有四道题。
  - **前两道题**不超过 普及-，题目描述应为贴近生活的、$\le 500$ 字的现代文，不应存在任何抽象概念或者长难句，进行了良好的分段以及句读。
  - **前两道题**出现的所有数学概念**不得超过初中范围**。（例如，求和不得使用 $\sum$ 符号，而应使用省略号表示。）
  - **所有题**必须在 CCF 大纲入门级范围内。特别地，允许**最后一题**考察提高组知识点的简单应用，但是需要在**该题题目背景**和**比赛页面**明确标出。
  - **所有题**题目描述不得超过 $1000$ 字，**难度不超过 普及+/提高。**
  - **所有题**不推荐构造等形式较新的题，**禁止出现提交答案题、交互题**。如果出现形式创新的题，审核员会仔细检查形式创新的必要性。
  - 如上要求当中，“字数”指的是“题目描述”部分**以及题目描述的补充说明**，例如专业领域术语的定义。
- 该比赛所使用的题目版权归属洛谷，不得授权其他商业机构（无论是否免费）公开使用这些题目及其附属资源，特别包括**在未经洛谷允许的情况下举办同步赛**。
- 该比赛有 800 元的基准出题费，详见[细则](./payroll.md)。

如果比赛未审核通过，可以重新作为普通公开赛提交审核。

**筹办和举办** 流程，参考 **洛谷大/小月赛流程** 中的对应部分。

## 参考链接

- [洛谷主题库题目规范](../problem-standard.md)
- [洛谷公开比赛规范及要求](../opencontest-standard.md)
- [洛谷月赛工资发放细则](./payroll.md)
- [传统题数据格式要求](../../../manual/luogu/problem/testcase-format.md)
