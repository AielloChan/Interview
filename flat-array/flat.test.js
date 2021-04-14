import flat from "./flat"

describe("Test for flat", () => {
    it("Should be [1, 2, [3]]", () => { expect(flat([1, [2, [3]]])).toEqual([1, 2, [3]]) })
    it("Should be [1, 2, 3]", () => { expect(flat([1, [2, [3]]], 2)).toEqual([1, 2, 3]) })
    it("Should be [1, 2, 3]", () => { expect(flat([1, [2, [3]]], Infinity)).toEqual([1, 2, 3]) })
    it("Should be [1, [2, [3]]]", () => { expect(flat([1, [2, [3]]], 0)).toEqual([1, [2, [3]]]) })

})