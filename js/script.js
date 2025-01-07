// CICLO FOR

// for (inizializazzione/contatore; condizione; incremento/decremeneto) {
//     blocco di codice
// };

// inizializzazione/contatore = dichiariamo ed inizializziamo una variabile contatore (let i = 0);
// condizione = valutiamo la condizione prima di ogni iterazione, se è vera eseguiamo il blocco di codice altrimenti il ciclo termina (condizione fine ciclo)
// incremento/decremento = eseguito alla fine di ogni iterazione


// ES - 1 Contiamo i numeri da uno a 10 e verifichiamo quali numeri sono pari e quali dispari


for (let i = 0; i <= 10; i++) {
    // verifichiamo se il numero che stiamo iterando è pari o dispari
    if (i % 2 === 0) {
        console.log(`${i} è pari`)
    } else {
        console.log(`${i} è dispari`)
    }
};

console.log('Il ciclo è terminato');

// ES - 2 Utilizziamo il decremento

for (let i = 10; i >= 0; i--) {
    console.log(i);
};

console.log('Il ciclo in decremento è terminato');


// ES - 3 Vediamo un altro esempio completo

for (let i = 0; i <= 3; i++) {
    console.log(i);
}

console.log('Ciclo esempio 3 terminato');

// ES - 4 Analisi del pre/post incremento

let i = 0;
let j = 0;


console.log(++i); // pre-incremento (incrementa immediatamente il valore della variabile i prima di restituirlo il risultato sarà 1)
console.log(j++); // post-incremento (restituisce prima il valore attuale della variabile poi avviene l'incremento)


// ES - 5  Ciclo e DOM (Document Object Model)

// Recupero dal dom l'elemento con id list
let list = document.getElementById('list');
// recupero il bottone dal dom
let list_btn = document.getElementById('btn');

// ciclo for 
for (let i = 0; i <= 10; i++) { // variabile contatore , condizione , incremento
    // per ogni iterazione viene creata una stringa HTML utilizzando il template litaral
    let list_item = `<li>Elemento lista numero ${i}</li>`
    // concateno il valore di list con le iterazioni del ciclo for per creare una lista
    list.innerHTML += list_item;
    // tramite la priprietà classList aggiungo dinamicamente la classe di bootstrap per stilizzare la lista
    list.classList.add('list-unstyled');
};

// assegno al bottone un evento click
list_btn.addEventListener('click', function () {
    // tramite la proprietà classList aggiungo e rimuovo dinamicamente la classe underlyne
    list.classList.toggle('underlyne');
    console.log(list.classList);

});


// ES - 6 Ciclo e DOM

// recupero l'elemento dal DOM
let myList = document.getElementById('list-two');

// recupero il bottone dal dom che genera la lista
let generate_btn = document.getElementById('generate-btn');
// console.log(btn_list_two);

// recupero il bottone dal dom che cancella la lista
let reset_btn = document.getElementById('reset-btn')

// metto il bottone in attesa di un evento click
generate_btn.addEventListener('click', function () {
    // svuoto il contenuto di my list per evitare di generare piu liste uguali
    myList.innerHTML = '';
    // generiamo con il ciclo for 10 elementi della lista
    for (let i = 0; i <= 10; i++) {
        let listItems = document.createElement('li'); // creazione dell'elemento HTML <li>
        listItems.innerText = `Elemento ${i}`; // assegno alla variabile che crea l'elemento HTML tramite il template litelal del testo
        myList.appendChild(listItems); // appendiamo/aggiungiamo l'elemento creato alla variabile myList
        listItems.classList.add('list-unstyled');
        listItems.classList.add('p');


        // all'interno del ciclo for alterniamo le classi css in base ai valori pari o dispati

        if (i % 2 === 0) {
            // agli elementi lista con numero pari aggiungo la classe css even
            listItems.classList.add('even');
        } else {
            // altrimenti agli elementi lista con numero dispari aggiungo la classe odd
            listItems.classList.add('odd');
        }
    }
});

reset_btn.addEventListener('click', function () {
    myList.innerHTML = '';
})

