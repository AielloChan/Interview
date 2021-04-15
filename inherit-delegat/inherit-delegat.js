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

const Animal = {
    name: '',
    init(name) {
        this.name = name
    },
    say() {
        console.log(this.name);
    },
    run() {
        console.log(`${this.name} is running...`);
    }
}

const Dog = Object.create(Animal)
Dog.create = function (id, name) {
    this.init(name)
    this.id = id
}
Dog.say = function () {
    console.log(this.name, this.id);
}

const a = Object.create(Animal)
a.init('Anan')
a.say()
a.run()
const d = Object.create(Dog)
d.create(123, 'Dodo')
d.say()
d.run()