//book constructor
 function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn =isbn;
 }

 function UI(){}
 UI.prototype.addInputField = function addInputField(book){

   const list = document.getElementById('book-list');
   //create a dynamic table row
   const row = document.createElement('tr');
   row.className = 'table'
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X<a></td>
    `
    list.appendChild(row);
 }
 //remove input values after submition
UI.prototype.removeInput = function removeInput(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//remove book form table
UI.prototype.clearList = function clearList(){
    document.querySelector('.delete').addEventListener('click', function(e){

        e.target.parentElement.parentElement.remove();
      e.preventDefault();
    })
    
    
}

//error alert
UI.prototype.showError = function showError(message, className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.appendChild(message))

const container = document.querySelector('.container');
const form = document.querySelector('#book-form');
container.insertBefore(div, form)


}

 const form = document.getElementById('book-form').addEventListener('submit', function(e){

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
  
    const book = new Book(title, author, isbn);
    const ui = new UI();

    if(author === '' || title === '' || isbn === ''){
      ui.showError('Please Fil The Form', 'error')
    }else{
        ui.addInputField(book);
        ui.removeInput();
        ui.clearList();
    }


   
 e.preventDefault();
 });

  
        


































