<div align="center">
    <h1>How to use default values</h1>
</div>

Default values allows you to pass less parameters or prevent the application from failing. Furthermore there is a trick to parametrize a function in a very convenient way, so that you need to pass only required parameters while not making their sequence matter.

<h2>Table of contents</h2>

- [How does default values work](#how-does-default-values-work)
    - [Function](#function)
    - [Object](#object)
- [How to do the trick](#how-to-do-the-trick)

## How does default values work

### Function

JS allows to use default values in case of an argument being undefined. The syntax is really easy as it looks like that:

```
function test(takeDefault = 10) {
    ...
}
```

### Object

This applies also for destructurizing. You can assign default values for properties that you want to use:

```
const object = {
    a: 5,
};

const { a, b = 5 } = object;

// a === 5
// b === 5
```

## How to do the trick

This pattern is based on the fact that instead of passing list of arguments to the method, we can pass an object where values are assigned to the parameter names. You can then destructure the object and get your arguments. It looks like that:

```
// instead of
function test(param1, param2, param3) {}

// you can
function test(options) {
    const { param1, param2, param3 } = options
}
```

This gives a possibility to pass parameters in any order as a properties of `options` object. Right now we need to provide default values for params and `options` object itself so we are able to not pass anything at all:

```
function test(options = {}) {
    const { param1 = 1, param2 = 2, param3 = 3 } = options
}
```

This gives us ability to call this function in a given ways:

```
test() // full default
test({ param1: 5 }) // param1 === 5 and the rest is default
test({ param3: 1, param1: 15 }) // param3 === 1, param1 === 15 and the rest is default
```

We don't need to pass `undefined` for each parameter that we want to be a default!