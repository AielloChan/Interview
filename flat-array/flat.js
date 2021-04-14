export default function flat(arr, depth = 1) {
    function isArray(arr) { return Object.prototype.toString.call(arr) == "[object Array]" }
    if (!isArray(arr)) { return arr }
    let result = arr
    let isEnd = true
    let round = 0
    while (round++ < depth) {
        const tmp = []
        isEnd = true
        for (let i = 0, j = result.length; i < j; i++) {
            if (isArray(result[i])) {
                result[i].forEach(item => tmp.push(item))
                isEnd = false
            } else {
                tmp.push(result[i])
            }
        }
        if (isEnd) {
            return result
        } else {
            result = tmp
        }
    }
    return result
}

console.log(flat([1, [2, [3]]]));