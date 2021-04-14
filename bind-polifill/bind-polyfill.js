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

export default function bind(scope, ...initialParams) {
    if (typeof this !== 'function') {
        throw new Error("bind should be call on a function")
    }
    const func = this
    const boundFunc = function () {
        let realScope = scope
        if (new.target) {
            realScope = this
        }
        return func.call(realScope, ...initialParams, ...arguments)
    }
    Object.defineProperty(boundFunc, 'name', { value: 'bound ' + func.name })
    Object.defineProperty(boundFunc, 'length', { value: func.length })
    if (func.prototype) {
        boundFunc.prototype = Object.create(func.prototype)
    }
    return boundFunc
}