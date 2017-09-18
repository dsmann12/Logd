# presage [![npm version](https://badge.fury.io/js/presage.svg)](https://badge.fury.io/js/presage) [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) [![Build Status](https://travis-ci.org/dsibilly/presage.svg?branch=master)](https://travis-ci.org/dsibilly/presage) [![Coverage Status](https://coveralls.io/repos/github/dsibilly/presage/badge.svg?branch=master)](https://coveralls.io/github/dsibilly/presage) [![Dependency Status](https://gemnasium.com/badges/github.com/dsibilly/presage.svg)](https://gemnasium.com/github.com/dsibilly/presage) [![Code Climate](https://codeclimate.com/github/dsibilly/presage.svg)](https://codeclimate.com/github/dsibilly/presage)

A set of utilities for working with ECMAScript Promises.

## Documentation

### [Collections](#collections)

* [`eachSeries`](#each-series)
* [`filter`](#filter), `filterSeries`
* [`map`](#map), `mapSeries`
* [`reduce`](#reduce)

### [Control Flow](#control-flow)

* [`parallel`](#parallel)
* [`series`](#series)

### [Utilities](#utilities)

* [`promiseWithCallback`](#promise-with-callback)

---------------------------------------

<a name="collections"></a>

## Collections

<a name="each-series"></a>

### eachSeries(coll, iteratee)

Applies the function `iteratee` to each item in `coll`, in series.
`iteratee` is called with an item from the collection, and may return
a value or a Promise. If `iteratee` throws an Error or returns a
rejected Promise, `eachSeries` returns a rejected Promise.

This function is best used to yield side-effects. If in-place
transformation without side-effects are desired, use [`map`](#map) or
`mapSeries` instead.

__Arguments__

* `coll` - A collection to iterate over.
* `iteratee(item)` - A function to apply to each item in `coll`. Note that the array index of `item` is *not* passed to `iteratee`.

__Example__

```javascript
import presage from 'presage';

presage.eachSeries([
    'file1',
    'file2',
    'file3'
], filePath => new Promise((resolve, reject) => {
    console.log(`Processing file: ${filePath}`);

    if (file.length > 32) {
        // File name too long
        reject(new Error(`File name too long: ${filePath}`));
        return;
    }

    console.log(`Processing complete: ${filePath}`);
    resolve();
})).catch(error => {
    // If any of the file processing produced an error, handle it here
    if (error) {
        console.error(error);
        return;
    }

    console.log('All files have been processed successfully');
});
```

---------------------------------------

<a name="filter"></a>

### filter(coll, iteratee)

Returns a new array of all the values in `coll` which result in a truthy
value when `iteratee` is applied to them. This operation is performed in
parallel, but the results array will be in the same order as `coll`.

__Arguments__

* `coll` - A collection to iterate over.
* `iteratee(item)` - A truth test to apply to each item in `coll`. Expected, but not required, to return a Promise.

__Example__

```javascript
import fs from 'fs';
import presage from 'presage';

const pAccess = filePath => new Promise(resolve => {
    fs.access(filePath, error => {
        resolve(!error);
    });
});

presage.filter([
    'file1',
    'file2',
    'file3'
], pAccess).then(results => {
    // results now equals an array of the accessible files
});
```

__Related__

* filterSeries(coll, iteratee)

---------------------------------------

<a name="map"></a>

### map(coll, iteratee)

Produces a new collection of values by mapping each value in `coll`
through the `iteratee` function. The `iteratee` is called with an item
from `coll` and is expected (but not required) to return a Promise. If
`iteratee` rejects or throws, the `map` function returns a rejected
Promise.

This function applies `iteratee` to each item in parallel. As such there
is no guarantee that `iteratee` Promises will resolve in order. However,
the results array will be in the same order as the original `coll`.

__Arguments__

* `coll` - A collection to iterate over.
* `iteratee(item)` - A function to apply to each item in `coll`.

__Example__

```javascript
import fs from 'fs';
import presage from 'presage';

const pState = file => {
    const {
        callbackFunction,
        promise
    } = presage.promiseWithCallback();

    fs.stat(file, callbackFunction);
    return promise;
}

presage.map([
    'file1',
    'file2',
    'file3'
], pStats).then(results => {
    // results is now an array of stats for each file
});
```

__Related__

* mapSeries(coll, iteratee)

---------------------------------------

<a name="reduce"></a>

### reduce(coll, reducer, initialValue)

Reduces `coll` into a single value using async `reducer` to return
each incremental result. `initialValue` is the initial state of the
reduction. This function only operates in series.

__Arguments__

* `coll` - A collection to iterate over. This collection may contain values or Promises.
* `reducer(memo, item)` - A function applied to each item in `coll` to produce the next step in the reduction. `memo` is the current memoization of the reduction, containing the partial result up to the current step. `item` is the current item in `coll` that is being processed. `reducer` may return a value or a Promise.

__Example__

```javascript
import presage from 'presage';

presage.reduce([
    Promise.resolve(1),
    2,
    Promise.resolve(3)
], (memo, item) => new Promise(resolve => {
    process.nextTick(() => {
        resolve(memo + item);
    });
}), 0).then(result => {
    // result is now equal to the last value of memo, which is 6
});
```

---------------------------------------

<a name="control-flow"></a>

## Control Flow

<a name="parallel"></a>

### parallel(tasks)

Runs the functions in the `tasks` collection in parallel, without
waiting for the other tasks to finish. If any task throws an Error or
returns a rejected Promise, this function returns a rejected Promise.

Best used for performing multiple async I/O tasks in parallel. Should
*not* be used for tasks that do not use timers or perform I/O; the
single-threaded nature of JavaScript will run these tasks in series and
not yield any performance gain.

This function accepts an object instead of an array. Each property will
be run as a function, and the results will be passed to the resolved
Promise returned by `parallel`.

__Arguments__

* `tasks` - A collection containing functions to run.

__Example__

```javascript

import presage from 'presage';

presage.parallel([
    () => new Promise(resolve => {
        setTimeout(() => {
            resolve('task 1');
        }, 200);
    }),
    () => new Promise(resolve => {
        setTimeout(() => {
            resolve('task 2')
        }, 100);
    })
]).then(results => {
    // the results array with equal [ 'task 1', 'task 2' ]
    // despite the second task being faster
});

presage.parallel({
    one: () => {
        setTimeout(() => {
            resolve('task 1')
        }, 200);
    },
    two: () => {
        setTimeout(() => {
            resolve('task 2');
        }, 100);
    }
}).then(results => {
    // results is now equal to { one: 'task 1', two: 'task 2' }
});
```

---------------------------------------

<a name="series"></a>

### series(tasks)

Runs the functions in the `tasks` collection in series, each task
running once the previous task has completed. If any tasks in the series
throw or return a rejected Promise, the task processing stops and the
`series` function returns a rejected Promise. Otherwise, it returns a
resolved Promise when all `tasks` have been completed.

A task may be a Promise, a function that returns a Promise, or a
function that returns a value.

__Arguments__

* `tasks` - A collection containing functions to run. Each function is passed zero arguments.

__Example__

```javascript
import presage from 'presage';

presage.series([
    () => {
        // do some stuff...
        return Promise.resolve('one');
    },
    () => {
        // do some more stuff...
        return Promise.resolve('two');
    }
]).then(results => {
    // results is now equal to ['one', 'two']
});
```

---------------------------------------

<a name="utilities"></a>

## Utilities

<a name="promise-with-callback"></a>

### promiseWithCallback([valueReducer])

Returns an object containing a `promise` and a `callbackFunction`.
These are connected such that when `callback` is invoked, `promise` is
resolved or rejected accordingly.

The callback function has the signature:
`callbackFunction(error[, arg1[, ...[, argN]]])`; it expects the first
argument to be an Error object or *null*, while subsequent arguments are
provided to `promise` for resolution.

Takes an optional `valueReducer` function that reduces values passed to
the callback function to a single value. `promise` is resolved with this
value. If `valueReducer` throws or rejects, `promise` is rejected.

This function can be useful for wrapping callback-based async functions
with Promises.

__Arguments__

* `valueReducer` - an optional variadic function that reduces its arguments to a single value.

__Example__

```javascript
import fs from 'fs';
import presage from 'presage';

const pReadFile = (path, options) => {
    const {
        callbackFunction,
        promise
    } = presage.promiseWithCallback();

    fs.readFile(path, options, callbackFunction);
    return promise;
};

pReadFile('./example.txt').then(data => {
    // the file's data is here if resolved...
}).catch(error => {
    // the rejection error is here is rejected
});

// ...and with a value reducer that adds callback arguments
const {
    callbackFunction,
    promise
} = promiseWithCallback((...args) => args.reduce((memo, arg) => memo + arg));

callbackFunction(null, 1, 2, 3);
promise.then(result => {
    // result is now equal to the sum of the arguments provided to
    // callbackFunction, which is 6.
});
```
