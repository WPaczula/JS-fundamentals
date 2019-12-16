import { 
    shouldMapSkiJumpersDataToTheirJumpLenght,
    shouldShowNamesOfJumpersWhichJumpedMoreThan100,
    shouldReturnMaximumLength,
    shouldReturnTrueIBecauseSomeoneHadMoreThan200Meters,
    shouldReturnFalseBecauseNotEveryoneHadMoreThan100Meters
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
