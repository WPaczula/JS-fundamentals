import { 
    shouldMapSkiJumpersDataToTheirJumpLenght,
    shouldShowNamesOfJumpersWhichJumpedMoreThan100,
    shouldReturnMaximumLength,
    shouldReturnTrueIBecauseSomeoneHadMoreThan200Meters,
    shouldReturnFalseBecauseNotEveryoneHadMoreThan100Meters,
    shouldReturnNamesOfAllJumpersDevidedByASpace,
    shouldReturnSumOfJumpsLength,
    shouldCreateAStringWithTheSummary
} from '.'

test('shouldMapSkiJumpersDataToTheirJumpLenght', () => {
    expect(shouldMapSkiJumpersDataToTheirJumpLenght()).toEqual([90, 205, 200])
});

test('shouldShowNamesOfJumpersWhichJumpedMoreThan100', () => {
   expect(shouldShowNamesOfJumpersWhichJumpedMoreThan100()).toEqual(['JBuczek', 'KCieslar']) 
});

test('shouldReturnMaximumLength', () => {
    expect(shouldReturnMaximumLength()).toBe(205)
});

test('shouldReturnTrueIBecauseSomeoneHadMoreThan200Meters', () => {
    expect(shouldReturnTrueIBecauseSomeoneHadMoreThan200Meters()).toBe(true)
});

test('shouldReturnFalseBecauseNotEveryoneHadMoreThan100Meters', () => {
    expect(shouldReturnFalseBecauseNotEveryoneHadMoreThan100Meters()).toBe(false)
})

test('shouldReturnNamesOfAllJumpersDevidedByASpace', () => {
    expect(shouldReturnNamesOfAllJumpersDevidedByASpace()).toEqual('Baby JBuczek KCieslar')
})

test('shouldReturnSumOfJumpsLength', () => {
    expect(shouldReturnSumOfJumpsLength()).toBe(495)
})

test('shouldCreateAStringWithTheSummary', () => {
    expect(shouldCreateAStringWithTheSummary()).toEqual(`Baby: 90, JBuczek: 205, KCieslar: 200`)
})

