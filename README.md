# await-wrap

Small async/await wrapper which allows a similar paradigm to Node's callbacks mixed with [React Hooks](https://reactjs.org/docs/hooks-intro.html). `await-wrap` wraps any async function and respond with an array with either `data` or `err`, allowing you to use async/await with out the try/catch blocks.

## Usage

```js
const wrap = require('await-wrap')

const iResolve = async (text) => new Promise((done) => done(text))
const iReject = async (text) => new Promise((_, fail) => fail(text))

..

const [data, err] = await wrap(iResolve('jack'))
// data === 'jack', err === undefined

..

const [data, err] = await wrap(iReject('rejected!'))
// data === undefined, err === 'rejected!'
```

Questions? Feedback? [Please let me know](https://github.com/hanford/await-wrap/issues/new)

## License (MIT)

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Copyright © 2017-present [Jack Hanford](http://jackhanford.com) jackhanford@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
