<div align="center">
    <h1>How to compare things</h1>
</div>

Comparison in JS is really a strange part to be honest 😅. That's partly because it's a dynamically typed language so you can compare really anything and see what is the result. Lets see what are the types in JS and how to compare them.

<h2>Table of contents</h2>

- [Types in JS](#types-in-js)
  - [Difference between null and undefined](#difference-between-null-and-undefined)
  - [Null JS bug](#null-js-bug)
- [How to compare things](#how-to-compare-things)
  - [The difference](#the-difference)
  - [How does it work for objects](#how-does-it-work-for-objects)
- [The truthy and falsy stuff](#the-truthy-and-falsy-stuff)
  - [How you can utilize that thing](#how-you-can-utilize-that-thing)
- [Exercises](#exercises)

## Types in JS

- boolean - true or false,
- number - integers, floats, doubles,
- string - characters,
- null - no value,
- undefined - undeclared value,
- symbol (we won't focus on that particular one, if you'd like to learn more about it visit [here](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/)),
- object - anything else like inline objects, arrays or functions.

To check the type of a variable you can use `typeof` operator like: 

```
typeof 5 === 'number' // true
``` 

### Difference between null and undefined

You will recieve `undefined` every time you try to access some variable, which wasn't given a value yet or some object property that is... undefined.

Null on the other hand must be explicitly assigned or returned and it means that you **purposely** don't assign a value to something.

### Null JS bug

In JS you can use `typeof` operator to get variables type. JS has a bug which is there since the beginning actually. And it can't be fixed because it would break the internet (as a lot of code depends on it). That bug is the type of `null`. JS will tell you it is actually an object 🤨. So be carefull there, you can read more about how it happened [here](https://2ality.com/2013/10/typeof-null.html).

## How to compare things

Alright so now when we've got that sorted out we can proceed to comparing things. To do it there are 4 operators:

- `==`/`!=` which are abstract compare operators,
- `===`/`!==` which are strict compare operators.

### The difference

When using abstract operators JS will try to parse both things to the same type (with some algorythm which might cause some [strange stuff](https://www.youtube.com/watch?v=et8xNAc2ic8)).

When using strict compare operators JS will look on both values AND types. So if you don't want to learn the algorythm of how JS casts things you'll be just fine just using strict compares.

### How does it work for objects

Comparing two objects work based on their reference. For example:

```
    {} === {} // false
    const a = {}
    a === a // true
```

The same applies for functions or tables. To deep compare you can use some helper functions from utils libraries like lodash. 

## The truthy and falsy stuff

In JS things have truthy or falsy nature. It means you can use logical operators (&& and ||) and they will check their Boolean nature 🍃🌿🍀. To check if something is truthy or falsy you can double negate it, so for instance falsy things are:

- empty strings,
- zero,
- null,
- undefined,
- false...

Other things are considered truthy like:

- objects,
- numbers other than 0,
- not empty strings,
- arrays,
- functions,
- true.

### How you can utilize that thing

So imagine you'd like to return some property only if the object you have is defined. You can then use:

```
const object = ???;

return object && object.myProperty;
```

JS will check the truthyness of the first piece (object) and only if it is truthy will check the second piece of and operator. Then it will return the latest combined value. So in this code we can get `undefined` or whatever is in `object.myProperty`.

So now what about or operator? It checks all the values up to the first truthy one and returns it (that oprimalization though 🔥🔥🔥). So for example:

```
undefined || null || 'hell yeah' || 100
```

would be `'hell yeah'` as its the first truthy value. 

## Exercises

[Check them out 🐨](https://codesandbox.io/s/cranky-waterfall-41qxw?fontsize=14&hidenavigation=1&theme=dark)
