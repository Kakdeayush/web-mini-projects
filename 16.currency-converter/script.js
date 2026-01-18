const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const resultEl = document.getElementById("result");
const convertBtn = document.getElementById("convert");

let rates = {};

async function loadRates() {
  const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
  const data = await res.json();
  rates = data.rates;

  for (let currency in rates) {
    fromSelect.innerHTML += `<option value="${currency}">${currency}</option>`;
    toSelect.innerHTML += `<option value="${currency}">${currency}</option>`;
  }

  fromSelect.value = "USD";
  toSelect.value = "INR";
}

convertBtn.addEventListener("click", () => {
  const amount = amountInput.value;
  const from = fromSelect.value;
  const to = toSelect.value;

  if (amount === "") {
    resultEl.textContent = "Please enter amount";
    return;
  }

  const convertedAmount = (amount / rates[from]) * rates[to];
  resultEl.textContent = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
});

loadRates();
