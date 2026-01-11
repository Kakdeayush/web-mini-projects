const colorInput = document.getElementById("color-input");
const colorBox = document.getElementById("color-box");
const hexValue = document.getElementById("hex-value");
const rgbValue = document.getElementById("rgb-value");
const copyBtn = document.getElementById("copy-btn");

function hexToRgb(hex) {
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

colorInput.addEventListener("input", () => {
  const color = colorInput.value;

  colorBox.style.backgroundColor = color;
  hexValue.textContent = color;
  rgbValue.textContent = hexToRgb(color);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(hexValue.textContent);
  copyBtn.textContent = "Copied!";
  setTimeout(() => copyBtn.textContent = "Copy HEX", 1500);
});
