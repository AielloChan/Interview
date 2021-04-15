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

function Animal(name) {
    this.name = name
}
Animal.prototype.say = function () { console.log(this.name); }
Animal.prototype.run = function () { console.log(`${this.name} is running...`); }

function Dog(id, name) {
    Animal.call(this, name)
    this.id = id
}
Dog.prototype = Object.create(Animal.prototype, { constructor: { value: Dog } })
Dog.prototype.say = function () { console.log(this.name, this.id); }

const a = new Animal('Anan')
const d = new Dog(123, 'Dodo')
a.say()
a.run()

d.say()
d.run()

console.log(d instanceof Animal);
console.log(d.constructor);