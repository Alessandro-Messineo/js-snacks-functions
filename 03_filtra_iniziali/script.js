/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const iniziali = (names, lettera) => {

    // dichiarazione nuovo array
    let arrIniziali = [];

    // ciclo per scorrere l'array names
    for (let i = 0; i < names.length; i++) {

         // prende il nome corrente e lo salva
        let saveNames = names[i];

        // condizione per verificare che la prima lettera del nome sia uguale a quella inserita nella invocazione della funzione
        if (saveNames[0] === lettera) {

            // aggiunge il nome alla fine nell'array
            arrIniziali.push(saveNames);
        }
    }
    return arrIniziali;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(iniziali(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]