const ui = new UI()
const ls = new LS()

// input
const form = document.querySelector("#book-form")
form.addEventListener("submit", addBook)
document.addEventListener("DOMContentLoaded", getBooks)
// getbooks
function getBooks(){
    const books = ls.getData("books")
    books.forEach(function (booksFromLS){
        ui.addBook(booksFromLS)
    })
}
// addtask
function addBook(event) {
    const title = ui.title.value
    const author = ui.author.value
    const isbn = ui.isbn.value
    const book = new Book(title, author, isbn)
    console.log(book)
    ui.addBook(book)
    // Local storage
    ls.addBook(book)
    //empty
    ui.title.value =""
    ui.author.value =""
    ui.isbn.value =""
    event.preventDefault()
}
// delbtn click
const deleteBtn = document.querySelector("#book-list")
deleteBtn.addEventListener("click", delBook)

function delBook(event) {
    if(event.target.textContent === "X") {
            const book = ui.getBook(event.target)
            if(ui.delBook(event.target) === true){
                ls.delBook(book)
            }
        }

}