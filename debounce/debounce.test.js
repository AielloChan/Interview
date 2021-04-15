import debounce from './debounce'

describe("Test for debounce", () => {
    it("Should output once", (done) => {
        let count = 0
        const a = () => { count++ }
        const b = debounce(a, 1e2)
        b()
        b()
        setTimeout(() => { expect(count).toBe(1); done() }, 2e3)
    })
    it("Should output once", (done) => {
        let count = 0
        const a = () => { count++ }
        const b = debounce(a, 3e2)
        setTimeout(() => { b() }, 2e2)
        setTimeout(() => { b() }, 4e2)
        setTimeout(() => { b() }, 6e2)
        setTimeout(() => { b() }, 8e2)
        setTimeout(() => { expect(count).toBe(1); done() }, 1.5e3)
    })
    it("Should output twice", (done) => {
        let count = 0
        const a = () => { count++ }
        const b = debounce(a, 1e2)
        b()
        setTimeout(() => { b() }, 1e3)
        setTimeout(() => { expect(count).toBe(2); done() }, 2e3)
    })
})