const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const addBtn = document.getElementById("add");
const list = document.getElementById("bookmark-list");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function renderBookmarks() {
  list.innerHTML = "";

  bookmarks.forEach((bookmark, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
      <button class="delete" onclick="deleteBookmark(${index})">X</button>
    `;

    list.appendChild(li);
  });

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const url = urlInput.value.trim();

  if (name === "" || url === "") {
    alert("Please fill all fields");
    return;
  }

  bookmarks.push({ name, url });
  nameInput.value = "";
  urlInput.value = "";
  renderBookmarks();
});

function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  renderBookmarks();
}

renderBookmarks();
