# 今年的初面（三个多月没碰过任何开发相关的东西

## 1. 大数相加

```
实现 sum(a:string, b:string): string，计算两个大数字的和
```

### 思路

用小学时学过的方法进行从又到左，按位相加。注意每次的`进位`与`最后的进位`

### 实现

https://codepen.io/AielloChan/pen/LYpNeRY?editors=0011

## 2. 实现 sum 函数可多参数、可重复调用、可直接输出

```
实现函数 sum(1,2)(3,4) 并能输出 console.log(sum(1,2))
```

考察柯里化和原型方法知识点，通过递归懒计算可达到

https://codepen.io/AielloChan/pen/jObqdVo?editors=1111

## 3. 实现一个类，支持连续调用

```
const pet = new Pet()
pet.eat().sleep(5).play().sleep(5).work()
sleep 函数需要是异步调用
```

考察队列以及 promise 的使用

### 思路一

用队列实现，这样能很好的区分同步异步函数，缺点是会比较复杂

https://codepen.io/AielloChan/pen/abvZvXR?editors=0011

### 思路二

用 Promise 实现，这样好处是不用去维护复杂的队列了，简洁直观。缺点是，所有的函数都会变为异步的

https://codepen.io/AielloChan/pen/zYvBrRQ?editors=0011

## 4. 判断 this

```
// 判断输出并解释 this 指向
window.name = "ByteDance";
function A() {
  this.name = 123;
}
A.prototype.getA = function () {
  console.log(this);
  return this.name + 1;
};
let a = new A();
let funcA = a.getA;
funcA();
a.getA();
```

这个其实是非常简单的 this 指向问题（我太想结束面试了，题都没看完就说不会做。。。），function 函数中的 this 指向，是在执行的时候才确定的，和箭头函数不同（箭头函数是在申明的时候就确定的）

所以，funcA 在执行的时候，其处于全局上下文中，所以 this 指向的是 window；a.getA 函数在执行的时候，其上下文是实例 a，所以其 this 指向则是 a

## 5. 判断 setTimeout 输出

```
for(var i=0; i< 6; i++){
  setTimeout(()=>{
    console.log(i)
  }, 1000)
}
```

这个其实非常简单了，因为 setTimeout 是会将回调函数直接放到执行队列末尾，所以所有的 setTimeout 都是要等到 for 循环执行完后才会开始执行，同时，因为他们都几乎是在同一时间被加入到执行队列中的，所以，他们会直接连续输出文字，而不是间隔一秒。最后因为 var 会存在变量提升，所以所有的 setTimeout 都公用的一个 i 变量，最终输出的也都是 6 了（如果把 var 换成 let 就会依次输出 0 到 5）

*面试官惊了，上面这题都不会回答，那给我出了一个最简单的。我回答的是 “每隔一秒输出 0！！！”*
