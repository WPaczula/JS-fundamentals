<div align="center">
    <h1>Asynchronous programming</h1>
</div>

Async programming is an important JS concept as the whole language runs on a single thread only (https://www.youtube.com/watch?v=8aGhZQkoFbQ). 

<h2>Table of contents</h2>

- [Old fashioned callback](#old-fashioned-callback)
- [Promises - the new way](#promises---the-new-way)
  - [Many promises to be handled](#many-promises-to-be-handled)
- [Async](#async)
  - [Cypress sidenote](#cypress-sidenote)

## Old fashioned callback

Back in the old days to make something happend asynchronously, we should pass a callback which would be executed after some time. For example setTimeout works this way:

```
setTimeout(() => console.log('async hello'), 0) // call log as soon as you can asynchronously - without stopping the main thread
```

## Promises - the new way

I think of promises like a promise, that something will be there (but it can fail if something goes wrong 😱). To create a promise yourself you can specify what value will be resolved after some asynchronous operation and what should be returned if the JS gods reject the promise. The example is below:

```
const promise = new Promise((resolve, reject) => {
    if (somethingTerriblyWrong) {
        reject('cant do it, sorry')
    }
    
    setTimeout(() => {
        resolve('we did it')
    }, 500)
})
```

As we can see this promise will resolve in 500 miliseconds (the second parameter of setTimeout) or immiedatelly if something is terribly wrong. If that promise resolves what will happen then? (that sentence was hard to write 😂). We will specify it in `then` function. It takes a callback as an argument which takes the resolved value and does something with it. If the promise rejects we can `catch` that and handle the error:

```
promise
    .then(message => {
        console.log(message) // we did it
    })
    .catch(message => {
        console.log(message) // cant do it, sorry
    })
```

### Many promises to be handled

In this case we can use two utility functions which will help us with multiple promises. First one is `Promise.all`. It takes an array of promises and in `then` it returns an array of resolved promises after all of them resolve. If any of those will fail it can be caught in `catch` part:

```
const promise1 = new Promise(res => res(1))
const promise2 = new Promise(res => res(2))
const promise3 = new Promise(res => res(3))

Promise.all([promise1, promise2, promise3])
    .then(([res1, res2, res3]) => {
        // hurray every promise resolved
    })
    .catch(error => {
        // single promise failed
    })
```

The other one is `Promise.race`. It will give access to the first resolved promise in `then` function. If any of them will reject it can be accessed in `catch`:

```
const promise1 = new Promise(res => setTimeout(() => res(1), 500) // will resolve after 500 miliseconds
const promise2 = new Promise(res => setTimeout(() => res(2), 100) // will resolve after 100 miliseconds
const promise3 = new Promise((_, rej) => setTimeout(() => rej(3), 150) // will reject after 150 miliseconds

Promise.race([promise1, promise2, promise3])
    .then(value => {
        console.log(value) // 2
    })
    .catch(value => {
        console.log(value) // will not be called, it would if promise3 would be rejected after 50 miliseconds
    })
```

## Async

Writing Promises can be painfull. If we want to run them asynchronously one after another we need to resolve them in previous promise's `then`. It leads to situations like this:

```
createPromise1().then(value1 => {
    createPromise2(value1).then(value2 => {
        createPromise3(value2).then(value3 => {
            ...
        })
    })
})
```

It's known as the pyramid of death 💀. We can change that code to more "synchronous-looking". To do it we need `async` and `await`. `async` marks function as asynchronous so JS knows that something will be going on. `await` on the other hand will cause promise to resolve and return the value. If the promise rejects, it can be caught just like an error:

```
async () => {
    const promise = new Promise((res, rej) => res(5))

    try {
        const value = await promise
    } catch (error) {
        // it will be called if promise rejects
    }
}
```

### Cypress sidenote

Cypress has its own implementation of Promises called Chainables. They can be changed to Promises using `promisify` although it can cause Cypress'es errors as it takes care of "resolving" own commands in a different manner. This framework takes care of returning the values, so there is no need to return the promise itself from the command.  