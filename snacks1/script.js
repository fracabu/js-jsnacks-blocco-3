/*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array fino
a quando la somma degli elementi è minore di 50.
*/

//creo array vuoto

let arrayVuoto = [];



// creo prompt per chiedere all'utente di inserire un numero

let number = prompt("inserisci un numero");



//continuo a chiedere numeri all'utente

for (let i = 0; i < number.length; i++) {
    
    console.log(number[i]);
  }

//inserisco numeri nell'array fino a quando la somma degli elementi è minore di 50