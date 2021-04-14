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

import validateHTML from "./validate-html"

describe("Test for validate HTML", () => {
    it("Should match simple html tag", () => {
        expect(validateHTML("<html></html>")).toBe(true)
    })
    it("Should checkout tag not matched", () => {
        expect(validateHTML("<html>hello <div> world</html>")).toBe(false)
    })
    it("Should support tag paramter", () => {
        expect(validateHTML('<html lang="en">hello <div class="inner-div">inner text</div> world</html>')).toBe(true)
    })
    it("Should support >", () => {
        expect(validateHTML('<html lang="en"> 1 > 2 </html>')).toBe(true)
    })
    it("Should support <", () => {
        expect(validateHTML('<html lang="en">1<2</html>')).toBe(true)
    })
    it("Should match self closed tag", () => {
        expect(validateHTML("<html>hello <img/> world</html>")).toBe(true)
    })
    it("Should match multi parent tag", () => {
        expect(validateHTML("<div>hello <img/> world</div><div>foo <span>bar</span></div>")).toBe(true)
    })
    it("Should div not in span tag", () => {
        expect(validateHTML("<div>foo <span><div>no way</div> bar</span></div>")).toBe(false)
    })
})