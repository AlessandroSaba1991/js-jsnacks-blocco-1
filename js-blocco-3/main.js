/* 
SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/
let somma, numero_utente
somma = 0

for (let i = 0; i < 10; i++) {
    numero_utente = parseInt(prompt('Inserisci un numero'));
    somma = parseInt(numero_utente + somma)
}
console.log(somma);