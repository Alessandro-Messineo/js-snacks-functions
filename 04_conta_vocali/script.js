/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const contaVocali = (word) =>{

    // dichiarazione contatore per le vocali
    let count =0;
    
    // ciclo per scorrere le lettere della parola
    for(let i=0; i< word.length; i++){
        
        // condizion per verificare che la lettera corrisponda a una vocale
        if(word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u"){

            // aggiornamento contatore per ogni vocale trovata
            count++;
        }
    }
    
return count;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(contaVocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)