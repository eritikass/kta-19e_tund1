const Sheep = require('./sheep');

const l = new Sheep('dolly');

console.log('sheep name is "%s"!', l.getName());
console.log('name=dolly', l.getName() === 'dolly');

l.setName('shawn');
console.log('sheep name is now "%s"!', l.getName());
console.log('name=shawn', l.getName() === 'shawn');

l.test('create sheep with name dolly, check that name is dolly', () => {

})