import url from "./url"

describe("Test for url", () => {
    it("Should name be aiello", () => {
        const result = url("http://example.com?name=aiello")
        expect(result.name).toEqual("aiello")
    })
    it("Should enable be true", () => {
        const result = url("http://example.com?enable")
        expect(result.enable).toEqual(true)
    })
    it("Should id be 123", () => {
        const result = url("http://example.com?id=123")
        expect(result.id).toEqual(123)
    })
    it("Should id be 123 and name be aiello", () => {
        const result = url("http://example.com?id=123&name=aiello")
        expect(result).toEqual({ id: 123, name: 'aiello' })
    })
    it("Should user be ['foo','bar']", () => {
        const result = url("http://example.com?user=foo&user=bar")
        expect(result.user).toEqual(["foo", "bar"])
    })
    it("Should enable be [true,false]", () => {
        const result = url("http://example.com?enable=true&enable=false")
        expect(result.enable).toEqual([true, false])
    })
})