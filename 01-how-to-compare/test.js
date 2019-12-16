import {
    getTestPropertyIfItsDefined,
    itShouldReturnTruthynessOfGivenArgument,
    returnSuccessIfArgumentIsANumber,
    shouldCallConsoleLogBeforeReturningObject,
} from '.'

describe('getTestPropertyIfItsDefined', () => {
    it('should return test property if object is defined.', () => {
        const object = { test: '🐨' }

        const result = getTestPropertyIfItsDefined(object)

        expect(result).toBe(object.test)
    });

    it('should return undefined if object is undefined.', () => {
        const object = undefined

        const result = getTestPropertyIfItsDefined(object)

        expect(result).toBe(undefined)
    });

    it('should return undefined if property is undefined.', () => {
        const object = {}

        const result = getTestPropertyIfItsDefined(object)

        expect(result).toBe(undefined)
    });
});

describe('itShouldReturnTruthynessOfGivenArgument', () => {
    it('should return true for numbers, not empty strings, objects and booleans', () => {
        const test = [-69, '🐨', {}, true]

        test.forEach(t => {
            expect(itShouldReturnTruthynessOfGivenArgument(t)).toBe(true)
        })
    });

    it('should return true for 0, empty strings, null, false and undefined', () => {
        const test = [0, '', null, false, undefined]

        test.forEach(t => {
            expect(itShouldReturnTruthynessOfGivenArgument(t)).toBe(false)
        })
    });
})

describe('returnSuccessIfArgumentIsANumber', () => {
    it('should return success for zero.', () => {
        const argument = 0

        expect(returnSuccessIfArgumentIsANumber(argument)).toBe('success')
    });

    it('should return success for positive numbers.', () => {
        const argument = 100

        expect(returnSuccessIfArgumentIsANumber(argument)).toBe('success')
    });

    it('should return success for negative numbers', () => {
        const argument = -0.0125

        expect(returnSuccessIfArgumentIsANumber(argument)).toBe('success')
    });
});

describe('shouldCallConsoleLogBeforeReturningObject', () => {
    it('should call the console with the object', () => {
        console.log = jest.fn()
        const object = {}

        expect(shouldCallConsoleLogBeforeReturningObject(object)).toBe(object)
        expect(console.log).toHaveBeenCalledWith(object)
    });
});

