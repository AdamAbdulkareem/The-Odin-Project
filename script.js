const myLibrary = [];

function Book(title, author, number_of_pages) {
    this.title = title;
    this.author = author;
    this.number_of_pages = number_of_pages;
}

function addBookToLibrary() {
    const displayBook = document.getElementById("card_details")
    displayBook.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        const bookContainer = document.createElement("div")
        bookContainer.setAttribute("class", "book_container")

        const editContainer = document.createElement("div")
        editContainer.setAttribute("class", "edit_container")


        const bookTitle = document.createElement("div")
        bookTitle.setAttribute("class", "book_title")
        bookTitle.textContent = myLibrary[i].title;
        bookContainer.appendChild(bookTitle)

        const bookAuthor = document.createElement("div")
        bookAuthor.setAttribute("class", "book_author")
        bookAuthor.textContent = myLibrary[i].author;
        bookContainer.appendChild(bookAuthor)

        const bookPages = document.createElement("div")
        bookPages.setAttribute("class", "book_number_of_pages")
        bookPages.textContent = myLibrary[i].number_of_pages;
        bookContainer.appendChild(bookPages)

        const removeBtn = document.createElement("button")
        removeBtn.textContent= "Remove Book"
        removeBtn.setAttribute("class", "remove_book")
        editContainer.appendChild(removeBtn)

        removeBtn.addEventListener("click", () => {
            bookContainer.remove()
        })


        const toggleBtn = document.createElement("input")
        toggleBtn.type = "checkbox"

        bookContainer.appendChild(toggleBtn)



        const updateStatus = document.createElement("button")
        updateStatus.textContent = "Update Status"
        updateStatus.setAttribute("class", "update_status")

        updateStatus.addEventListener("click", () => {
            toggleBtn.checked = !toggleBtn.checked

        })
        editContainer.appendChild(updateStatus)

        bookContainer.appendChild(editContainer)
        displayBook.appendChild(bookContainer)
    }
}

function addBookToLibraryBtn() {
    const book_dialog = document.querySelector(".book_dialog")
    const addBookBtn = document.querySelector(".add_book")
    const bookModalForm = document.querySelector("#book_dialog_form")
    const submitBtn = document.querySelector(".submitBtn")

    let isSubmitClicked = false;


    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        isSubmitClicked = true;

        book_dialog.returnValue = "submit";
        book_dialog.close()
    })
    addBookBtn.addEventListener("click", (event) => {
        event.preventDefault()
        book_dialog.showModal();
    })

    book_dialog.addEventListener("close", (event) => {
        if (isSubmitClicked && book_dialog.returnValue === "submit") {
            const author = document.getElementById("author").value;
            const title = document.getElementById("title").value;
            const number_of_pages = document.getElementById("number_of_pages").value;

            addBook = new Book(`${author}`, `${title}`, `${number_of_pages}`)
            myLibrary.push(addBook)
            addBookToLibrary()
            bookModalForm.reset();
            isSubmitClicked = false;



        }
        else {
            console.log("Dialog was cancelled")
        }
    })
    book_dialog.addEventListener("click", e => {
        const dialogDimensions = book_dialog.getBoundingClientRect()
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            book_dialog.close()
        }
    })

}



addBookToLibraryBtn();

