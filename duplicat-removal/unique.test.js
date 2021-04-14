import unique from "./unique"

describe("Test for unique", () => {
    it("Should be [1]", () => { expect(unique([1, 1, 1, 1])).toEqual([1]) })
    it("Should be [1,'1']", () => { expect(unique([1, 1, '1', 1])).toEqual([1, '1']) })
    it("Should be [3,1,2]", () => { expect(unique([3, 1, 2, 3, 2, 2])).toEqual([3, 1, 2]) })
})