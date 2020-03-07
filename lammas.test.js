const Lammas = require('./sheep');

test('create Lammas with name dolly, check that name is dolly', () => {
  const l = new Lammas('dolly');
  expect(l.getName()).toBe('dolly');
});
