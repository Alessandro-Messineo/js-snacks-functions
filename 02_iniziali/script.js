/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const iniziali = (names) => {
    
    // dichiarazione nuovo array
    let arrIniziali=[];

    // ciclo per scorrere l'array names
    for(let i=0; i< names.length; i++){
        // prende il nome corrente e lo salva
        let saveNames = names[i];
        // prende la prima lettere del nome e lo salva 
        let saveIniziali = saveNames[0];
        // aggiunge la lettera nell'array
        arrIniziali[i] = saveIniziali;
    }
    return arrIniziali;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(iniziali(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]