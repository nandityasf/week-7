// persegi= keliling:4xs, luas:sxs 
// s=8
const calc = require('./rumussoal1')

console.log("keliling persegi:",calc.addition(8, 8, 8, 8))
console.log("luas persegi:",calc.multiply(8, 8))

// p.panjang= keliling:semua sisi ditambah, luas:pxl
// p=10 l=7
console.log("keliling p.panjang:",calc.addition(10, 7, 10, 7))
console.log("luas p.panjang:",calc.multiply(10, 7))
