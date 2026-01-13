const cardGrid = document.getElementById("card-grid");
const movesEl = document.getElementById("moves");
const restartBtn = document.getElementById("restart");

const symbols = ["🍎", "🍌", "🍇", "🍉", "🍒", "🍓", "🍍", "🥝"];
let cards = [...symbols, ...symbols];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function createBoard() {
  cardGrid.innerHTML = "";
  shuffle(cards).forEach(symbol => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="front"></div>
      <div class="back">${symbol}</div>
    `;

    card.addEventListener("click", () => flipCard(card, symbol));
    cardGrid.appendChild(card);
  });
}

function flipCard(card, symbol) {
  if (lockBoard || card === firstCard) return;

  card.classList.add("flip");

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  moves++;
  movesEl.textContent = moves;

  checkMatch(symbol);
}

function checkMatch(symbol) {
  const firstSymbol = firstCard.querySelector(".back").textContent;
  const secondSymbol = secondCard.querySelector(".back").textContent;

  if (firstSymbol === secondSymbol) {
    resetTurn();
  } else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetTurn();
    }, 800);
  }
}

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

restartBtn.addEventListener("click", () => {
  moves = 0;
  movesEl.textContent = 0;
  firstCard = secondCard = null;
  createBoard();
});

createBoard();
