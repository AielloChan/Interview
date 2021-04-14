/**
 * url parse
 * @param {string} str URL to parse
 */
export default function url(str) {
    const idx = str.indexOf("?")
    const rt = Object.create(null)
    if (idx == -1) return rt
    const arr = str.slice(idx + 1).split("&")
    arr.forEach(item => {
        const tmp = decodeURI(item)
        const pair = tmp.split("=")
        const key = pair[0]
        let value = pair[1]
        if (!isNaN(value)) {
            value = Number(value)
        }
        if (value === undefined) {
            value = true
        }
        if (value === "true" || value === "false") {
            value = value === "true"
        }

        const target = rt[key]
        if (target) {
            if (Array.isArray(target)) {
                target.push(value)
            } else {
                rt[key] = [rt[key], value]
            }
        } else {
            rt[key] = value
        }
    })
    return rt
}