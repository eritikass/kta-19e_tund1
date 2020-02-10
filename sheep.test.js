const Sheep = require('./sheep');
/* eslint-env jest  */
describe('Sheep class', () => {
    describe('.getName', () => {
        test(`create Sheep with name Dolly, check that name is Dolly`, () => {
            const s = new Sheep('Dolly');
            expect(s.getName()).toBe('Dolly');
        });
        test(`create Sheep with name Sally, check that name is Sally`, () => {
            const s = new Sheep('Sally');
            expect(s.getName()).toBe('Sally');
        });
    });
    describe('.setName', () => {
        test(`create Sheep with name Sally, change name to Dolly, check name is now Dolly`, () => {
            const s = new Sheep("Dolly");
            expect(s.getName()).toBe("Dolly");
            s.setName('Sally');
            expect(s.getName()).toBe('Sally');
        });
        test('new name given (Dolly -> Sally)', () => {
            const s = new Sheep("Dolly");
            expect(s.getName()).toBe("Dolly");
            expect(s.setName('Sally')).toBe(true);
            expect(s.getName()).toBe("Sally");
        });
        test('no new name given (Dolly -> Dolly)', () => {
            const s = new Sheep("Dolly");
            expect(s.getName()).toBe("Dolly");
            expect(s.setName('Dolly')).toBe(false);
            expect(s.getName()).toBe("Dolly");
        });
    });

});