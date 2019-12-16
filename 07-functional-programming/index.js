const jumpers = [
    { name: 'Baby', jumpLength: 90 },
    { name: 'JBuczek', jumpLength: 205 },
    { name: 'KCieslar', jumpLength: 200 },
]

// 🐨 use map
export const shouldMapSkiJumpersDataToTheirJumpLenght = () => jumpers

// 🐨 use filter and map
export const shouldShowNamesOfJumpersWhichJumpedMoreThan100 = () => jumpers

// 🐨 use map and reduce
export const shouldReturnMaximumLength = () => jumpers

// 🐨 use some
export const shouldReturnTrueIBecauseSomeoneHadMoreThan200Meters = () => jumpers

// 🐨 use every
export const shouldReturnFalseBecauseNotEveryoneHadMoreThan100Meters = () => jumpers