document.getElementById("addNoteBtn").addEventListener("click", function () {
    let titleInput = document.getElementById("noteTitle");
    let contentInput = document.getElementById("noteContent");
    let titleText = titleInput.value.trim();
    let contentText = contentInput.value.trim();

    if (titleText !== "" && contentText !== "") {
        let note = document.createElement("div");
        note.classList.add("note");

        // Cria a estrutura inicial da nota
        note.innerHTML = `
            <div class="note-title">${titleText}</div>
            <div class="note-content">${contentText}</div>
            <div class="note-buttons">
                <button class="edit-btn">Editar</button>
                <button class="delete-btn">Excluir</button>
            </div>
        `;

        // Adiciona a nota à lista de notas
        document.getElementById("notesContainer").appendChild(note);

        // Limpa os campos de entrada
        titleInput.value = "";
        contentInput.value = "";

        // Evento de exclusão da nota
        note.querySelector(".delete-btn").addEventListener("click", function () {
            note.remove();
        });

        // Evento de edição da nota
        note.querySelector(".edit-btn").addEventListener("click", function () {
            let titleDiv = note.querySelector(".note-title");
            let contentDiv = note.querySelector(".note-content");
            let editBtn = note.querySelector(".edit-btn");

            // Se já está no modo de edição, salvar as mudanças
            if (editBtn.textContent === "Salvar") {
                let newTitle = titleDiv.querySelector("input").value;
                let newContent = contentDiv.querySelector("textarea").value;

                // Atualiza o conteúdo da nota
                titleDiv.textContent = newTitle;
                contentDiv.textContent = newContent;

                // Muda o botão de volta para "Editar"
                editBtn.textContent = "Editar";
            } else {
                // Transformar em campos editáveis
                titleDiv.innerHTML = `<input type="text" value="${titleDiv.textContent}">`;
                contentDiv.innerHTML = `<textarea>${contentDiv.textContent}</textarea>`;

                // Mudar o botão para "Salvar"
                editBtn.textContent = "Salvar";

                // Ajuste automático do tamanho do textarea
                let textarea = contentDiv.querySelector("textarea");
                textarea.addEventListener("input", function () {
                    this.style.height = 'auto';
                    this.style.height = (this.scrollHeight) + 'px';  // Ajusta a altura conforme o conteúdo
                });
            }
        });
    }
});
