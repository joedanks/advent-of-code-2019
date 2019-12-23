import dayTwo from './2019-2'

describe.skip('Day Two', () => {
    describe('Part One', () => {
        it('[1,0,0,0,99] becomes [2,0,0,0,99]', () => {
            expect(dayTwo.run([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99])
        })
        it('[2,3,0,3,99] becomes [2,3,0,6,99]', () => {
            expect(dayTwo.run([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99])
        })
        it('[2,4,4,5,99,0] becomes [2,4,4,5,99,9801]', () => {
            expect(dayTwo.run([2, 4, 4, 5, 99, 0]))
                .toEqual([2, 4, 4, 5, 99, 9801])
        })
        it('[1,1,1,4,99,5,6,0,99] becomes [30,1,1,4,2,5,6,0,99]', () => {
            expect(dayTwo.run([1, 1, 1, 4, 99, 5, 6, 0, 99]))
                .toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99])
        })
        xit('should run partOne', () => {
            console.log(dayTwo.partOne());
        })
    })
    describe('Part Two', () => {
        it('should run partTwo', () => {
            console.log(dayTwo.partTwo())
        })
    })
})