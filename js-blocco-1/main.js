/* SNACK 1 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
 */

//chiedo il primo numero
const numero_1 = parseInt(prompt('Inserisci un numero'));

//chiedo il secondo numero
const numero_2 = parseInt(prompt('Inserisci un\'altro numero'));

//verifico chi è piu grande
if (numero_1 > numero_2) {
    console.log(numero_1);
} else {
    console.log(numero_2);
}