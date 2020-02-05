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

// 🐨 Object.keys/values/entries are the best at dictionaries so lets change how the jumpers data looks like:
const jumpersDictionary = {
    Baby: 90,
    JBuczek: 205,
    KCieslar: 200,
}

export const shouldReturnNamesOfAllJumpersDevidedByASpace = () => jumpersDictionary

export const shouldReturnSumOfJumpsLength = () => jumpersDictionary

// 🐨 the summary should be like so: Baby: 90, JBuczek: 205, KCieslar: 200
export const shouldCreateAStringWithTheSummary = () => jumpersDictionary 
