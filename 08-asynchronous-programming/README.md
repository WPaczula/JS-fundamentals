<div align="center">
    <h1>Asynchronous programming</h1>
</div>

Async programming is an important JS concept as the whole language runs on a single thread only (https://www.youtube.com/watch?v=8aGhZQkoFbQ). 

## Old fashioned callback

Back in the old days to make something happend asynchronously, we should pass a callback which would be executed after some time. For example setTimeout works this way:

```
setTimeout(() => console.log('async hello'), 0) // call log as soon as you can asynchronously - without stopping the main thread
```

## Promises - the new way

...