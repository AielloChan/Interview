// Copyright 2021 aiello
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import bindPolyfill from "./bind-polyfill"

const realBind = Function.prototype.bind

beforeEach(() => {
    Function.prototype.bind = bindPolyfill
});

afterEach(() => {
    Function.prototype.bind = realBind
});

describe("Test for bind polyfill", () => {
    it("Should change scope", () => {
        const o = {
            name: 'foo',
            a() { return this.name; }
        }
        const b = o.a.bind({ name: 'bar' })
        expect(b()).toEqual("bar")
    })
    it("Should change name", () => {
        function a() { }
        const b = a.bind({})
        expect(b.name).toEqual("bound a")
    })
    it("Should change length", () => {
        function a(a, b, c) { return a + b + c }
        const b = a.bind({})
        expect(b.length).toEqual(a.length)
    })
    it("Should has prototype function", () => {
        function a() { }
        a.prototype.sum = function (a, b) { return a + b }
        const b = a.bind({})
        const c = new b()
        expect(c.sum(1, 2)).toEqual(3)
    })
    it("Should apply params", () => {
        function foo(a, b, c, d) {
            return a + b + c + d
        }
        const bar = foo.bind(null, 1, 2)
        expect(bar(3, 4)).toEqual(10)
    })
    it("Should apply to new", () => {
        function foo(a, b, c, d) {
            this.result = a + b + c + d
        }
        const bar = foo.bind(null, 1, 2)
        const baz = new bar(3, 4)
        expect(baz.result).toEqual(10)
    })
})