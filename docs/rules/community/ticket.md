# 工单反馈规则

为确保工单系统高效、有序运行，帮助用户更好地反馈问题并获得有效处理，特制定本规则。所有提交工单的用户均应遵守本规则。

工单系统仍在开发中。当工单功能增加时，本规则也将更新。

## 基本规范

所有工单的提交与回复，除须遵守本规则外，还应严格遵守以下规定：

- [洛谷讨论区规范](../community/discuss)
- [洛谷社区规则](../community)

1. 工单的提交内容与后续回复均须遵守上述洛谷社区规范。
2. 每个工单仅限反馈**一个**具体问题。若有多个独立问题，请分别创建工单。
3. 工单的标题应能体现工单的主要需求，方便快速识别。

## 工单类别

### 综合问题

该类目**任意用户**均可反馈：

- 一般咨询：咨询洛谷平台功能或者其他相关事宜。在提交此类工单前，请务必确认相关信息并未在 [洛谷帮助中心](https://help.luogu.com.cn/) 中明确说明，或者无法在社区寻求帮助解决。
- 建议或 Bug 反馈：为洛谷提供各项功能上的建议，或者反馈 Bug。对于提供建议，在发布前请再三确认该建议是具有**建设性**以及**可行性**的。请在提交前仔细斟酌，避免提交不切实际或无意义的建议；对于 Bug 反馈，请务必提供清晰的**复现步骤**（如何触发 Bug 的过程），并附上必要的截图或说明，以便管理团队高效定位并解决问题。

此类工单可由任意管理员处理。

### 题目工单

该类目只有**受信任的用户**才可反馈：

- 题目反馈：反馈题目中存在的可能问题。
    - 适用场景：测试点限制与数据冲突、Special Judge 功能存在问题、测试数据过弱使得错误解法通过本题等。
    - 反馈方式：用户应当清晰具体地指出题目存在的问题所在，并提供必要的解释或佐证。信息不足的工单可能会被关闭。

- 题面修缮：反馈试题题面存在的可能问题。
    - 适用场景：题面含有歧义、题面的 LaTeX/Markdown 排版混乱、中英文翻译不匹配等情况。
    - 反馈方式：用户应当明确地在提供的题面范例中修改提交正确的题面或者翻译。若提供翻译，则翻译应当符合 [主题库题目规范-多语言](../academic/problem-standard.md#translate)。未明确指出问题、问题过于细微或者无意义、或者提交的题面不符合要求的工单可能将被关闭。
    - 其他注意事项：目前仅接受中文版本的题面，或者对原有的英语、日语题面的修复，不接受中译英、日译英等版本的题面。

- 改进标签、难度：反馈试题标签、难度存在的可能问题：
    - 适用场景：试题的算法/来源标签存在缺漏错误、试题的难度标定不合理等。原则上，试题的难度标定不接受相邻一个档次的修改。
    - 反馈方式：用户应当清晰具体地指出算法标签、难度标签存在的问题并且给出对应更合适的算法或者难度标签。用户的解释应当是合理的、可令人接受信服的。

此工单可由任意具有【题目管理】权限的管理员以及【题目管理志愿者】处理。

### 比赛工单

该类目只有【具有奖项认证的用户】才可反馈：

- 申请公开赛：申请举办洛谷公开赛或者月赛。申请的比赛应当符合 [公开比赛规范及要求](../academic/opencontest-standard.md)。

此工单可由任意具有【比赛管理】权限的管理员处理。

---

洛谷计划未来增加更多工单分类，以更精确地对接用户需求。新分类上线时，我们将同步更新相关说明。届时，现有分类的适用范围可能会进行调整，敬请用户留意最新规则。

## 工单处理状态分类

### 综合问题、题目工单

- 待处理：该工单正等待管理员进行处理。我们可能会将任务指派给一位管理，但若管理员未进行操作，则依然维持【待处理】状态。
- 已关闭：该工单被关闭，通常是因为工单不成立、重复、无效、不符合规则。不再接受对此工单的进一步处理或回复。
- 已回复/待补充：管理员认为该工单反馈的事项确需处理，但工单创建者未提供足够充足的信息，需要补全信息便于管理员处理。
- 处理中：管理员正在处理该工单反馈的事项，这可能需要一定的时间，请耐心等待。
- 挂起：管理员认为该工单反馈的事项可能需要处理，但由于各种可能的原因无法立刻处理。
- 已完成：该工单已处理完毕。之后如有新的相关问题，请另行创建一个新工单进行反馈。
- 已删除：工单因内容严重违规、滥用或完全无效而被删除。

---

### 比赛工单

- 待处理（责任人为空）：没有审核员看过该场比赛。
- 待处理（责任人为洛谷）：已经有审核员看完了本场比赛，但需要更多审核员看。有较小的可能为没有审核员审核。
- 待处理（责任人存在）：责任人在看该场比赛。
- 已关闭：被打回并且认为没有希望继续进行审核的比赛/月赛。
- 已回复/待补充：出题组已经得到审核员的反馈，需要出题组根据反馈进行修改。
- 处理中：已有审核员接手，审核员已收到申请或者修改，但审核员尚未给出结果。
- 挂起：已经排期的月赛，双方需要共同处理赛前的事项。对于普通公开赛，通常不存在此类状态。
- 已完成：已经举办完毕的比赛。

洛谷管理会尽力处理工单，但不承诺具体的处理时限，请勿催促工单处理。

## 处罚规则

用户在工单反馈中有如下扰乱工单处理秩序的行为，视情节严重性，可处以**警告或禁言**的处罚：

- 反馈咨询显著无意义的工单，例如明确能够在 [洛谷帮助中心](https://help.luogu.com.cn/) 获取信息解决的咨询类工单，或者内容含糊不清、缺乏必要信息的工单。
- 在回复其他用户的工单中使用显著无意义的回复，违反 [洛谷社区规则](index.md) 的；
- 提交或回复包含歧视、人身攻击、恶意嘲讽、不良诱导、敏感或违法违规内容的工单；
- 在工单反馈中使用夺人眼球、哗众取宠、或不知所谓的标题；
- 同一人或同一群体就同一问题在短时间内重复提交多个工单；
- 多次在错误或不相关的类别下提交工单；
- 多次催促管理员处理工单；
- 其他可能扰乱工单处理秩序的情况；

用户有如下扰乱洛谷工单处理秩序的行为，可处以**封禁账户**的处罚：

- 在受到上述规则处罚后，注册多个账户绕过处罚措施，继续扰乱工单处理秩序；
- 其他违反[《洛谷用户协议》](/ula/luogu.md)，严重损害洛谷和其他用户的利益，造成恶劣影响的行为。
