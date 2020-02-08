/*function sum(a, b) {
    return a + b;
}

module.exports = sum;
*/
// module.export väärtus on see, mis antakse failist välja 


function sumThings(a, b) {
    const a1 = Number(a);
    const b1 = Number(b);
    if (Number.isNaN(a1) || Number.isNaN(b1)) {
        throw new Error("Invalid arguments");
    }
    return a1 + b1;
}
module.exports = sumThings;