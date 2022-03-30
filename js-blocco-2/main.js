/* 
SNACK 2 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/

const parola_1 = prompt('Inserisci una parola');

const parola_2 = prompt('Inserisci un\'altra parola');


if (parola_1.length > parola_2.length) {
    console.log(parola_2, parola_1);
} else if (parola_1.length == parola_2.length) {
    console.log('le parole sono uguali');
} else {
    console.log(parola_1, parola_2);
}