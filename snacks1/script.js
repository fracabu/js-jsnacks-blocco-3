/*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array fino
a quando la somma degli elementi è minore di 50.
*/

//creo array vuoto

const listaNumeri = [];
let sommaNumeri = 0;

while( sommaNumeri < 50){
    let number = parseInt(prompt("inserisci un numero"));
    sommaNumeri= sommaNumeri + number; 
    console.log(sommaNumeri)
}



// creo prompt per chiedere all'utente di inserire un numero DA INSERIRE NEL CICLO

//let number = prompt("inserisci un numero");



//continuo a chiedere numeri all'utente



//inserisco numeri nell'array fino a quando la somma degli elementi è minore di 50