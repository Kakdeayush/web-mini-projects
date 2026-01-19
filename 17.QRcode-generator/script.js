const input = document.getElementById("text");
const generateBtn = document.getElementById("generate");
const qrImg = document.getElementById("qr-img");

generateBtn.addEventListener("click", () => {
  const value = input.value.trim();

  if (value === "") {
    alert("Please enter text or URL");
    return;
  }

  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(value)}`;

  qrImg.src = qrURL;
  qrImg.style.display = "block";
});
