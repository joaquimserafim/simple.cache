/*
eslint
no-multi-spaces: ["error", {exceptions: {"VariableDeclarator": true}}]
padded-blocks: ["error", {"classes": "always"}]
max-len: ["error", 80]
*/
'use strict'

const mocha   = require('mocha')
const expect  = require('chai').expect

const it        = mocha.it
const describe  = mocha.describe

const SimpleCache = require('.')

let cache = SimpleCache(2)

describe('SimpleCache', () => {

  it('should return a SimpleCache object', (done) => {
    expect(cache.constructor.name).to.be.equal('SimpleCache')
    done()
  })

  it('should #set an entry', (done) => {
    cache.set('soufly', 'bleed')
    expect(cache.has('soufly')).to.be.deep.equal(true)
    done()
  })

  it('should #get the value of a given key', (done) => {
    expect(cache.get('soufly')).to.be.equal('bleed')
    done()
  })

  it('should check if a key exists with #has', (done) => {
    expect(cache.has('soufly')).to.be.deep.equal(true)
    done()
  })

  it('should return #size of the cache', (done) => {
    expect(cache.size()).to.be.deep.equal(1)
    done()
  })

  it('should return the #entries in the cache', (done) => {
    expect(cache.entries()).to.be.deep.equal({'soufly': 'bleed'})
    done()
  })

  it('should return the #keys in the cache', (done) => {
    expect(cache.keys()).to.be.deep.equal(['soufly'])
    done()
  })

  it('should #dump the data in the cache', (done) => {
    expect(cache.dump()).to.be.deep.equal('{"soufly":"bleed"}')
    done()
  })

  it('should #remove a given key from the cache', (done) => {
    cache.remove('soufly')
    expect(cache.has('soufly')).to.be.deep.equal(false)
    done()
  })

  it('should #clear the data in the cache', (done) => {
    cache.clear()
    expect(cache.size()).to.be.deep.equal(0)
    done()
  })

  it('should fill the entire cache and move old entries into the 2nd cache',
    (done) => {
      cache.set('soufly', 'bleed')
      cache.set(~~(Math.random() * 10), Math.random())
      cache.set(~~(Math.random() * 10), Math.random())

      expect(cache.size()).to.be.deep.equal(0)
      expect(cache.has('soufly')).to.be.deep.equal(true)
      done()
    }
  )

  it('should #remove a given key from the cache', (done) => {
    cache.remove('soufly')
    expect(cache.has('soufly')).to.be.deep.equal(false)
    done()
  })

  it('should move an entry from the cache into the cache when using #get' +
    ' when does not exists in cache',
    (done) => {
      cache.clear()

      cache.set('soufly', 'bleed')
      cache.set(~~(Math.random() * 10), Math.random())
      cache.set(~~(Math.random() * 10), Math.random())

      expect(cache.get('soufly')).to.be.equal('bleed')
      done()
    }
  )

  it('should set the default `max` value for the cache', (done) => {
    cache = SimpleCache()

    for (let i = 0; i < 1000; i++) {
      cache.set(i, Math.random())
    }

    expect(cache.size()).to.be.deep.equal(1000)
    done()
  })

  it('should #clear the data in the cache and update a existing key',
    (done) => {
      // clear cache
      cache.clear()

      cache.set('soufly', 'bleed')
      cache.set('soufly', 'sepultura')
      expect(cache.get('soufly')).to.be.deep.equal('sepultura')
      done()
    }
  )
})
