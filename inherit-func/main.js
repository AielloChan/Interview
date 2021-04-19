function Foo() { }
function Bar() { }

// 手动实现的 instanceof
function _instanceof(left, right) {
    // 构造函数原型
    const prototype = right.prototype
    // 实列对象属性，指向其构造函数原型
    left = left.__proto__
    // 查实原型链
    while (true) {
        // 如果为null，说明原型链已经查找到最顶层了，真接返回false
        if (left === null) {
            return false
        }
        // 查找到原型
        if (prototype === left) {
            return true
        }
        // 继续向上查找
        left = left.__proto__
    }
}

Object.defineProperty(Foo, Symbol.hasInstance, {
    value(t) {
        return _instanceof(typeof t === "function" ? t.prototype : t, this)
    }
})
Bar.prototype = Object.create(Foo.prototype)

const b = new Bar()
const c = {}

console.log(b instanceof Foo); // true
console.log(b instanceof Bar); // true
console.log(c instanceof Foo); // false
console.log(c instanceof Bar); // false
console.log(Bar instanceof Foo); // true