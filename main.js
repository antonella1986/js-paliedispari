/* Palidroma */
// Chiedere all’utente di inserire una parola
const askWord = prompt("Inserisci una parola")

// Creare una funzione per capire se la parola inserita è palindroma
function askWord(palindrome) {
    for (let i = 0; palindrome.lenght; i++) {
        if (palindrome[i] = palindrome.CharAt(palindrome.lenght) -1) {
            return true
        } else {
            return false
        }
    }
}

askWord(palindrome)

/* Pari e Dispari */
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// chiedo all'utente se sceglie pari o dispari
const askEvenOrOdd = prompt("Scegli pari o dispari");
console.log(askEvenOrOdd);
// chiedo all'utente di inserire un numero da 1 a 5
let randomNumberPlayer = prompt("Inserisci un numero da 1 a 5");
console.log(randomNumberPlayer);

// genero un numero random da 1 a 5 per il PC con una funzione
function askNumberPC(){
    let randomNumberPC = (Math.floor(Math.random() * 5) + 1);
    console.log(randomNumberPC);
}

// sommo i due numeri
function sum(randomNumberPlayer, randomNumberPC) {
    const result = randomNumberPlayer + randomNumberPC;
    return result
}

// verifico se la somma è pari o dispari con una funzione e dichiaro il vincitore
function isEvenOrOdd(sum) {
    if (sum % 2 === 0) {
        return true
    } else {
        return false
    }
}

isEvenOrOdd(sum)

