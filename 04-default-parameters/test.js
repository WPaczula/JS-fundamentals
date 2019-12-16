import {
    defaultSecondAndThirdParameter,
    shouldNotRequireToPassAllArguments,
    shouldNotRequirePassingEmptyObjectAndAllowDefaults,
} from '.'

describe('defaultSecondAndThirdParameter', () => {
    it('should not require to pass second and third parameters - should be default to 2 and 5', () => {
        const result = defaultSecondAndThirdParameter(5)

        expect(result).toBe(5+2+5)
    });
});

describe('shouldNotRequireToPassAllArguments', () => {
    it('should not require to pass any parameter', () => {
        expect(shouldNotRequireToPassAllArguments({})).toBe(6)
    });

    it('should allow just passing a', () => {
        expect(shouldNotRequireToPassAllArguments({ a: 0 })).toBe(5)
    });
    
    it('should allow just passing b', () => {
        expect(shouldNotRequireToPassAllArguments({ b: 0 })).toBe(4)
    });

    it('should allow just passing c', () => {
        expect(shouldNotRequireToPassAllArguments({ c: 0 })).toBe(3)
    });
});

describe('shouldNotRequirePassingEmptyObjectAndAllowDefaults', () => {
    it('should not require to pass any parameter', () => {
        expect(shouldNotRequirePassingEmptyObjectAndAllowDefaults()).toBe(6)
    });

    it('should allow just passing a', () => {
        expect(shouldNotRequirePassingEmptyObjectAndAllowDefaults({ a: 0 })).toBe(5)
    });
    
    it('should allow just passing b', () => {
        expect(shouldNotRequirePassingEmptyObjectAndAllowDefaults({ b: 0 })).toBe(4)
    });

    it('should allow just passing c', () => {
        expect(shouldNotRequirePassingEmptyObjectAndAllowDefaults({ c: 0 })).toBe(3)
    });
});