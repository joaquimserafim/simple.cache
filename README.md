# simple.cache

a simple lru cache

----
<a href="https://nodei.co/npm/simple.cache/"><img src="https://nodei.co/npm/simple.cache.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/simple.cache.svg?branch=master)](https://travis-ci.org/joaquimserafim/simple.cache)[![Coverage Status](https://coveralls.io/repos/github/joaquimserafim/simple.cache/badge.svg)](https://coveralls.io/github/joaquimserafim/simple.cache)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/simple.cache/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.x.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/simple.cache/blob/master/package.json#L39)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


### api
`const SimpleCache = require('simple.cache')`

`SimpleCache(max)` **max** integer, default to 1000

#### methods
* **set(key, value)** void, set a new entry and value
* **get(key)** string or undefined, gets the entry's value from a given key
* **has(key)** boolean, check if a given key already exists
* **remove(key)** void, remove a given key from the first cache
* **size()** integer, get the size of the cache
* **clear()** void, clear cache 
* **keys()** array, returns the keys from the cache
* **dump()** object, retrieves the entire cache


### example


```js
const SimpleCache = require('simple.cache')

const myCache = SimpleCache()

myCache.set('foo', 123)
myCache.set('bar', 456)

myCache.get('bar')// returns 456

myCache.remove('foo')

myCache.size()// should return 1

myCache.clear()// both caches are reset
```


props to Dominic Tarr for the amazing LRU algorithm

#### ISC License (ISC)
