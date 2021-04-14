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

export default function validateHTML(str) {
    const stack = []
    const reg = /\<\/?([^\/\<\>\s]+)[^\/\<\>]*?\/?\>/g
    let result = reg.exec(str)
    while (result) {
        const [match, tag, idx] = result
        if (match.startsWith("</")) {
            // end node
            if (stack[stack.length - 1] == tag) {
                // matched
                stack.pop()
            } else {
                return false
            }
        } else if (match.endsWith("/>")) {
            // self close node
        } else {
            // normal start node
            if (tag == "div" && stack.find(item => item == "span")) {
                return false
            }
            stack.push(tag)
        }
        result = reg.exec(str)
    }
    return stack.length == 0
}