const category = document.getElementById("category");
const valueInput = document.getElementById("value");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const resultEl = document.getElementById("result");
const convertBtn = document.getElementById("convert");

const units = {
  length: {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    mile: 1609.34
  },
  weight: {
    gram: 1,
    kilogram: 1000,
    pound: 453.592
  },
  temperature: ["celsius", "fahrenheit", "kelvin"]
};

function loadUnits() {
  fromSelect.innerHTML = "";
  toSelect.innerHTML = "";

  const selected = category.value;

  if (selected === "temperature") {
    units.temperature.forEach(u => {
      fromSelect.innerHTML += `<option value="${u}">${u}</option>`;
      toSelect.innerHTML += `<option value="${u}">${u}</option>`;
    });
  } else {
    for (let unit in units[selected]) {
      fromSelect.innerHTML += `<option value="${unit}">${unit}</option>`;
      toSelect.innerHTML += `<option value="${unit}">${unit}</option>`;
    }
  }
}

function convert() {
  const value = parseFloat(valueInput.value);
  if (isNaN(value)) {
    resultEl.textContent = "Please enter a value";
    return;
  }

  const from = fromSelect.value;
  const to = toSelect.value;
  const type = category.value;

  let result;

  if (type === "temperature") {
    result = convertTemp(value, from, to);
  } else {
    result = (value * units[type][from]) / units[type][to];
  }

  resultEl.textContent = `${value} ${from} = ${result.toFixed(2)} ${to}`;
}

function convertTemp(value, from, to) {
  if (from === to) return value;

  if (from === "celsius") {
    if (to === "fahrenheit") return (value * 9/5) + 32;
    if (to === "kelvin") return value + 273.15;
  }

  if (from === "fahrenheit") {
    if (to === "celsius") return (value - 32) * 5/9;
    if (to === "kelvin") return (value - 32) * 5/9 + 273.15;
  }

  if (from === "kelvin") {
    if (to === "celsius") return value - 273.15;
    if (to === "fahrenheit") return (value - 273.15) * 9/5 + 32;
  }
}

category.addEventListener("change", loadUnits);
convertBtn.addEventListener("click", convert);

loadUnits();
