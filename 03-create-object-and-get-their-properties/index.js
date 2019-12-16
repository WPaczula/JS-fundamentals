export const itShouldAdd5AsAPropertyToTheObject = (object, propertyName) => {
    // 🐨 If the propertyName would be 'test' I expect
    // to get 5 when I invoke object.test

    return object
}

export const itShouldCreatePropertyNameWithSpecialKeywords = object => {
    // 🐨 I'd like to save 5 if I check "Marry had a little koala" property

    return object
}

export const itShouldAddPropertyValuesFromProperties = object => {
    // 🐨 object has properties within true (the value), '🐨' and 5 (the value) keys
    // return the sum

    return '❌'
}

export const itShouldFilterOutTestPropertyUsingSpreadOperator = object => {
    // 🐨 decompose object to get test property and the rest of them in a separate object
    // using spread operator. Return the rest

    return '❌'
}

export const itShouldCombineTwoObjects = (object1, object2) => {
    // 🐨 combine those two using spread operator and return
    // the result

    return '❌'
}

export const itShouldGetNotKnownNumberOfArgumentsAndConsoleLogEachOfThem = (/* get arguments here */...args) => {
    // 🐨 this function will get unknown number of parameters
    // console log each of them
    // you can use what ever for loop
    // for example like that:
    //
    // for(let i = 0; i < NUMBER_OF_ARGUMENTS; i++) {
    //    console.log(arguments[i])
    //}
}

export const itShouldConvertArrayToArgumentSequence = (func, array) => {
    // 🐨 you will recieve an array for example [1, 2, 3]
    // and I want you to fire given func function like func(1, 2, 3)

    func('❌')
}