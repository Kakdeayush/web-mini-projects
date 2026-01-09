const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note");
const notesList = document.getElementById("notes-list");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function displayNotes() {
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.innerHTML = `
      <p>${note}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    notesList.appendChild(noteDiv);
  });
}

addNoteBtn.addEventListener("click", () => {
  const noteText = noteInput.value.trim();

  if (noteText === "") return;

  notes.push(noteText);
  saveNotes();
  displayNotes();
  noteInput.value = "";
});

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  displayNotes();
}

displayNotes();
