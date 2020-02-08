const Sheep = require('./sheep');

const NAME1 = 'Dolly';
describe("Lammas class", () => {
    test(`create Lammas with name ${NAME1}, check that name is ${NAME1}`, () => {
        const l = new Sheep(NAME1);
        expect(l.getName()).toBe(NAME1);
    });
});