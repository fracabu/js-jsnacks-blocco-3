/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. 
Interrompi il ciclo appena il nome è stato trovato.
*/


//Creare array con nomi invitati
//Prompt per chiedere all'utente il suo nome
//se presente nell'elenco = partecipa
//altrimenti no (alert "non puoi partecipare alla festa")
//interrompere ciclo appena il nome viene trovato

let listaNomiInvitati = ["Luca" , "Marius", "Erica", "Silvia", "Matteo", "Stefano"];
let nomeUtente = "Matteo"; //(prompt("inserisci il tuo nome")); 
console.log(listaNomiInvitati , nomeUtente);

for(let i=0; i < listaNomiInvitati.length; i++){
    console.log(listaNomiInvitati[i]);

    if (nomeUtente==listaNomiInvitati[i]){
        console.log("trovato");

    }  else if (nomeUtente !== listaNomiInvitati[i])
    {
        console.log("non invitato");

    }


}












