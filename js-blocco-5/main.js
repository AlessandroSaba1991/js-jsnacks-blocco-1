/* 
SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

*/


const dispari = [];

for (let i = 0; i < 6; i++) {
    const num_utente = parseInt(prompt('Inserisci un numero'));
    if (num_utente % 2 != 0) {
        dispari.push(num_utente);
    }
}
console.log(dispari);