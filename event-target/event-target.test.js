import eventTarget from './event-target'

describe("Test for EventTarget", () => {
    it("Should be ok", () => {
        const eb = new eventTarget()
        eb.on("click", (name) => {
            expect(name).toEqual("foo")
        })
        eb.emit("click", "foo")
    })
})