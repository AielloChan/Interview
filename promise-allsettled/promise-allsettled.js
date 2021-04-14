export default async function promiseAllSettled(prs) {
    return new Promise((rs, rj) => {
        const tasks = Array.from(prs)
        const len = tasks.length

        const result = new Array(len)
        let count = 0
        function setVal(idx, val) {
            result[idx] = val
            count++
            if (count == len) {
                rs(result)
            }
        }
        tasks.forEach((pr, idx) =>
            pr instanceof Promise ?
                pr.then(data => setVal(idx, { status: "fulfilled", value: data }))
                    .catch(e => setVal(idx, { status: "rejected", reason: e }))
                :
                setVal(idx, { status: "fulfilled", value: pr })
        )
    })
}

const a = new Promise(r => setTimeout(() => r("a"), 1e3))
const b = new Promise(r => setTimeout(() => r("b"), 1e2))
const c = new Promise(r => setTimeout(() => r("c"), 2e3))
const d = new Promise(r => setTimeout(() => r("d"), 0))
const e = "e"

// promiseAllSettled([a, b, c, d, e]).then(data => console.log(data))

const f = new Promise((rs, rj) => setTimeout(() => rj("f"), 3e3))
promiseAllSettled([a, b, c, d, e, f]).then(data => console.log(data)).catch(e => console.log(e))