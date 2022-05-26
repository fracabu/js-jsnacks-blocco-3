/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
Ogni volta che ne crei uno, stampalo.
*/

//creo prompt dove utente inserisce un numero chiamato N

const numeroUtente = parseInt(prompt("innerisci un numero"));
const arrayGenerati = [];
//Generare N array formati da 10 numeri casuali da 1 a 100

while (arrayGenerati.length < numeroUtente){
    const nuovoArray=[];
    
while (nuovoArray.lenght <10){
    const numeroUtente = Math.floor(Math.random() * 100) +1;

    if(!nuovoArray.includes (numeroCasuale)){
        nuovoArray.push (numeroUtente);
        
    }
}
arrayGenerati.push(nuovoArray);

}



//stampo array