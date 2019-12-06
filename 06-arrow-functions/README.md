<div align="center">
    <h1>Arrow functions</h1>
</div>

There are two types of functions in JS:

- good old functions declared with `function` keyword,
- arrow functions which are anonymous and use `=>`.

## Good old functions

They also are hoisted (declaration is moved to the top) the same way `var` variables are. They can have a name or not. There is one important thing with `this` keyword! In this kind of function, `this` is connected with the scope the function was called in. Lets look at the example to understand that better:

```
function test() {
    console.log(this.a)
}

class Object {
    a: 5

    testObject() {
        test() // logged 5
    }
}

