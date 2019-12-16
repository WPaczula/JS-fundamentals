export const defaultSecondAndThirdParameter = (a, b = 2, c = 5) => {
    // 🐨 make b and c parameters not required
    // b should be equal to 2
    // c should be equal to 5
    // if someone decides to pass just a like that defaultSecondAndThirdParameter(5)

    return a+b+c
}

export const shouldNotRequireToPassAllArguments = ({ a = 1, b = 2, c = 3 }) => {
    // 🐨 all parameters not required
    // a should be equal to 1
    // b should be equal to 2
    // c should be equal to 3
    // if someone decides to pass just a like that defaultSecondAndThirdParameter({ c: 5 })
    // notice that the sequence of parameters does not matter here

    return a+b+c
}

export const shouldNotRequirePassingEmptyObjectAndAllowDefaults = (options = {}) => {
    // 🐨 options have a, b and c parameters
    // a is equal to 1 by default
    // b is equal to 2 by default 
    // c is equal to 3 by default
    // it should be possible to pass nothing and it still should work
    const {
        a = 1,
        b = 2,
        c = 3
    } = options

    return a+b+c
}