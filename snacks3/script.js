/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

let numero = 0;
let sommaNumeri = 0;

// prompt per chiedere per 5 volte all'utente di inserire un numero
while( sommaNumeri < 5) {
let numero = parseInt(prompt("inserisci un numero"));
sommaNumeri = sommaNumeri + numero;
console.log(sommaNumeri);
}
//stampare la somma dei numeri inseriti