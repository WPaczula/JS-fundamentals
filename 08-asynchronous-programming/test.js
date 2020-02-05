import {
    shouldCallGivenFunctionAfter1Second,
    shouldCallGivenFunctionAfter1SecondWithAPromise,
    shouldBeAsyncWhichWillResolveThePromise,
    shouldResolveAllPromisesAndReturnSumOfTheValues,
    shouldResolveTheFastestPromise,
} from '.'

jest.useFakeTimers();

test('shouldCallGivenFunctionAfter1Second', () => {
    const func = jest.fn();

    shouldCallGivenFunctionAfter1Second(func);
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalled();
});

test('shouldCallGivenFunctionAfter1SecondWithAPromise', () => {
    const func = jest.fn();

    shouldCallGivenFunctionAfter1SecondWithAPromise(func)
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalled();
})

test('shouldBeAsyncWhichWillResolveThePromise', () => {
    const func = jest.fn();

    shouldBeAsyncWhichWillResolveThePromise(func);
    expect(func).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);

    expect(func).toHaveBeenCalled();
})

test('shouldResolveAllPromisesAndReturnSumOfTheValues', async () => {
    const promises = [1, 2, 3].map(v => new Promise(res => res(v)));

    const sum = await shouldResolveAllPromisesAndReturnSumOfTheValues(...promises);

    expect(sum).toBe(6)
})

test('shouldResolveTheFastestPromise', async () => {
    const promise1 = new Promise(res => setTimeout(res, 2, 2));
    const promise2 = new Promise(res => res(1));
    const promise3 = new Promise(res => setTimeout(res, 3, 3));

    const fastestValue = await shouldResolveTheFastestPromise(promise1, promise2, promise3);
    jest.runAllTimers()

    expect(fastestValue).toBe(1);
})