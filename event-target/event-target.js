export default class EventBus {
    bus = new Map()
    on(event, cb) {
        if (this.bus.has(event)) {
            this.bus.get(event).push(cb)
        } else {
            this.bus.set(event, [cb])
        }
    }
    off(event, cb) {
        if (this.bus.has(event)) {
            let queue = this.bus.get(event)
            if (cb) {
                queue = queue.filter(func => func !== cb && func.realCallback !== cb)
                if (queue.length > 0) {
                    this.bus.set(event, queue)
                } else {
                    this.bus.delete(event)
                }
            } else {
                return this.bus.delete(event)
            }
        }
    }
    emit(event) {
        const args = Array.from(arguments).slice(1)
        const that = this
        if (this.bus.has(event)) {
            return this.bus.get(event).map(item => item.apply(that, args))
        }
    }
    once(event, cb) {
        const that = this
        function wrap() {
            const result = cb.apply(this, arguments)
            that.off(event, cb)
            return result
        }
        wrap.realCallback = cb
        this.on(event, wrap)
    }
}