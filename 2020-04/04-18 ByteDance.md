# 自刷 ByteDance 的题

## 1. 扑克牌问题

```
我手中有一堆扑克牌， 但是观众不知道它的顺序。

1、第一步， 我从牌顶拿出一张牌， 放到桌子上。

2、第二步， 我从牌顶再拿一张牌， 放在手上牌的底部。

3、第三步， 重复第一步、第二步的操作， 直到我手中所有的牌都放到了桌子上。

最后， 观众可以看到桌子上牌的顺序是：(牌底部）1,2,3,4,5,6,7,8,9,10,11,12,13(牌顶部）

请问， 我刚开始拿在手里的牌的顺序是什么？
```

这个题记得在 leetcode 见过。牌数量不会太多，所以选用递归来解题。反向执行即可

https://codepen.io/AielloChan/pen/qBONZgP?editors=0011

## 2. 复杂度考察

```
一段字符串"www.bytedance.com"反转成"com.bytedance.www" (要求时间复杂度O(n)，空间复杂度O(n)）
```

做了两个版本，一个是反转成 "com.bytedance.www" 的

https://codepen.io/AielloChan/pen/JjYKKoM?editors=0011

一个是反转成 "moc.ecnadetyb.www" 的（完全反转）

https://codepen.io/AielloChan/pen/RwWRRwq?editors=0011

时间复杂度和空间复杂度保留最高次幂并去除系数，都是 O(n)

## 3. 输入一个区间 [l,r]，请问里面有没有能组成三角形三边的三个数

组成三角形的条件是，三边长度都要大于0，且任意两边和大于第三边。由于是区间，所以要求至少有三个正数即可。

https://codepen.io/AielloChan/pen/pojbbNE?editors=0011

## 4. 字符串解密问题，一个单词奇数位抽出来做前半部分，偶数位倒序后做后半部分，拼接起来，形成一个串，你要解密出原来的字符串。加密过程 "Welcome" -> "Wloe" + "mce" -> "Wloemce"，你要做解密算法。

没啥说的，折半分别操作即可

https://codepen.io/AielloChan/pen/xxwOOvm?editors=0011

## 5. repeat方法
```
使用JS实现一个repeat方法，
function repeat (func, times, wait) { /* your code */ }
const repeatFunc = repeat(alert, 4, 3000), 调用这个 repeatedFunc(“hellworld”)，会alert 4次 helloworld, 每次间隔3秒
```
感觉主要是考察一个柯里化和参数的使用

https://codepen.io/AielloChan/pen/VwvjKKY?editors=0011

## 6. 随手来个冒泡排序

基本

https://codepen.io/AielloChan/pen/eYpzdRQ?editors=0011

## 7. 顺便来个快速排序

基本

https://codepen.io/AielloChan/pen/OJyXROm?editors=0011

## 8. 堆排序也一起吧

https://codepen.io/AielloChan/pen/MWaebdy?editors=0011

## 9. 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

使用递归方法来出答案

https://codepen.io/AielloChan/pen/BaozpBe?editors=0011

## 10. 来个有 UI 的：实现函数 function time(hour, min) 能够画出一个时钟

这个也很简单

CSS 版本

https://codepen.io/AielloChan/pen/XWmKpbR

Canvas 版本

https://codepen.io/AielloChan/pen/MWaeJEm?editors=0010

Svg 版本随意

## 11. 随手实现一个柯里函数

https://codepen.io/AielloChan/pen/zYvBLmW?editors=0011

## 12. 一个阻塞情况

```
setTimeout(() => console.log("hello world"))
while (true) {}
```

~~因为浏览器有循环优化，所以上面的 hello world 会成功输出~~
其实浏览器没有优化，while 死循环阻塞了主线程，导致 js 无法继续事件循环，所以所有的操作都会卡住

## 13. 写一个 EventEmitter 类

https://codepen.io/AielloChan/pen/jObrvEw?editors=0011

## 14. 判断 bind 后 apply 会不会改变 this （自出题）

```
this.name = "foo";
function greet() {
  console.log(this.name);
}

const bindedFunc = greet.bind({
  name: "bar",
});

greet();
bindedFunc();
bindedFunc.apply({ name: "foobar" });
```

判断输出

**bind 优先级大于 call 和 apply 对于 this 的绑定**

那这个呢

```
this.name = "foo";
const greet = () => {
  console.log(this.name);
};

const bindedFunc = greet.bind({
  name: "bar",
});

greet();
bindedFunc();
bindedFunc.apply({ name: "foobar" });
bindedFunc.call({ name: "foobar" });
```

**箭头函数的 this 绑定大于 bind、apply、call**

```
// ES6
const say = () => {
  console.log(this.name)
}

// ES5
var that = this
var say = function(){
  console.log(that.name)
}
```

因为在 ES5 的实现中，内部 `this` 已被替换，所以实际上该函数的 `this` 是被成功替换了的，只是箭头函数中的 `this` 已经不是原来的 `this` 了

## 15. 原型链

```
function a() {
    this.b = 3
}
a.prototype.b = 7;
var t = new a();
var b = 2;
a();
console.log(t.b);
console.log(b);
```

其实这个返回的结果很有趣，在浏览器和 nodejs REPL 中输出是一样的 `3, 3`，但是在 `node file.js` 输出不太一样 `3, 2`，由于 VM 的关系，想了解更多可以看这个文章 [Node.js 启动方式：一道关于全局变量的题目引发的思考](https://cnodejs.org/topic/565715c7b1e04fda51bcdf53)

## 16. 用 css 实现一个模态窗口，要从窗口下面向上弹的动画

animation 版本

https://codepen.io/AielloChan/pen/YzyWdrX?editors=0100

transition 版本

https://codepen.io/AielloChan/pen/gOaMZdm?editors=0010

## 17. XSS 和 CSRF 分别是什么，如何防御

CSRF 比较简单，全称 **跨站请求伪造**，记住请求伪造就行了，就是通过一些方式诱导用户发送本不愿意发送的请求。具体就是利用了 cookie、session 等认证来悄悄发送请求。可以通过使用 token、验证请求的 referer 头来验证请求。

XSS 则是 **跨站脚本** 攻击，原理是网站中出现了不应该出现的代码，比如用户发的帖子里面有未经过滤的代码，另一个用户访问了这个帖子，代码则执行了，造成了损失。解决方法一般比较简单，对用户输入进行过滤，对服务器返回的数据进行过滤。

## 18. Web 网络安全

**永远不要相信用户的输入**，对用户的输入必须检查、转译等，防止造成数据库注入、XSS 等攻击。
使用 HTTPS，防止中间人攻击。
重要请求，需要在 HTTPS 的基础上自己建立加密策略，防止抓包
为每个重要请求创建唯一识别码，防止请求重放
防止 DDos，这个就直接用云服务提供的相关防御即可。比如客户端识别、验证码、HTTP源统计、URI监测等，主要原理还是通过目标识别，将恶意源加入黑名单。

## 19. 节流函数

来复习一下，节流函数（throttle）顾名思义就是防止流量过大，也就是在一定时间只允许一定的流量，所以就是要达到指定的时间内，最多只能成功调用一次目标函数的效果。

来，码起来

https://codepen.io/AielloChan/pen/Vwvjgpb?editors=0011

## 20. 防抖函数 debounce

继续复习，记住防抖就是延迟执行，多用于搜索框，要等待用户停止输入指定时间后，再开始发出请求。

https://codepen.io/AielloChan/pen/YzyWBar?editors=0011

## 21. 一个关于 arguments 归属的问题（自出题）

```
function greet() {
  return () => {
    const args = Array.from(arguments);
    console.log(this);
    console.log(args);
  };
}

const bindedGreet = greet.bind({
  foo: "bar",
});
const fn = bindedGreet("hello");
const bindedFn = fn.bind({
  bar: "foo",
});
bindedFn("world");
```

主要是想考察 `this` 和 `arguments` 这两个变量的取值。

我的答案：
```
{
  foo: "bar",
}
["world"]
```

正确答案：
```
{
  foo: "bar",
}
["hello"]
```

实验说明，箭头函数中的 arguments 还是用的父级函数的。

其实可以再进一步，**多重箭头函数中，arguments 和 this 都是用的从内向外第一个非箭头函数的值**。
