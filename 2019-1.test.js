import dayOne from './2019-1'

describe('Day 1', () => {
    it('12 should yield 2', () => {
        expect(dayOne.run(12)).toBe(2)
    });

    it('14 should yield 2', () => {
        expect(dayOne.run(14)).toBe(2)
    })

    it('1969 should yield 654', () => {
        expect(dayOne.run(1969)).toBe(654)
    })

    it('100756 should yield 33583', () => {
        expect(dayOne.run(100756)).toBe(33583)
    })

    // it('should run partOne', () => {
    //     console.log(dayOne.partOne());
    // })

    describe('part two', () => {
        it('1969 should yield 966', () => {
            expect(dayOne.reduce(1969)).toBe(966)
        })

        it('100756 should yield 50346', () => {
            expect(dayOne.reduce(100756)).toBe(50346)
        })

        it('should run partTwo', () => {
            console.log(dayOne.partTwo())
        })
    })
});