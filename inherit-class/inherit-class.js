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

class Animal {
    constructor(name) {
        this.name = name
    }
    say() {
        console.log(this.name);
    }
}

class Dog extends Animal {
    constructor(id, name) {
        super(name)
        this.id = id
    }
    say() {
        console.log(this.id, this.name);
    }
}

const d = new Dog(123, "dodo")

d.say()