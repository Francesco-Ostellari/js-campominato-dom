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
    blackList = randomNumber(1, 100);
    console.log(blackList);
  // se seleziono il livello hard allora 
  } else if (level == 'hard') {
    row = 9;
    col = 9;
    blackList = randomNumber(1, 81);
    console.log(blackList);

  // se seleziono il livello crazy allora
  } else if (level == 'crazy') {
    row = 7;
    col = 7;
    blackList = randomNumber(1, 49);
    console.log(blackList);
  }
  // console.log(blackList);
  // dichiaro la variabile per creare il numero di quadrati
  let numberSquare = row * col;

  // conto i quadrati blu
  let contatore = [];
  // inizializzo il punteggio a 0
  let punteggio = 0;
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

    if (blackList.includes(parseInt(square.innerText))) {
      square.classList.add('black-list');
    }

    // cambio lo sfondo al div quando lo clicco
    square.addEventListener('click', function () {
      if (square.classList.contains('black-list')) {
        let divBlackList = document.querySelectorAll('.black-list');
        console.log(divBlackList);
        for (let index = 0; index < divBlackList.length; index++) {
          divBlackList[index].classList.add('red');
        }
      } else {
        square.classList.add('active');
        contatore.push(square);
        console.log(contatore);
        punteggio = contatore.length;
        console.log('il punteggio è:'+' '+ punteggio);
        document.getElementById("result").innerHTML = "il punteggio è:" + ' ' + punteggio;
      }
    });

  };
  console.log(numberSquare);  
});

function randomNumber(min, max) {
  let blackList = [];

  for (let index = 0; index < 16; index++) {
    min = Math.ceil(min);
    max = Math.floor(max);

    let element = blackList[index];
    element = Math.floor(Math.random() * (max - min + 1) + min);
    while (blackList.includes(element)) {
      element = Math.floor(Math.random() * (max - min + 1) + min);
    }
    blackList.push(element);
  }
  return blackList;
}