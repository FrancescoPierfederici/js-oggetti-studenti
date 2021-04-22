// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

var studente =
{
    "nome": " Marco",
    "cognome": " Santini",
    "eta": " 21"
}


for (var key in studente) {
    console.log(key + " " + studente[key])


}



// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

var studenti =
    [
        {
            "nome": "Gianluca",
            "cognome": "Scamacca",
            "eta": " 21"
        },

        {
            "nome": "Achille",
            "cognome": "Aiace",
            "eta": " 19"

        },

        {
            "nome": "Menelao",
            "cognome": "Argo",
            "eta": "16"
        },
        {
            "nome": "Enea",
            "cognome": "Priamo",
            "eta": "17"
        },
        {
            "nome": "Circe",
            "cognome": "Trasforma",
            "eta": "24"
        },
        {
            "nome": "Cassandra",
            "cognome": "Briseide",
            "eta": "22"
        },
    ];

for (i = 0; i < studenti.length; i++) {
    var element = studenti[i];
    console.log(element);

}




// QUESTO METODO NON VA BENE PERCHE' IL FOR IN SI FA CON GLI OGGETTI (ANCHE SE L'ARRAY PUO' ESSERE CONSIDERATO UN ARRAY)
// for(var keyStudent in studenti){
//     console.log(keyStudent)
//     console.log(studenti[keyStudent]);
// }


// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nomeStudente = prompt("Inserisci il tuo nome");
var cognomeStudente = prompt("Inserisci il tuo cognome");
var etaStudente = prompt("Inserisci la tua età");
var nuovoStudente = { "nome": nomeStudente, "cognome": cognomeStudente, "eta": etaStudente, }



console.log(nuovoStudente);
studenti.push(nuovoStudente);