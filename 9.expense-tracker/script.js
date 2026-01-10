const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const listEl = document.getElementById("list");
const form = document.getElementById("form");
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function addTransaction(e) {
  e.preventDefault();

  const text = textInput.value.trim();
  const amount = +amountInput.value;

  if (text === "" || amount === 0) return;

  const transaction = {
    id: Date.now(),
    text,
    amount
  };

  transactions.push(transaction);
  updateLocalStorage();
  renderTransactions();

  textInput.value = "";
  amountInput.value = "";
}

function removeTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  updateLocalStorage();
  renderTransactions();
}

function renderTransactions() {
  listEl.innerHTML = "";

  transactions.forEach(transaction => {
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");

    item.classList.add(transaction.amount < 0 ? "minus" : "plus");

    item.innerHTML = `
      ${transaction.text}
      <span>${sign}₹${Math.abs(transaction.amount)}</span>
      <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `;

    listEl.appendChild(item);
  });

  updateValues();
}

function updateValues() {
  const amounts = transactions.map(t => t.amount);

  const total = amounts.reduce((acc, val) => acc + val, 0);
  const income = amounts.filter(val => val > 0).reduce((acc, val) => acc + val, 0);
  const expense = amounts.filter(val => val < 0).reduce((acc, val) => acc + val, 0);

  balanceEl.textContent = `₹${total}`;
  incomeEl.textContent = `₹${income}`;
  expenseEl.textContent = `₹${Math.abs(expense)}`;
}

function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

form.addEventListener("submit", addTransaction);
renderTransactions();
