/* SNACK 1 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
 */

//chiedo il primo numero
const numero_1 = parseInt(prompt('Inserisci un numero'));

if (isNaN(numero_1)) {
    alert('Puoi inserire solo numeri')
}

//chiedo il secondo numero
const numero_2 = parseInt(prompt('Inserisci un\'altro numero'));

if (isNaN(numero_2)) {
    alert('Puoi inserire solo numeri')
}

//verifico chi è piu grande
if (numero_1 > numero_2) {
    console.log(numero_1);
} else if (numero_1 == numero_2) {
    console.log('sono uguali');
} else {
    console.log(numero_2);
}