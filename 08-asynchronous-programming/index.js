// 🐨 use setTimeout and remember time is in ms
export const shouldCallGivenFunctionAfter1Second = func => null

// 🐨 this function should return a Promise that will be resolved after 1 second from `then` call 
export const shouldCallGivenFunctionAfter1SecondWithAPromise = func => null

// 🐨 write an async function which will resolve a Promise returned by the one above in a blocking call
export const shouldBeAsyncWhichWillResolveThePromise = func => null

// 🐨 should resolve all promises and return the sum of the values it resolved
export const shouldResolveAllPromisesAndReturnSumOfTheValues = (promise1, promise2, promise3) => null

// 🐨 should resolve only the fastest promise and return the value it resolved
export const shouldResolveTheFastestPromise = async (promise1, promise2, promise3) => null