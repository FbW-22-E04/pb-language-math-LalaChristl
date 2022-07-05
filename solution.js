// 1. Minimum & Maximum

console.log('1.a', Math.min(-1, 0, 1, 2, 3, 4));

console.log('1.b', Math.max(-1, 0, 1, 2, 3, 4));

// 2. Rounding

// Rounding 2.1

console.log('2.a.a', Math.ceil(3321.32321));
console.log('2.a.b', Math.ceil(326.76));
console.log('2.a.c', Math.ceil(76788.7));
console.log('2.a.d', Math.ceil(-9.78));
console.log('2.a.e', Math.ceil(43.342));

// Rounding 2.2

console.log('2.b.a', Math.floor(3321.32321));
console.log('2.b.b', Math.floor(326.76));
console.log('2.b.c', Math.floor(76788.7));
console.log('2.b.d', Math.floor(-9.78));
console.log('2.b.e', Math.floor(28.329));

// 3. Dice Roll

console.log('3.', Math.ceil(Math.random() * 5))