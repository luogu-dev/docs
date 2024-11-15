# 自定义计分脚本功能说明

有的时候出了一道题想要自定义比较复杂的计分策略，但是单靠 Subtask 的组合无法满足，这时候可以使用计分脚本。

## 语法

### 基本语句

语句以分号分隔，注意包括 `if` 中的判断条件也需要加分号。

### 变量

计分脚本中可以使用变量，变量名以一个 `@` 开头，除开头的其他字符可以有任何英文、数字和下划线。

赋值使用`=`运算符，如下：

```cpp
@a = 1;
@lin_toto = @a;
```

### 基本运算

和 C 语言中一样，可执行加减乘除和取模五种基本运算，运算符优先级和C语言相同，可使用括号改变优先级。

```cpp
@b = (2 + 3) * @a;
```

### 位运算

可使用 `and`、`or`、`not`、`xor` 四种位运算，优先级和 C 语言相同，可使用括号改变优先级。

```cpp
@c = 2 xor (@a and @b);
```

### 条件语句

条件比较运算符有 `==`、`!=`、`>=`、`>`、`<=`、`<`，并可使用 `and`、`or`、`not` 组合条件，优先级和 C 语言相同，可使用括号改变优先级。

可使用 `if` 语句判断条件，语句结束使用 `fi`。注意条件语句之后必须加。

```cpp
if @a==2 or @b==3; then
    @c = 5;
    @d = 4;
fi
```
可使用`else`语句。

```cpp
if @a==2 or @b==3; then
    @c = 5;
else
    @d = 4;
fi
```

注意如果需要判断多个条件，需要在 `else` 中嵌套 `if`。


```cpp
if @a==2; then
    @c = 5;
else
    if @a==3; then
        @d = 4;
    fi
fi
```

### 常量

计分脚本提供 5 个常量以表示测试点/Subtask/整题的评测状态。

对于测试点：

- `AC` 表示测试点通过。
- `WA` 表示测试点答案不正确。
- `TLE` 表示测试点超时。
- `MLE` 表示测试点超过内存限制。

对于 Subtask/整题：

- `AC` 表示该 Subtask/题通过。
- `UNAC` 表示该 Subtask/题不通过。


## 使用方法

对于每个计分脚本，将会传入若干组如下变量：`@statusX`、`@scoreX`、`@timeX`、`@memoryX`，其中 `X` 对应测试点/Subtask 的 ID。

你的脚本可以任意修改以上的变量（并也会反映到最终的计分结果中）。

同时，你的脚本还应该定义如下四个变量：

- `@total_score` 表示该 Subtask/题目的最终得分。
- `@final_status` 表示该 Subtask/题目的最终状态。
- `@final_time` 表示该 Subtask/题目的用时。
- `@final_memory` 表示该 Subtask/题目的内存用量。

如下脚本定义了一个 Subtask 的计分脚本，其中测试点#3、#4、#5 属于该 Subtask，策略是如#3、#4 或#4、#5 正确则得 30 分，否则不得分，内存、时间按照#4 计算。

```cpp
if (@status4 == AC) and (@status3 == AC or @status5 == AC); then
    @total_score = 30;
    @final_status = AC;
    @final_time = @time4;
    @final_memory = @memory4;
else
    @total_score = 0;
    @final_status = UNAC;
    @final_time = 0;
    @final_memory = 0;
fi
```

请注意 `@statusX` 和`@final_status` 只能设置为如上常量表中对应的内容，如设置为常量表中没有的值会导致 `UKE`。
