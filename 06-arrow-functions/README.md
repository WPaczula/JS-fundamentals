<div align="center">
    <h1>Arrow functions</h1>
</div>

There are two types of functions in JS:

- good old functions declared with `function` keyword,
- arrow functions which are anonymous and use `=>`.

## Good old functions

They also are hoisted (declaration is moved to the top) the same way `var` variables are. They can have a name or not. There is one important thing with `this` keyword! In this kind of function, `this` is connected with the scope the function was called in. Lets look at the example to understand that better:

```
function logA() {
    console.log(this.a)
}

class Object {
    constructor() {
        this.a = 5
    }

    logAFromObject() {
        logA()
    }
}

a = 205
const o = new Object()
o.logAFromObject() // logs 205, because the a in the scope is equal to 205 (the scope is global)
```

It's alright if you scratch your head 🙈. This one is kinda tricky. To solve this problem we can `bind` the context (this keyword), so it's always equal to `Object` context. All we have to do is reassign this function in constructor:

```
class Object {
    constructor() {
        this.a = 5
        this.logAFromObject = this.logAFromObject.bind(this) // this means that whenever logAFromObject is called it has to use constructors context! (in other words `Object` context).
    }
    ...
}
```

It's kind of a pain, but some libraries actually use that "loosing context" feature (cypress uses it so it's possible to use aliases via `this`). 

*Sidenote*: We can also skip functions name to create anonymous one and assign it to a variable:

```
const hello = function() {
    console.log('hello');
}
```

## New hot arrow functions

In the ES6 new feature called arrow functions came. To create one we just need to skip `function` word and use the arrow (duh 😅). So the syntax is looking like that:

```
const hello = () => {
    console.log('hello')
}
```
If we want to return some value immediately, we don't need those curly brackets:

```
const return10 = () => 10
```

### The difference

Yeah yeah, the syntax is different. Is it the reason they are so useful? Nope, not really. The real reason is that arrow functions **keep their context**! Good bye binding, welcome arrow functions.



 