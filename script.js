const notes = localStorage.getItem("notes") || "[]";
const notesArray = JSON.parse(notes);

const noteInput = document.getElementById("Note");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
    const noteText = noteInput.value.trim();
    if (noteText !== "") {
        notesArray.push(noteText);
        localStorage.setItem("notes", JSON.stringify(notesArray));
        noteInput.value = "";
        location.reload();
    }
});

const notesList = document.getElementById("notesList");
notesArray.forEach(note => {
    const li = document.createElement("li");
    li.textContent = note;
    notesList.appendChild(li);
});
