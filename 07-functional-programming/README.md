<div align="center">
    <h1>Functional programming</h1>
</div>

Functional programming is an approach, to use functions to manipulate the data in a pure way (without any side effects like API calls, you pass input and get expected result). This approach is mostly used to manipulate arrays/objects. It can be useful when you are working with arrays of nodes in cypress. The functions that are really useful are:

- [Filter](#filter)
- [Map](#map)
- [Reduce](#reduce)
- [Every](#every)
- [Some](#some)
- [Getting keys/values](#getting-keys/values)
- [Examples](#examples)

## Filter

Filter is a function which will leave only those elements, which will pass the test described by a predicate (function given as the argument). If you know linq/sql it's like `where`. That was hard to explain, but I think an example should be simpler:

```
const array = [1, 2, -5, 0, 12]

const notNegative = array.filter(element => element > 0) // [1, 2, 12]
```

If we need the index in your predicate function, we can get it as the second argument of the predicate:

```
filter((element, index) => ...)
```

## Map

Map will transform every element into the one returned by function given as an argument. This one is kinda like `select` from linq. Let's jump straight into an example:

```
const array = [1, 2, 3, 4]

const mappedArray = array.map(element => 2*element) // [2, 4, 6, 8]
```

Like with the filter, you can get element's index as the second argument.

## Reduce

This one is not so straight forward, but is useful nevertheless. It allows us to reduce the array to a single thing. The second one is the initial value which will be transformed into the final result. The second is a function which takes current value and element and returns the transformed result. This one is like `count`, `sum` etc from SQL. Let's go into an example, because it will be easier to get that way:

```
const array = [1, 2, 3, 4]

const sum = array.reduce((currentSum, element) => currentSum + element, 0) // 10
```

## Every

Every is a function that will check if every element passes some test and return a boolean value. This one is like `all` from linq. Example should be enough here 😅:

```
const array = [0, 0, 0, 0, 1, 0]

const areAllZero = array.every(element => element === 0) // false
```

## Some

Returns a boolean value if any of the elements in the array passes the test. It's like `any` from linq. There's an example:

```
const array = [0, 0, 0, 0, 1, 0]

const anyNotZero = array.some(element => element !== 0) // true
```

# Getting keys/values

JS allows getting all keys, values or both of an object and map it into an array. The functions which may help are:

- `Object.keys(object)` - gets all the keys from an object and create an array,
- `Object.values(object)` - gets all the values from an object and create an array,
- `Object.entries(object)` - maps object to an array of key, value arrays (this one is kinda tricky).

I guess examples will help here:
```
    const obj = { a: 5, b: 6, c: 7}
    const keys = Object.keys(obj) // ['a', 'b', 'c']
    const values = Object.values(obj) // [5, 6, 7]
    const entries = Object.entries(obj) // [['a', 5], ['b', 6], ['c', 7]]
``` 

## Examples

Jump straight to them bro (or sis) in `index.js`

