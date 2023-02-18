console.log("This is index.js");

function Book(bkn ,ist){
    this.bkn=bkn;;
    this.ist=ist;

}


function Display(){

}

Display.prototype.add = function(book){
    console.log("Adding to UI");
    tableBody = document.getElementById("tableBody");
    let uiString= <tr>
                  
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>;
  tableBody.innerHTML=uiString;
 

}
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);
function libraryFormSubmit(e) {
    console.log('You have Submitted library form');
    e.preventDefault();
    let bkn=document.getElementById('bookname').value;
    let ist=document.getElementById('name').value;
   
    let book =new Book(bkn,ist);
    let display=new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
       else{
        display.show('error');
       } display.show("sucesses")
    }
    display.add(book);
    display.clear();
};