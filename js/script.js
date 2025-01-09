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
        // console.log(listItems.classList);


        // all'interno del ciclo for alterniamo le classi css in base ai valori pari o dispati

        if (i % 2 === 0) {
            // agli elementi lista con numero pari aggiungo la classe css even
            listItems.classList.add('even');
        } else {
            // altrimenti agli elementi lista con numero dispari aggiungo la classe odd
            listItems.classList.add('odd');
        }
    }
    // console.log(myList);
});

reset_btn.addEventListener('click', function () {
    myList.innerHTML = '';
});


// // ES - 7 Ciclo e DOM

// // recupero l'elemento con id grid dal DOM
// let grid = document.getElementById('grid');

// // variabile num per tenere traccia del numero corrente
// let num = 1;

// // Ciclo for per generare 10 le righe della griglia
// for (let i = 1; i <= 10; i++) {
//     // ciclo for annidato per generare le colonne della griglia
//     for (let f = 1; f <= 10; f++) {
//         // creazione di un elemento div per generare una cella
//         let square = document.createElement('div');
//         // aggiungo all'elemento creato la classe square
//         square.classList.add('square');

//         // con la proprietà innerText attraverso il template literal riporto il numero della variabile num che tiene traggia dei numeri


//         // alla griglia recuperata in precedenza aggiungo gli elementi creati
//         grid.appendChild(square);

//         // istrzione condizionale operatore resto per distinguere i numeri pari e i numeri dispari
//         if (i % 2 === 0) {

//             if (f % 2 === 0) {
//                 square.classList.add('red');
//                 square.innerText = `${num}\n pari`;


//             } else {
//                 square.classList.add('blue');
//                 square.innerText = `${num}\n dispari`;


//             };
//         } else {


//             if (f % 2 === 0) {
//                 square.classList.add('blue');
//                 square.innerText = `${num}\n pari`;


//             } else {
//                 square.classList.add('red');
//                 square.innerText = `${num}\n dispari`;

//             };
//         };
//         // incremento la variabile num che riene traccia dei numeri
//         num++;
//     };
// };

// ES 8 - FizzBuzz

// recupero tutti gli elementi dal DOM utili per generare la griglia FizzBuzz

// Bottone che genera la griglia
let grid_generate_btn = document.getElementById('grid-start');
console.log(grid_generate_btn);
// Bottone che resetta la griglia
let grid_reset_btn = document.getElementById('grid-reset');
console.log(grid_reset_btn);
// Elemento griglia che conterrà le celle per ogni numero
let grid = document.getElementById('grid');
console.log(grid);

// metto il bottone che genera la griglia in attesa di un evento click, al suo interno la logica per il funzionamento di FizzBuzz
grid_generate_btn.addEventListener('click', function () {
    // svuoto la griglia prima di generare nuovi elementi 
    grid.innerHTML = '';
    // Con un ciclo for genero dei numeri da 1 a 100 compreso
    for (i = 1; i <= 100; i++) {
        // creo degli elemeti div
        let square = document.createElement('div');
        // assegno agli elementi creati dinamicamente nel DOM la classe square
        square.classList.add('square');
        // aggiungo alla griglia nel dom gli elementi div con classe square creati
        grid.appendChild(square);
        // condizione che stampa FizzBuzz per i numeri multipli di 3 e 5, utilizzato operatore logico && (AND) restituisce true se entrambi gli operatori sono veri
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} FizzBuzz`);
            // condizione che stampa Fizz per i multipli di 3
        } else if (i % 3 === 0) {
            console.log(`${i} Fizz`);
            // condizione che stampa Fizz per i multipli di 5
        } else if (i % 5 === 0) {
            console.log(`${i} Buzz`);
            // altrimenti stampa solo il numero se non soddisfa le precedenti condizioni
        } else {
            console.log(i);
        }
    };
});

// Logica per il reset della griglia

// metto il bottone di reset in attesa di un evento click 
grid_reset_btn.addEventListener('click', function () {
    grid.innerHTML = '';
});






