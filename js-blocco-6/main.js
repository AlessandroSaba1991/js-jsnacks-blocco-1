/* 
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.
*/

const num_utente = parseInt(prompt('inserisci un numero'));

for (let i = 1; i <= num_utente; i++) {
    console.log(Math.pow(i, 3));
}