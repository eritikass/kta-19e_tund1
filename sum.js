function sum(a, b) {
  const a1 = Number(a);
  const b1 = Number(b);
  if (Number.isNaN(a1) || Number.isNaN(b1)) {
    throw new Error('Invalid arguments');
  }
  return Number(a) + Number(b);
}
module.exports = sum;
