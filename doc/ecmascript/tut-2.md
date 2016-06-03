总结一下Ecmascript和javascript不一样的地方(1)

>ES6的语法有很多和过去Javascript不一样的地方，记录一下方便注意。

#字符串

##模板字符串

模板字符串可提供简单的字符串插值功能，模板字符串不会自动转义特殊字符。

* 模板字符串用反引号（\`）来标识;
* 模板中嵌入变量（任意Js表达式），用`${}`来标识；
* 多行字符串会保留空格和缩进；
* 可以在字符串模板加入标签函数；


例子：实现SaferHTML安全过滤

```
function SaferHTML(templateData) {
    var s = templateData[0];
    for (var i=1; i<arguments.length; i++) {
        var arg = String(arguments[i]);

        s += arg.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");

        s += templateData[i];
    }
    return s;
}

var message = SaferHTML `<p>${bonk.sender} has sent you a bonk.</p>`;

```

模板字符串不支持循环和条件语句，不能替代 Mustache 和 Nunjucks 这类模板引擎，但可以编写一个标签函数来实现这类功能。

标签模板允许库设计者创建强大的领域特定语言。这些语言可能看上去并不像 JS，但他们可以无缝嵌入到 JS 中，并且可以与语言的其余部分进行交互。
