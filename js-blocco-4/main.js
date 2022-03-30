/* 
SNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

*/

const invitati = ['marco', 'claudio', 'francesco', 'giulio', 'alessandro', 'roberto', 'gianfranco'];
const utente = prompt('Inserisci il tuo nome');
let boolean = false;

for (let i = 0; i < invitati.length; i++) {

    const invitato = invitati[i];
    if (utente == invitato) {
        boolean = true;
    }

}

if (boolean) {
    console.log('puoi entrare');
} else {
    console.log('non puoi entrare');
}