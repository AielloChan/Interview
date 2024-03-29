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

## 22. 给数组加上一个 reduceMap 的方法，该方法和 map 一样的效果，但是是用 reduce 实现的

代码实现

https://codepen.io/AielloChan/pen/zYvBeXo?editors=0011

## 23. 二叉树的后序遍历

```
     1
   /   \
  2     3
 / \     \
4   5     6
   / \
  7   8
```

使用递归就行了

https://codepen.io/AielloChan/pen/ExVyMyX?editors=0011

## 24. 二叉树的先序遍历

使用上面的那个二叉树

同样递归，只需修改一点点

https://codepen.io/AielloChan/pen/zYvBbNz?editors=0011

## 25. 二叉树的层次遍历

使用上面的那个二叉树

这次需要用到队列了

https://codepen.io/AielloChan/pen/NWGrJwq?editors=0011

## 26. 线程、进程、空间分配、资源分配

这个是操作系统最基本的知识点之一了。

进程级别比线程大，一个进程里面可以有很多线程。

故事是简单讲这样的：最最开始的电脑由于是目标性极强的，基本一台电脑一个时间段中只能运行一个程序，那时候不存在资源调度分配的问题，
可以理解为一个时间段就只有一个进程**存在**。后来电脑更强了，但处理任务还是比较少（个位数），所以每个程序可以交替着运行，
这时候虽然单一时间段还是只有一个进程在运行，但是是有多个进程**同时存在**的。后来，计算机更强了，人们需要单一时间段内，
每个程序能更快地交替运行，这样以人的感知能力就会觉得，这些程序都是同时在运行的。由于切换进程所涉及到的内存、资源等切换比较多，
快速切换进程的话，反而让电脑极速变慢，代价太大了，所以就创造了**线程**这种东西，它只负责调度 CPU 资源，所以就会非常显著地提升切换效率，
然后，就这样。

## 27. 三次握手、四次挥手、标志位、time-wait

三次握手的分别是

- 客户端请求链接，发送 SYN=1 并附带一个基于当前滑动窗口的随机数 Seq=x
- 服务端接收到请求后，发出 SYN=1 ACK=1 ACKNumber=x+1 并且带上自己的 Seq=y
- 客户端收到后，校验 ACKNumber，正确即再发出 ACK=1 ACKNumber=y+1

这样三次握手就完成了，链接建立成功。

至于为什么会有带随机数，而且还要返回随机数+1，是因为为了防止**TCP序列预测攻击**。

四次挥手

- 客户端（也可以是服务端，下面依次替换即可）发出 FIN=1 Seq=x 请求断开连接
- 服务端收到后返回 ACK=1 ACKNumber=x+1，以确认收到了客户端的请求，但由于 TCP 是全双工的，是这时候只是代表，客户端没有数据要发送了，但有可能服务端还会传输数据，所以双方等待
- 服务端准备好后，发送给客户端 FIN=1 Seq=y 表示服务端也发送完成，可以关闭连接了
- 客户端收到后，返回 ACK=1 ACKNumber=y+1 表示收到了，然后双方关闭连接

time-wait 则是因为，虽然客户端表示不发送数据了，但不代表服务端就发送完了，所以客户端需要等待一定时间接受报文

## 28. H5 的新特性

增加了很多的新标签，如 canvas、sidebar、section 等等，更多的是表示语义话，比如 header 中的，就应该是表示这是标题头，便于浏览器进行更好的处理，比如为不方便的人群做优化。

增加了不少新的特性，如 preload、async、defer 等，都是为了让开发者能够更简单地控制资源

## 29. 正则实现 trim

https://codepen.io/AielloChan/pen/zYvNPGY?editors=0011

## 29. 设计模式

参阅《JavaScript 设计模式与开发实践》

一共有这么些设计模式：

- 单例模式：适用于运行时中只存在一个实例的情形
- 策略模式：适用于同一场景有不同“策略”或者说“算法”的情况，能够无缝切换不同的“策略”
- 代理模式：其实可以理解为中间层，将目标操作进行代理，从而实现功能的解偶
- 迭代器模式：其实很类似于策略模式，不过策略模式通常一次只会使用某一个策略，而迭代器模式则是通过构建一个通用迭代器来同时使用\筛选不同的策略以及其结果
- 订阅模式：“观察者模式”。这个在 Web JS 的世界中用得非常多了，主要是实现一个事件订阅器，见上方第 13 题
- 命令模式：该模式比较适合用于有一些命令的情况下，可以堆叠命令的执行，来实现一些命令的排队和重做
- 组合模式：通过将一系列的“模块”，通过类似树状的组合，来实现一些叠加效果，这都得益于通用的接口，适用于类似中间件以及路由等场景。要求“组”和“叶节点”操作要有一致性。
- 模版模式：其实就是基于面向对象中的继承，引入 Hook 钩子方法，可以实现一些介于状态之间的操作或者默认项的自定义
- 共享模式：其实有点类似于继承，这个在面向对象的语言中还是比较常见的操作。主要还是用于解决面向对象模式下，实例化过多对象导致的性能问题。
- 职责链模式：其实于个人来讲，这点有点像组合模式，但组合模式是树，责任链模式是链
- 中介者模式：其实就是在一定的情境下，将复杂的网状拓扑转化为星型拓扑，使得每个节点的职责更加内聚，减少强耦合
- 装饰器模式：主要是为了不改变原有函数或对象，在其外部包裹一层实现。和之前的代理模式很像，区别是：代理模式一般是在幕后做一些事情，并不改变对象对外的功能接口，但装饰器模式则是为对象增加新的功能接口
- 状态模式：其实就类似于实现一个状态机，与策略模式的相同点是都封装了一系列的算法、策略，不同是，策略模式的算法是互相独立几乎没关联的，状态模式的算法是有相关性的，甚至是定义好了切换顺序。
- 适配器模式：通常是用于连接两个已经定义好的对象方法
- 外观模式：通常是将封装后的子系统提供出统一的接口

## 30. JavaScript 面向对象

### 封装

封装则是将一些功能集合以及相关数据作为一个整体，对外选择性暴露部分功能，这样能将软件的复杂性内聚，其实也是模块化的思想。

在 js 中，封装则是通过类或者类相关的操作实现，如函数封装、对象封装、类封装。

### 继承

js 中继承也有多种方式，最原始的是拷贝继承、原型链继承、基于 ES6 的类继承

### 多态

多态通俗点就是对继承来的方法进行重写，各自实现各自的方法。

## 31. JavaScript 双向绑定

主要的双向绑定分为手动设定绑定、脏检查和get set属性。目标主要是越来越高性能和直觉化

- 手动绑定是每次数据改变了，就直接去重新设置 DOM 的数据，是全量的
- 脏检查则是做了相关优化，检查对比之前的数据和现在的数据，出现不同才改变页面，这就只是局部修改，优化了性能
- get set 则是通过 js 的新特性，能够以 Object.defineProperty 的方式定义数据，所以能够实现直接赋值等直觉化的操作

