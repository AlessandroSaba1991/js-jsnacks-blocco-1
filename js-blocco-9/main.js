/* 
Calcola la somma e la media dei primi 10 numeri.
*/
let somma = 0;
const n = 10;

for (let i = 0; i < n; i++) {
    somma += i;
}
console.log(somma);

const media = somma / n;

console.log(media);