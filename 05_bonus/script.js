/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.
const saluto = (name) => {

    const ora = new Date().getHours();

    if (ora < 13) {
        return "Buongiorno " + name;
    } else if (ora < 17) {
        return "Buon pomeriggio " + name;
    } else {
        return "Buonasera " + name;
    }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(saluto(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.