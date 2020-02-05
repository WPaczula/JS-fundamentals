const jumpers = [
    { name: 'Baby', jumpLength: 90 },
    { name: 'JBuczek', jumpLength: 205 },
    { name: 'KCieslar', jumpLength: 200 },
]

export const shouldMapSkiJumpersDataToTheirJumpLenght = () => jumpers.map(j => j.jumpLength)

export const shouldShowNamesOfJumpersWhichJumpedMoreThan100 = () => jumpers.filter(j => j.jumpLength > 100).map(j => j.name)

export const shouldReturnMaximumLength = () => jumpers.map(j => j.jumpLength).reduce((max, l) => {
    return l > max ? l : max
}, 0)

export const shouldReturnTrueIBecauseSomeoneHadMoreThan200Meters = () => jumpers.some(j => j.jumpLength > 200)

export const shouldReturnFalseBecauseNotEveryoneHadMoreThan100Meters = () => jumpers.every(j => j.jumpLength > 100)

const jumpersDictionary = {
    Baby: 90,
    JBuczek: 205,
    KCieslar: 200,
}

export const shouldReturnNamesOfAllJumpersDevidedByASpace = () => Object.keys(jumpersDictionary).join(' ')

export const shouldReturnSumOfJumpsLength = () => Object.values(jumpersDictionary).reduce((sum, jump) => sum + jump, 0);

export const shouldCreateAStringWithTheSummary = () => Object.entries(jumpersDictionary)
    .map(([name, length]) => `${name}: ${length}`) 
    .join(', ') 