/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

class SimpleCache {

  constructor (max) {
    this._cache0 = this._cache1 = Object.create(null)
    this._size = 0
    this._max = max || 1000
    this._update = update.bind(this)

    function update (key, value) {
      this._cache0[key] = value
      this._size += 1

      if (this._size > this._max) {
        this._size = 0
        this._cache1 = this._cache0
        this._cache0 = Object.create(null)
      }
    }
  }

  set (key, value) {
    if (this._cache0[key] !== undefined) this._cache0[key] = value
    else this._update(key, value)
  }

  get (key) {
    let value = this._cache0[key]
    if (value !== undefined) return value

    value = this._cache1[key]
    /* istanbul ignore else */
    if (value !== undefined) {
      this._update(key, value)
      return value
    }
  }

  has (key) {
    return this._cache0[key] !== undefined || this._cache1[key] !== undefined
  }

  remove (key) {
    if (this._cache0[key] !== undefined) this._cache0[key] = undefined
    if (this._cache1[key] !== undefined) this._cache1[key] = undefined
  }

  size () {
    return this._size
  }

  clear () {
    this._cache0 = this._cache1 = Object.create(null)
    this._size = 0
  }

  entries () {
    return this._cache0
  }

  keys () {
    return Object.keys(this._cache0)
  }

  dump () {
    return JSON.stringify(this._cache0)
  }

}

module.exports = function factory (max) {
  return new SimpleCache(max)
}
