const Lammas = require('./lammas'); // otsib failist nimega lammas märget module.exports
// module.export väärtus on see, mis antakse failist välja

test('create Lammas with name dolly, check that name is dolly', () => {
    const l = new Lammas('dolly');
    expect(l.getName()).toBe('dolly');
});