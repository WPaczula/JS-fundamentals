import {
    itShouldAdd5AsAPropertyToTheObject,
    itShouldCreatePropertyNameWithSpecialKeywords,
    itShouldAddPropertyValuesFromProperties,
    itShouldFilterOutTestPropertyUsingSpreadOperator,
    itShouldCombineTwoObjects,
    itShouldGetNotKnownNumberOfArgumentsAndConsoleLogEachOfThem,
    itShouldConvertArrayToArgumentSequence,
} from '.'

describe('itShouldAdd5AsAPropertyToTheObject', () => {
    it('should return 5 if I check the property', () => {
        const propertyName = 'Hello koala 🐨'
        const object = {
            '😱': '😱',
            5: 5,
            true: true
        }

        const result = itShouldAdd5AsAPropertyToTheObject(object, propertyName)

        expect(result[propertyName]).toBe(5)
        expect(result).toBe(object)
    });
});

describe('itShouldCreatePropertyNameWithSpecialKeywords', () => {
    it('should return 5 if I check "Marry had a little koala" property.', () => {
        const object = {}

        const result = itShouldCreatePropertyNameWithSpecialKeywords(object)

        expect(result['Marry had a little koala']).toBe(5)
        expect(result).toBe(object)
    });
});

describe('itShouldAddPropertyValuesFromProperties', () => {
    it('should return 6 because of math 🙈', () => {
        const object = {
            true: 1,
            '🐨': 2,
            5: 3,
        }
        
        expect(itShouldAddPropertyValuesFromProperties(object)).toBe(6)
    })
});

describe('itShouldFilterOutTestPropertyUsingSpreadOperator', () => {
    it('should return test property', () => {
        const object = {
            5: 5,
            2: 2,
            test: '🐨',
        }

        expect(itShouldFilterOutTestPropertyUsingSpreadOperator(object)).toEqual(
            {
             5: 5,
             2: 2, 
            }
        )
    });
});

describe('itShouldCombineTwoObjects', () => {
    it('should do its job.', () => {
        const obj1 = { a: 1, b: 2 }
        const obj2 = { c: 3, d: 4 }

        expect(itShouldCombineTwoObjects(obj1, obj2)).toEqual({
            ...obj1,
            ...obj2,
        })
    });
});

describe('itShouldGetNotKnownNumberOfArgumentsAndConsoleLogEachOfThem', () => {
    it('should console log each argument', () => {
        const args = [1, 2, 3, 4, 5, 6, 7]
        console.log = jest.fn()

        itShouldGetNotKnownNumberOfArgumentsAndConsoleLogEachOfThem(...args)

        args.forEach(a => {
            expect(console.log).toHaveBeenCalledWith(a)
        })
    });
});

describe('itShouldConvertArrayToArgumentSequence', () => {
    it('should call function with sequence of arguments.', () => {
        const array = [1, 2, 3, 4, 5]
        const func = jest.fn()

        itShouldConvertArrayToArgumentSequence(func, array)

        expect(func).toHaveBeenCalledWith(...array)
    });
});




