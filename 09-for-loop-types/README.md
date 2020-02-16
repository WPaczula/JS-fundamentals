<div align="center">
    <h1>For loops</h1>
</div>

In JS there are multiple ways of "for looping". Using keywords like `in` or `of` you can iterate over some specific parts of an object.

<h2>Table of contents</h2>

- [Good old for](#good-old-for)
- [Functional forEach](#functional-foreach)
- [For ... in](#for-...-in)
- [For ... of](#for-...-of)
- [Which one should I use](#which-one-should-I-use)

## Good old for

But let's start with the simplest one - the good old `for(;;)` loop like in almost every language:

```
cons array = [1, 2, 3]

for (let i=0; i < array.length; i++) {
    console.log(array[i]);
    // prints:
    // 1
    // 2
    // 3
}
```


That's pretty normal stuff. We could use functional programming approach and perform that loop "from" the array itselt though using `forEach` function.

## Functional forEach

`forEach` takes a function which has the current element, its index and the array itself as arguments:

```
const array = ['a', 'b', 'c']

array.forEach((element, index, arrayRef) => {
    console.log(`${element} at ${index} position`);
    // prints:
    // a at 0 position
    // b at 1 position
    // c at 2 position
})
```

In contrast to C# you can actually modify the array in the `forEach` callback. I wouldn't recommend it though at it is a little bit hard to follow.

## For ... in

What if we want to iterate through object's keys, but using `Object.keys` doesn't look clear and so we want to divide it. `For ... in` for the resque 🦸‍♂️. Let's see an example:

```
const obj = { a: 5, b: 6, c: 7};

for (const key in obj) {
    console.log(key);
    // prints:
    // a
    // b
    // c
}
```

What if we passed an array after that `in` statement? Array is actually an object which uses sequential numbers as keys so it would work like so:

```
const array = [5, 6, 7]

for (const index in array) {
    console.log(index);
    // prints:
    // 0
    // 1
    // 2
}
```

## For ... of

Analogicaly to the `for ... in` loop we can `for ... of` to iterate through values just like `Object.values` does. Let's see na example:

```
const array = [5, 6, 7]

for (const value of array) {
    console.log(array);
    // prints:
    // 5
    // 6
    // 7
}
```

That's pretty much it 😅

## Which one should I use

For me it all comes down to the readability. I like to use `reduce` as an example. For sure we can use reduce to map any complicated array to a single object. But we could end up in a code that's hard to read and reason about. On the other hand we can use our for loops to split the logic and make it more readable. Sooo I think that it all depends on what is the most clear way for the team. If it's functional programming and writing code like:

```
Object.values(object)
    .map(o => mapObject(0))
    .forEach(mappedObject => doStuff(mappedObject));
```

or more classic one with a for loop:

```
for (const o of object) {
    const mappedObject = mapObject(o);
    doStuff(mappedObject);
}
```

There might be some differences regarding the performance, but I think they are not game changer in most of the cases. It's most important that the code works and developers (not only the one who's written it) understand it. Peace ✌