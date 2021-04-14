import EventBus from './event-bus'

describe("Test for EventBus", () => {
    it("Should be ok", () => {
        const eb = new EventBus()
        eb.on("click", (name) => {
            expect(name).toEqual("foo")
        })
        eb.emit("click", "foo")
    })
})