<div align="center">
    <h1>How to create objects and get their properties</h1>
</div>

There is bunch of ways to create a property for an object and each can be useful in some cases. Furthermore we've got some ways to get them back as well. Here is what we can do.

## How to create objects inline

The simplest way is the one you probably know, you just do the good old way:

```
const object = {
    myProperty: 5
}
```

Simple and fast. But what if your property really needs to have some JS keyword like `-`. You can still create that object, but you need to specify that property as a string:

```
const object = {
    'my-property': 5
}
```

Alright! But what if I don't really know the name of that property - I have it stored in my variable. You can still create it, just use `[]` and you are good to go:

```
const name = 'my-property'
const object = {
    [name]: 5
}
```

### Shortcut

The last example is a handy shortcut. Let's pretend that we have some `id` specified as a variable. And we want to pass that `id` as a property of the object. We could do it as `{ id: id }`, but JS allows us to make a shortcut here and just write `{ id }`.

Let's see how can we get those properties back though.

## How to get objects properties

Lets start from the simplest one again and use the `.` operator:

```
object.myProperty // 5
```

In the second case, we can't use it because the name contains a keyword. So we go back to the `[]` operator (just like in arrays, because indexes are like objects keys TBH 🙈). The same applies to the properties that we have stored in a variable. So lets use that bad boy:

```
object['my-property'] // 5
object[name] // 5
```

### Destructuring

Lets assume that we want to get not one but two properties. We can use the way described above, but that would be 2 lines of code (bleh 😖). We can do that in one with destructuring mechanism. It allows you to get named properties of an object in the same way of the "shortcut" above. You will recieve a bunch of variables of the same names as object's properties. Let's see an example though:

```
const object = { a: 5, b: '🔥', c: true };

const { a, b } = object;
// a === 5
// b === '🔥'
// you can ommit as many properties as you want, like that c above
```

So we can ommit some properties if we don't want them. But what if we want all ommitted properties in a separate "bag"?

### Spread operator

This operator is a `...variableName`. When you create a variable, it works like a "bag" of a given name for passed values. Let's see an example:

```
const object = { a: 1, b: 2, c: 3, d: 4};

const { a, ...rest } = object;
// a === 1
// rest is { b: 2, c: 3, d: 4}
```

It can be used as a parameter in a function as well, then it will take all the values passed and create an array for them.

```
function test(a, ...rest) {
    console.log(a)
    console.log(rest)
}

test(1, 2, 3, 4, 5, 6, 7, 8)
// 1
// [2, 3, 4, 5, 6, 7, 8]
```

JS allows to use it the other way around too! So if we had an array of function parameters, we can use `...` to "transform" them to values divided by a comma:

```
const values = [1, 2, 3, 4, 5, 6, 7, 8]

test(...values) // it is the same as test(1, 2, 3, 4, 5, 6, 7, 8)
```

Can we use it for objects as well? Yup 🙌! Using it with object would be like "take all the things that are written between {} and paste them here". Lets see an example

```
const object1 = { a: 1, b: 2, c: 3 }
const object2 = { d: 4, e: 5: f: 6 }

const merge = {
    ...object1, 
    ...object2
} // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
```

## Examples

Uhh that was kind of long wasn't it, to remember it better you can do some [exercises 🐨]()

