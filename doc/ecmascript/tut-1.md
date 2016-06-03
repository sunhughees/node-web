总结一下Ecmascript和javascript不一样的地方(1)

>ES6的语法有很多和过去Javascript不一样的地方，记录一下方便注意。

#1.let和const命令

##let命令

声明变量，只在let所在的代码块内有效，并且不许重复声明。

**注意和var的区别：**

var在全局内有效，会发生“变量提升”。

ES6规定，如果区块存在let和const命令，则该区块形成封闭作用域（称为“暂时性死区”，temporal dead zone，TDZ），在声明之前使用变量，会报错。

**块级作用域**

##const命令

声明常量，一旦声明，其值就不能改变。

跨模块常量

```
//constants.js
export const A = 1;
export const B = 2;
export const C = 3;

//test1.js
import * as constants from './constants';
console.log(constants.A); // 1
console.log(constants.B); // 2
console.log(constants.C); // 3

//test2.js
import {A, B, C} from './constants';
console.log(A); // 1
console.log(B); // 2
console.log(C); // 3
```

##全局对象

全局对象是最顶层的对象，在浏览器环境中指的是`window`对象，在Node.js中指的是`global`对象。

在Node.js中全局对象必须显示声明成global对象的属性。

#2.变量的解构赋值

##数组

解构赋值相当于模式匹配（可参考Erlang）；
解构赋值允许指定默认值；

##对象

```
let {foo, bar} = {foo:"aaa", bar:"bbb"};
console.log(foo); // "aaa"
console.log(bar); // "bbb"
```

**注意和数组的区别：**

对象没有次序，按照同名对应

##字符串、数值和布尔值

##函数

##解构赋值的用途

* 变换变量的值；
```
[x, y] = [y, x];
```

* 从函数返回多个值；
函数只能返回一个值，但放在数组或对象中可以实现返回多个值

* 函数参数的定义；

* 提取JSON数据
解构赋值对提取JSON对象中的数据尤其有用

* 指定函数参数的默认值

* 遍历Map结构
```
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + "is" + value);
}
```
只想获得键名`let [key] of map`
只想获得键值`let [,value] of map`

* 引入模块的指定方法
加载模块时，往往需要指定引入具体方法
```
const { SourceMapConsumer, SourceNode} = require("source-map");
```
