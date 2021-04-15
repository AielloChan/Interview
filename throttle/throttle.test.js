import throttle from './throttle'

describe("Test for throttle", () => {
    it("Should output once", (done) => {
        let count = 0
        const a = () => { count++ }
        const b = throttle(a, 1e2)
        b()
        b()
        setTimeout(() => { expect(count).toBe(1); done() }, 3e2)
    })
    it("Should output twice", (done) => {
        let count = 0
        const a = () => { count++ }
        const b = throttle(a, 3e2)
        b()
        setTimeout(() => { b() }, 2e2)
        setTimeout(() => { b() }, 4e2)
        setTimeout(() => { expect(count).toBe(2); done() }, 8e2)
    })
})