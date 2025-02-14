alertHello()

function alertHello() {
    console.log("hello");    
}


function logCurrentTime() {
    // create a variable to hold the current time

}

function sum(num1, num2) {
    const risultato = num1 + num2;
    return risultato
    // tutto quello che sta dopo return non viene eseguito
}

sum(20, 30) // questi sostituiscono num1 e num2 dichiarati sopra


// pari o dispari: scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari


/* const numberIdentity = Number(prompt("Inserisci un numero")) */

function numberIdentity(numb) {
    if (numb % 2 === 0) {
        return true
    } else {
        return false
    }
}

const thisNumber = 20
numberIdentity(thisNumber)

if (numberIdentity(thisNumber)) {
    console.log("Questo numero è pari");
} else {
    console.log("Questo numero è dispari");
}

/* Palidroma */
// Chiedere all’utente di inserire una parola
const askWord = prompt("Inserisci una parola")

// Creare una funzione per capire se la parola inserita è palindroma

/* Pari e Dispari */
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.



/* Domande da farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo? */

