const textArea = document.getElementById("text");
const copyBtn = document.getElementById("copy");
const historyList = document.getElementById("history");

let history = JSON.parse(localStorage.getItem("clipboardHistory")) || [];

function renderHistory() {
  historyList.innerHTML = "";

  history.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    li.addEventListener("click", () => {
      navigator.clipboard.writeText(item);
      alert("Copied from history!");
    });

    historyList.appendChild(li);
  });

  localStorage.setItem("clipboardHistory", JSON.stringify(history));
}

copyBtn.addEventListener("click", async () => {
  const text = textArea.value.trim();
  if (text === "") return alert("Enter some text");

  try {
    await navigator.clipboard.writeText(text);
    history.unshift(text);
    history = history.slice(0, 10); // keep last 10
    textArea.value = "";
    renderHistory();
  } catch (err) {
    alert("Clipboard permission denied");
  }
});

renderHistory();
