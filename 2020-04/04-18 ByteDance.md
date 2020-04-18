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
