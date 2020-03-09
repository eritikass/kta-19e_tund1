const Sheep = require('./sheep.js');
// console.log('require-lammas', require('./lammas'))

const a = 8;
let b = 1;
// eslint-disable-next-line
const c = 2;

function sum(param1, param2 = 5) {
  if (Number.isNaN(Number(param1))) {
    throw new Error(`${param1} is not a number`);
  }
  return param1 + param2;
}
console.log('sum(1,10)=', sum(1, 10));
console.log('sum(1)=', sum(1)); // default vaartuse kasutus

const sum2 = (param1, param2 = 5) => param1 + param2;
console.log('sum2(1,10)=', sum2(1, 10));
console.log('sum2(1)=', sum2(1)); // default vaartuse kasutus

b = 3363;

console.log({ a, b });
if (a > b) {
  console.log('a on suurem kui b');
} else {
  console.log('b on suurem voi vordne kui c');
}

for (let i = 0; i < 10; i += 1) {
  console.log('aaa', i);
}

const object = {
  param1: 124,
  param3: 'cat',
  x: {
    a: 243,
    basg: 43464,
    c: new Date(),
  },
  func_sum: (param1, param2 = 5) => param1 + param2,
  func2: sum,
};
console.log('object', object);
console.log('object.func_sum(1,5)', object.func_sum(1, 5));
delete object.param3;
object.kala = 124;
console.log('object:2', object);

const { param1, func2 } = object;
console.log('param1', param1);
console.log('func2', func2);


const l = new Sheep('shawn');
console.log('lammas name = ', l.getName());
l.setName('dolly');
console.log('lammas name = ', l.getName());
console.log('lammas', l);


const arr = [1, 3, [1, 2], 'test', new Date(), sum];
arr.push('ADDED');
console.log('arr', arr);
// eslint-disable-next-line
for (const k in arr) {
  console.log('k', k, arr[k]);
}

arr.forEach((value, index) => {
  console.log('---', value, index);
});

// string + number
try {
  console.log('sum("aaa", 5) = ', sum('aaa', 5));
} catch (e) {
  console.error('string+number error -> ', e.message);
}
