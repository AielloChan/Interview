const typeOf = require('./typeOf');

describe('Test typeOf', () => {
    it('Should be string', () => { expect(typeOf('')).toEqual('string') })
    it('Should be boolean', () => { expect(typeOf(false)).toEqual('boolean') })
    it('Should be number', () => { expect(typeOf(123)).toEqual('number') })
    it('Should be regexp', () => { expect(typeOf(/reg/)).toEqual('regexp') })
    it('Should be date', () => { expect(typeOf(new Date())).toEqual('date') })
    it('Should be array', () => { expect(typeOf([])).toEqual('array') })
    it('Should be object', () => { expect(typeOf({})).toEqual('object') })
    it('Should be function', () => { expect(typeOf(function () { })).toEqual('function') })
    it('Should be undefined', () => { expect(typeOf(undefined)).toEqual('undefined') })
    it('Should be null', () => { expect(typeOf(null)).toEqual('null') })
    it('Should be async function', () => { expect(typeOf(async function () { })).toEqual('asyncfunction') })
    it('Should be set', () => { expect(typeOf(new Set())).toEqual('set') })
    it('Should be map', () => { expect(typeOf(new Map())).toEqual('map') })
})