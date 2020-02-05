// 🐨 use setTimeout and remember time is in ms
export const shouldCallGivenFunctionAfter1Second = func => setTimeout(func, 1000)

// 🐨 this function should return a Promise that will be resolved after 1 second from `then` call 
export const shouldCallGivenFunctionAfter1SecondWithAPromise = func => new Promise((resolve, reject) => {
    setTimeout(() => resolve(func()), 1000)
})

// 🐨 write an async function which will resolve a Promise returned by the one above in a blocking call
export const shouldBeAsyncWhichWillResolveThePromise = async func => {
    await shouldCallGivenFunctionAfter1SecondWithAPromise(func)
}

// 🐨 should resolve all promises and return the sum of the values it resolved
export const shouldResolveAllPromisesAndReturnSumOfTheValues = async (promise1, promise2, promise3) => {
    const promisesValues = await Promise.all([promise1, promise2, promise3])

    return promisesValues.reduce((sum, v) => sum + v, 0);
}

// 🐨 should resolve only the fastest promise and return the value it resolved
export const shouldResolveTheFastestPromise = async (promise1, promise2, promise3) => {
    const fastestPromiseValue = await Promise.race([promise1, promise2, promise3])

    return fastestPromiseValue
}
