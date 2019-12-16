import {
    shouldUseVariablesInsideTheString
} from '.'

describe('shouldUseVariablesInsideTheString', () => {
    it('should do its job', () => {
        expect(shouldUseVariablesInsideTheString(1, 2)).toEqual(`The value of a is 1 and the value of b is 1`)
    });
});