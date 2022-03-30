/* 
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

const num_utente = prompt('Insersci un numero di 4 cifre');

let somma = 0;

for (let i = 0; i < num_utente.length; i++) {
    let num_part = num_utente.toString()
    num_part = num_part.charAt(i)
    somma += parseInt(num_part)
}

console.log(somma);