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

## 5. 判断 setTimeout 输出
