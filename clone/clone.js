/**
 * Clone a JavaScript target
 * @param {any} obj Target to be clone
 * @param {boolean} isDeep Enable deep clone
 * @param {Map} _stack Private param, no need to pass
 * @returns {any} A copy of target
 */
export default function clone(obj, isDeep = false, _stack = new Map()) {
    if (_stack.has(obj)) {
        return _stack.get(obj)
    }
    if (Array.isArray(obj)) {
        return obj.map(item => isDeep ? clone(item, true, _stack) : item)
    }
    if (obj == null) {
        return obj === undefined ? undefined : null
    }
    if (obj instanceof Map) {
        const result = new obj.constructor()
        obj.forEach((val, key) => result.set(key, isDeep ? clone(val, true, _stack) : val))
        return result
    }
    if (obj instanceof Set) {
        const result = new obj.constructor()
        obj.forEach((val) => result.add(isDeep ? clone(val, true, _stack) : val))
        return result
    }

    const type = Object.prototype.toString.call(obj).slice(8, -1)
    if (type === 'Date' || type === 'RegExp') {
        return new obj.constructor(obj)
    }
    if (typeof obj === 'object' && (type === 'String' || type === 'Number')) {
        return new obj.constructor(obj)
    }
    if (type === 'Function') {
        const rt = function () { return obj.apply(this, arguments) }
        Object.getOwnPropertyNames(obj).forEach(key => {
            const pd = Object.getOwnPropertyDescriptor(obj, key)
            if (isDeep) {
                pd.value = clone(obj[key], true, _stack)
            }
            Object.defineProperty(rt, key, pd)
        })
        Object.assign(rt.prototype, obj.prototype)
        return rt
    }
    if (type === 'Object') {
        const rt = {}
        Object.getOwnPropertyNames(obj).forEach(key => {
            const pd = Object.getOwnPropertyDescriptor(obj, key)
            if (isDeep) {
                pd.value = clone(obj[key], true, _stack)
            }
            Object.defineProperty(rt, key, pd)
        })
        return rt
    }
    return obj
}
