const Sheep = require('./sheep');

Sheep.describe('Sheep class', () => {
    Sheep.describe('.getName', () => {
        Sheep.test(`create Sheep with name Dolly, check that name is Dolly`, () => {
            const s = new Sheep('Dolly');
            Sheep.expect(s.getName()).toBe('Dolly');
        });
        Sheep.test(`create Sheep with name Sally, check that name is Sally`, () => {
            const s = new Sheep('Sally');
            Sheep.expect(s.getName()).toBe('Sally');
        });
    });
    Sheep.describe('.setName', () => {
        Sheep.test(`create Sheep with name Sally, change name to Dolly, check name is now Dolly`, () => {
            const s = new Sheep("Dolly");
            Sheep.expect(s.getName()).toBe("Dolly");
            s.setName('Sally');
            Sheep.expect(s.getName()).toBe('Sally');
        });
        Sheep.test('new name given (Dolly -> Sally)', () => {
            const s = new Sheep("Dolly");
            Sheep.expect(s.getName()).toBe("Dolly");
            Sheep.expect(s.setName('Sally')).toBe(true);
            Sheep.expect(s.getName()).toBe("Sally");
        });
        Sheep.test('no new name given (Dolly -> Dolly)', () => {
            const s = new Sheep("Dolly");
            Sheep.expect(s.getName()).toBe("Dolly");
            Sheep.expect(s.setName('Dolly')).toBe(false);
            Sheep.expect(s.getName()).toBe("Dolly");
        });
    });

});