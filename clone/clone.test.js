import clone from './clone'

describe("Test for clone", () => {
    it("Should clone a simple object", () => {
        const a = { name: 'a' }
        const b = clone(a)
        b.name = 'b'
        expect(a.name).toEqual("a")
    })
    it("Should clone a circular object", () => {
        const a = { name: 'a' }
        a.target = a
        const b = clone(a)
        b.name = 'b'
        expect(a.target.name).toEqual("a")
    })
    it("Should clone a string", () => {
        const a = "123"
        const b = clone(a)
        expect(b).toEqual("123")
    })
    it("Should clone a number", () => {
        const a = 123
        const b = clone(a)
        expect(b).toEqual(123)
    })
    it("Should clone a String", () => {
        const a = new String("123")
        const b = clone(a)
        expect(b.toString()).toEqual("123")
    })
    it("Should clone a Date", () => expect(clone(new Date("2020-12-21"))).toEqual(new Date("2020-12-21")))
    it("Should clone a RegExp", () => expect(clone(/reg/)).toEqual(/reg/))
    it("Should clone null", () => expect(clone(null)).toEqual(null))
    it("Should clone NaN", () => expect(clone(NaN)).toEqual(NaN))
    it("Should clone a function", () => {
        function a() { return "name a"; }
        const b = clone(a)
        expect(b()).toEqual("name a")
    })
    it("Should clone a function with prototype", () => {
        function a() { return "name a"; }
        a.prototype.say = function () { return "I'm a"; }
        const b = clone(a)
        expect((new b()).say()).toEqual("I'm a")
    })
    it("Should clone a function with new prototype", () => {
        function a() { return "name a"; }
        a.prototype.say = function () { return "I'm a"; }
        const b = clone(a)
        b.prototype.say = function () { return "I'm b" }
        expect((new b()).say()).toEqual("I'm b")
    })
})