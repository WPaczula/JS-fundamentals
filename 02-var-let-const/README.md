<div align="center">
    <h1>var, let, const - which one should I choose?</h1>
</div>

There are three ways of declaring a variable - by using var (the old school one), let and const (the new school ones). There is a slight difference between those 3 so lets jump into it.

<h2>Table of contents</h2>

- [var](#var)
- [let and const](#let-and-const)
- [The rule of thumb](#the-rule-of-thumb)
- [How to share variables](#how-to-share-variables)
  - [export](#export)
  - [import](#import)

## `var`

Before we start we need to know what is Hoisting. It's a JS mechanism which moves stuff declaration to the top of the current scope. It is the default mechanism and it works for `var` keyword. So the code below will work just because of hoisting:

```
x = 5; // it will work, because var declaration which is below is moved to the top by default during compilation on the fly

var x // it's really not that intuitive, I know 😅
```

Yeah so that one is kinda strange right? `var` keyword allows you to create a variable which is hoisted and can be changed, so it can be tricky and doesn't give any information, but "I want a variable here" (or not particularly here really 😅).

## `let` and `const`

In the newer version of JS `let` and `const` keyword appeared. They don't do that "fancy" hoisting and that's why they are more predictive. Furthermore `const` implies, that the value that you are declaring won't change in the code, so it makes it easier to interpret. `let` on the other hand is like "Take care cowboy 🤠, this value will be changed further on". So using those is more about
giving information to the dev that will be reading your code instead of really making a difference - you can use `let` in all `const` cases and it won't be an error.

## The rule of thumb

Use `const` and `let` instead of `var` and try to give the dev that will be reading your code as much information as possible.

## How to share variables

Sometimes we want to share the variables between files. In the old days we would use `require('path/to/file')` to get something and
`module.exports = 'something'` to export the data. Right now we can use `import` and `export` keywords.

### export

There are two ways to export something:

- first is to export it as the `default` value,
- second is to make a named export.

To export something as a default value we just use those two keywords together:

```
const myVariable = 5

export default myVariable
```

Named export allows us to export multiple thing from a file:

```
export const a = 5
export const b = 15
export const c = 25
```

Right now we can import a, b and c from the file. Let's see how we can import the values now.

### import

To import something that was exported as a default we can just use the syntax:

```
import somethingExportedByDefault from 'path/to/file'
```

We can name it however we like because there is only on default export from a file. To import something that
was exported with a name we can use the syntax:

```
import { a, b, c } from 'path/to/file'
```

We can even combine both of those so it looks something like that:

```
// export
export default 5
export const a = 0
export const b = 1
export const c = 2

// import
import defaultVariable, { a, b, c } from 'path/to/file'
```
