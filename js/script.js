/* Consegna
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro. */


// prelevo dal DOM il mio button
const buttonPlay = document.getElementById('play');
console.log(buttonPlay);

// prelevo dal DOM il container su cui inserire i singoli quadrati
let containerGrid = document.getElementById('grid');
console.log(containerGrid);

// al click del bottone
buttonPlay.addEventListener('click', function () {
  grid.innerHTML = '';
  // prelevo la mia select dal DOM
  const level = document.getElementById('difficolta').value;
  console.log(level);
  // dichiaro e inizializzo la riga e la colonna che compone i quadrati a 0
  let row = 0;
  let col = 0;

  // se seleziono il livello easy allora
  if (level == 'easy') { 
    row = 10;
    col = 10;
  // se seleziono il livello hard allora 
  } else if (level == 'hard') {
    row = 9;
    col = 9;
  // se seleziono il livello crazy allora
  } else if (level == 'crazy') {
    row = 7;
    col = 7;
  }
  // dichiaro la variabile per creare il numero di quadrati
  let numberSquare = row * col;

  // ciclo for per creare i div quadrati
  for (let index = 0; index < numberSquare; index++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${col})`;
    square.style.height = `calc(100% / ${row})`;
    containerGrid.append(square);
    console.log(square);

    // inserisco i numeri all'interno dei quadrati
    square.append(index + 1);

    // cambio lo sfondo al div quando lo clicco
    square.addEventListener('click', function () {
      this.classList.add('active');
    })
  }
  console.log(numberSquare);
});

// creo lista nera con numeri

const blackList = [];
const level = document.getElementById('difficolta').value;
console.log(level);

for (let index = 0; index < 16; index++) {
  if (level == 'easy') {
    let bombeRand = Math.floor(Math.random() * 100) + 1;
    blackList.push(bombeRand);  

  } else if (level == 'hard') {
    let bombeRand = Math.floor(Math.random() * 81) + 1;
    blackList.push(bombeRand);

  } else if (level == 'crazy') {
    let bombeRand = Math.floor(Math.random() * 49) + 1;
    blackList.push(bombeRand);
  }
}
console.log(blackList);

// if (blacklist.includes(parseInt(square.innerText))) {
  
// }
// quando clicco un numero della lista nera, il bg di quel numero e di tutti gli altri numeri della lista nera diventano rosso

