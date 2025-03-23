document.getElementById("addNoteBtn").addEventListener("click", function () {
    let titleInput = document.getElementById("noteTitle");
    let contentInput = document.getElementById("noteContent");
    let titleText = titleInput.value.trim();
    let contentText = contentInput.value.trim();

    if (titleText !== "" && contentText !== "") {
        let note = document.createElement("div");
        note.classList.add("note");

        note.innerHTML = `
            <div class="note-title" contenteditable="true">${titleText}</div>
            <div class="note-content" contenteditable="true">${contentText}</div>
            <div class="note-buttons">
                <button class="edit-btn">Editar</button>
                <button class="delete-btn">Excluir</button>
            </div>
        `;

        document.getElementById("notesContainer").appendChild(note);
        titleInput.value = "";
        contentInput.value = "";

        // Evento para excluir nota
        note.querySelector(".delete-btn").addEventListener("click", function () {
            note.remove();
        });
    }
});
