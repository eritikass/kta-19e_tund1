/* eslint-disable no-undef */
const Sheep = require('./sheep');

const NAME1 = 'Dolly';
const NAME2 = 'Sally';

describe('Sheep class', () => {
  test(`create Sheep with name ${NAME1}, check that name is ${NAME1}`, () => {
    const s = new Sheep(NAME1);
    expect(s.getName()).toBe(NAME1);
  });
  test(`create Sheep with name ${NAME2}, check that name is ${NAME2}`, () => {
    const s = new Sheep(NAME2);
    expect(s.getName()).toBe(NAME2);
  });
  test(`create Sheep with name ${NAME3}, check that name is ${NAME3}`, () => {
    const s = new Sheep('Molly');
    expect(s.getName()).toBe('Molly');
    s.setName('Sally');
    expect(s.getName()).toBe('Sally');
  });
});
