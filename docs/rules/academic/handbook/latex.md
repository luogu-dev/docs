# LaTeX 格式手册

:::tip

$\LaTeX$ 是一种基于 $\TeX$ 的排版系统，能够很方便的生成数学公式。

洛谷的大多数地方使用 $\KaTeX$ 进行渲染，可以参照文档：  
<https://katex.org/docs/supported.html>。

:::

## 基础知识

### 行内公式与行间公式 {#math}

行内公式（**Inline Math**，即穿插在文本中的公式）两侧分别使用一个美元 `$ $` 符号定界。  

例如：

 ```md
 文本文本$x \cdot \sin(y)$文本文本
 ```

显示为：  

文本文本$x \cdot \sin(y)$文本文本

行间公式（**Math Blocks**，独立成行居中的公式） 前后两行分别使用 `$$ $$`（每行两个美元符号）定界，Markdown 代码可以跨行写，例如：

```latex
$$
H_n = \sum_{i = 1}^{n} \frac{1}{i}
$$
```

显示为

$$
H_n = \sum_{i = 1}^{n} \frac{1}{i}
$$

再例如：

```latex
$$
\begin{pmatrix}
  1 & 8 & 4 \\
  7 & 9 & 2 \\
\end{pmatrix}
$$
```

显示为

$$
\begin{pmatrix}
  1 & 8 & 4 \\
  7 & 9 & 2 \\
\end{pmatrix}
$$

行内公式的 “大小”（例如分数的大小、巨运算符上下标的位置）会比行间公式小，可以通过 `\displaystyle` 和 `\textstyle` 来切换两类模式：

对于行内公式，使用 `\displaystyle` 的效果：

|                      LaTeX 代码                       |                       显示效果                        |
| :---------------------------------------------------: | :---------------------------------------------------: |
|                     `\frac{1}{x}`                     |                     $\frac{1}{x}$                     |
|              `\displaystyle \frac{1}{x}`              |              $\displaystyle \frac{1}{x}$              |
|        `\int_0^x f(t) \mathop{}\!\mathrm{d} t`        |        $\int_0^x f(t) \mathop{}\!\mathrm{d} t$        |
| `\displaystyle \int_0^x f(t) \mathop{}\!\mathrm{d} t` | $\displaystyle \int_0^x f(t) \mathop{}\!\mathrm{d} t$ |

对于行间公式，使用 `\textstyle` 的效果：

```latex
$$
 \textstyle \int \frac{\mathop{}\!\mathrm{d} x}{x} = \ln(x) + C 
 $$
```

显示为

$$
 \textstyle \int \frac{\mathop{}\!\mathrm{d} x}{x} = \ln(x) + C
$$

### LaTeX 控制序列的概念（类似于函数）

控制序列可以视作为命令：以 `\` 开头，参数：必需参数 `{}` 和可选参数 `[]`。

控制序列可以实现特定功能，例如 `\sin x` 显示为 $\sin x$、`\Omega \omega` 显示为 $\Omega \omega$、`\color{red} x` 显示为 $\color{red} x$、`\mathbb{Q}` 显示为 $\mathbb{Q}$、`\sqrt[5]{x}` 显示为 $\sqrt[5]{x}$。

### LaTeX 环境的概念

环境的格式为 `\begin{环境名} 环境内部 \end{环境名}`，即 `\begin` 和 `\end` 以及它们中间的部分。

环境有比控制序列更加灵活的用法，例如：

```latex
\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}
```

显示为

$$
\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}
$$

而

```latex
f(x) = \begin{cases}
  2 & x \in \mathbb Q \\
  1 & x \notin \mathbb Q \land x \in \mathbb A \\
  0 & x \notin \mathbb A
\end{cases}
```

显示为

$$
f(x) = \begin{cases}
  2 & x \in \mathbb Q \\
  1 & x \notin \mathbb Q \land x \in \mathbb A \\
  0 & x \notin \mathbb A
\end{cases}
$$

## 基本语法

### 二元关系 / 运算符

二元关系符：

| LaTeX 代码： |    `x = y`    |     `x > y`     |  `x < y`   |    `x \ge y`     |  `x \le y`  |
| -----------: | :-----------: | :-------------: | :--------: | :--------------: | :---------: |
|   显示效果： |    $x = y$    |     $x > y$     |  $x < y$   |    $x \ge y$     |  $x \le y$  |
| LaTeX 代码： |  `x \perp y`  | `x \parallel y` | `x \mid y` | `x \nparallel y` | `x \nmid y` |
|   显示效果： |  $x \perp y$  | $x \parallel y$ | $x \mid y$ | $x \nparallel y$ | $x \nmid y$ |
| LaTeX 代码： | `x \approx y` |    `x \in y`    | `x \ni y`  |    `x \ne y`     | `x \sim y`  |
|   显示效果： | $x \approx y$ |    $x \in y$    | $x \ni y$  |    $x \ne y$     | $x \sim y$  |

二元运算符：

| LaTeX 代码： |   `x + y`   |  `x - y`   | `x \times y` | `x \div y` | `x \cdot y`  |  `x \bmod y`  |
| -----------: | :---------: | :--------: | :----------: | :--------: | :----------: | :-----------: |
|   显示效果： |   $x + y$   |  $x - y$   | $x \times y$ | $x \div y$ | $x \cdot y$  |  $x \bmod y$  |
| LaTeX 代码： | `x \circ y` |  `x * y`   |  `x \ast y`  |  `x / y`   | `x \oplus y` | `x \otimes y` |
|   显示效果： | $x \circ y$ |  $x * y$   |  $x \ast y$  |  $x / y$   | $x \oplus y$ | $x \otimes y$ |
| LaTeX 代码： | `x \cup y`  | `x \cap y` | `x \land y`  | `x \lor y` |  `x \pm y`   |  `x \mp  y`   |
|   显示效果： | $x \cup y$  | $x \cap y$ | $x \land y$  | $x \lor y$ |  $x \pm  y$  |   $x \mp y$   |

### 上标与下标

上标命令是 `^{角标}`，下标命令是 `_{角标}`。当角标是单个字符时可以不用花括号（在 LaTeX 中，花括号是用于分组，即花括号内部文本为一组）。

例：`x_1`、`x^2`、`x_1^2`、`x^2_1`、`x_{22}^{(n)}`、`{}^*\!x^*` 的显示效果分别为：

| LaTeX 代码： | `x_1` | `x^2` | `x_1^2` | `x^2_1` | `x_{22}^{(n)}` | `{}^*\!x^*` |
| -----------: | :---: | :---: | :-----: | :-----: | :------------: | :---------: |
|   显示效果： | $x_1$ | $x^2$ | $x_1^2$ | $x^2_1$ | $x_{22}^{(n)}$ | ${}^*\!x^*$ |

### 分式

输入较短的分式时，最简单的方法是使用斜线，譬如输入 `$(x + y) / 2$`，可得到 $(x + y) / 2$。

要输入带有水平分数线的公式，可用命令：`\frac{分子}{分母}`。

|         LaTeX 代码          |          显示效果           |
| :-------------------------: | :-------------------------: |
|      `\frac{x + y}{2}`      |      $\frac{x + y}{2}$      |
| `\frac{1}{1 + \frac{1}{2}}` | $\frac{1}{1 + \frac{1}{2}}$ |

### 根式

排版根式的命令是：开平方：`\sqrt{表达式}`；开 $n$ 次方：`\sqrt[n]{表达式}`。

|           LaTeX 代码           |            显示效果            |
| :----------------------------: | :----------------------------: |
|    `\sqrt{2} < \sqrt[3]{3}`    |    $\sqrt{2} < \sqrt[3]{3}$    |
| `\sqrt{1 + \sqrt[p]{1 + a^2}}` | $\sqrt{1 + \sqrt[p]{1 + a^2}}$ |

### 求和与积分

排版求和符号与积分符号的命令分别为 `\sum` 和 `\int`，它们通常都有上下限，在排版上就是上标和下标。

|                LaTeX 代码                 |                 显示效果                  |
| :---------------------------------------: | :---------------------------------------: |
|      `\sum_{k = 1}^{n} \frac{1}{k}`       |      $\sum_{k = 1}^{n} \frac{1}{k}$       |
|       `\sum_{k = 1}^n \frac{1}{k}`        |       $\sum_{k = 1}^n \frac{1}{k}$        |
|            `\int_a^b f(x) d x`            |            $\int_a^b f(x) d x$            |
| `\int_a^b f(x) \mathop{} \! \mathrm{d} x` | $\int_a^b f(x) \mathop{} \! \mathrm{d} x$ |

### 公式中的空格

LaTeX 能够自动处理公式中的大多数字符之间的空格，但是有时候需要自己手动进行控制。除了常见的几个空格命令外，可以通过 `\hspace{长度}` 自定义空格长度。

|         LaTeX 代码         | 显示效果                    |
| :------------------------: | :-------------------------- |
|       `\Box \! \Box`       | $\Box \! \Box$              |
|        `\Box \Box`         | $\Box \Box$                 |
|       `\Box \, \Box`       | $\Box \, \Box$              |
|       `\Box \: \Box`       | $\Box \: \Box$              |
|       `\Box \; \Box`       | $\Box \; \Box$              |
|       `\Box \  \Box`       | $\Box \  \Box$              |
|     `\Box \quad \Box`      | $\Box \quad \Box$           |
|     `\Box \qquad \Box`     | $\Box \qquad \Box$          |
|  `\Box \hspace{1cm} \Box`  | $\Box \hspace{1cm} \Box$    |
| `\Box \hspace{1.5cm} \Box` | $\Box \hspace{1.5cm} \Box$  |
|  `\Box \hspace{2cm} \Box`  | $\Box \hspace{2cm} \Box$    |
|        `\Box \Box`         | $\Box \Box$                 |
| `\Box \hspace{-.1cm} \Box` | $\Box \hspace{-0.1cm} \Box$ |
| `\Box \hspace{-.2cm} \Box` | $\Box \hspace{-0.2cm} \Box$ |
| `\Box \hspace{-.3cm} \Box` | $\Box \hspace{-0.3cm} \Box$ |
| `\Box \hspace{-.4cm} \Box` | $\Box \hspace{-0.4cm} \Box$ |

### 插入文本

在公式中插入文本可以通过 `\text{文字}` 在公式中添加文字，比如：

```latex
\text{对任意的 } x > 0 \text{，有 } f(x) > 0 \text{。}
```

显示为

$$
\text{对任意的 } x > 0 \text{，有 } f(x) > 0 \text{。}
$$

### 多行的数学公式

使用 `aligned` 环境对齐多行公式。

```latex
\begin{aligned}
  \cos(2 \theta) &= \cos^2(\theta) - \sin^2(\theta) \\
                 &= 2 \cos^2(\theta) - 1
\end{aligned}
```

显示为

$$
\begin{aligned}
  \cos(2 \theta) &= \cos^2(\theta) - \sin^2(\theta) \\
                         &= 2 \cos^2(\theta) - 1
\end{aligned}
$$

## 字体、字号与颜色

### 字体

对于英文的字体，LaTeX 给出了三个层级，其中 KaTeX 支持的有：

1. 族（family）：有罗马（roman）、无衬线（sans-serif）、打字机（teletype）三族，改变字体的基本外观。
2. 形状（shape）：有直立（upright）、意大利（italic）两种形状。
3. 重量（weight）：有中等（medium）、粗体（boldface）两种重量。

在某些时候，KaTeX 允许这些层级叠加使用：

|        |           |                 直立中等                 |                意大利中等                |                 直立粗体                 |                意大利粗体                |
| :----: | :-------: | :--------------------------------------: | :--------------------------------------: | :--------------------------------------: | :--------------------------------------: |
|        |           |            `\textup{\textmd`             |            `\textit{\textmd`             |            `\textup{\textbf`             |            `\textit{\textbf`             |
|  罗马  | `\textrm` | $\textup{\textmd{\textrm{Butterfly96}}}$ | $\textit{\textmd{\textrm{Butterfly96}}}$ | $\textup{\textbf{\textrm{Butterfly96}}}$ | $\textit{\textbf{\textrm{Butterfly96}}}$ |
| 无衬线 | `\textsf` | $\textup{\textmd{\textsf{Butterfly96}}}$ | $\textit{\textmd{\textsf{Butterfly96}}}$ | $\textup{\textbf{\textsf{Butterfly96}}}$ |                  不可用                  |
| 打字机 | `\texttt` | $\textup{\textmd{\texttt{Butterfly96}}}$ | $\textit{\textmd{\texttt{Butterfly96}}}$ |                  不可用                  |                  不可用                  |

在文本模式下（即 `\text` 内部），默认情况下，族使用罗马、形状使用直立、重量使用中等。

在数学模式下（即 KaTeX 的默认），默认情况下，族使用罗马、形状使用意大利、重量使用中等。

特别地，在数学模式下，提供了 `\mathbb`、`\mathcal`、`\mathscr` 和 `\mathfrak` 以供特殊数学字体使用：

`\mathbb`：$\mathbb{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$ 和 $\mathbb{k}$。  
`\mathcal`：$\mathcal{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$ 和 $\mathcal{0123456789}$。  
`\mathscr`：$\mathscr{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$。  
`\mathfrak`：$\begin{aligned} & \mathfrak{ABCDEFGHIJKLMNOPQRSTUVWXYZ} \\ & \mathfrak{abcdefghijklmnopqrstuvwxyz \ 0123456789} \end{aligned}$。

前文的改变字体的命令对这些特殊字体无效。

对于中文，我们有：

|       |           |                 直立中等                  |                意大利中等                 |                 直立粗体                  |                意大利粗体                 |
| :---: | :-------: | :---------------------------------------: | :---------------------------------------: | :---------------------------------------: | :---------------------------------------: |
|       |           |             `\textup{\textmd`             |             `\textit{\textmd`             |             `\textup{\textbf`             |             `\textit{\textbf`             |
| 默认  |    无     |     $\textup{\textmd{你好，世界！}}$      |     $\textit{\textmd{你好，世界！}}$      |     $\textup{\textbf{你好，世界！}}$      |     $\textit{\textbf{你好，世界！}}$      |
| 罗马  | `\textrm` | $\textup{\textmd{\textrm{你好，世界！}}}$ | $\textit{\textmd{\textrm{你好，世界！}}}$ | $\textup{\textbf{\textrm{你好，世界！}}}$ | $\textit{\textbf{\textrm{你好，世界！}}}$ |

对于中文，族设置为无衬线或打字机时，要么不可用，要么与设置为罗马时无区别。  
可以看出，族默认时是宋体，族为罗马时是黑体。

### 字号

LaTeX 内置了从大到小的下列字号：

|  `\Huge` | $\Huge \sum_{i = 1}^{n} \frac{1}{i}$  |   `\normalsize` | $\normalsize \sum_{i = 1}^{n} \frac{1}{i}$   |
| -------: | :------------------------------------ | --------------: | :------------------------------------------- |
|  `\huge` | $\huge \sum_{i = 1}^{n} \frac{1}{i}$  |        `\small` | $\small \sum_{i = 1}^{n} \frac{1}{i}$        |
| `\LARGE` | $\LARGE \sum_{i = 1}^{n} \frac{1}{i}$ | `\footnotesize` | $\footnotesize \sum_{i = 1}^{n} \frac{1}{i}$ |
| `\Large` | $\Large \sum_{i = 1}^{n} \frac{1}{i}$ |   `\scriptsize` | $\scriptsize \sum_{i = 1}^{n} \frac{1}{i}$   |
| `\large` | $\large \sum_{i = 1}^{n} \frac{1}{i}$ |         `\tiny` | $\tiny \sum_{i = 1}^{n} \frac{1}{i}$         |

### 颜色

可以通过 `{\color{颜色} 文字或公式}` 或 `\textcolor{颜色}{文字或公式}` 改变字体颜色。例如：

`a + {\color{red} a + {}} a` 显示为 $a + {\color{red} a + {}} a$。  
`a + \textcolor{red}{a + {}} a` 显示为 $a + \textcolor{red}{a + {}} a$。  
`a + {\color{#22AB22} a + {}} a` 显示为 $a + {\color{#22AB22} a + {}} a$。  
`a + \textcolor{#22AB22}{a + {}} a` 显示为 $a + \textcolor{#22AB22}{a + {}} a$。
