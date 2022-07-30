console.log("welcome to magic notes");

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')

})
showNotes();
//If user adds a note save it to local storage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
    let addTxt=document.getElementById("myTextarea");
    let notes=localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
      notesObj.push(addTxt.value);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      addTxt.value = " ";
       console.log(notesObj);
      showNotes();

}
)

//function to show notes
function showNotes()
{
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
      notesObj=[];  
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html="";
    notesObj.forEach(function(element,index) {
        html+=
        `<div class="exp">
        <h3>Note ${index+1}</h3>
        <p> ${element}</p>
        <button class="btn exps" id="${index}
        "onclick="deleteNote(this.id)" class="btn exps">Delete Note</button>
    </div>`;
    });
    let notesElem = document.getElementById('notes');
    if(notesObj.length!=0)
    {
      notesElem.innerHTML = html;
    }
    else{
      notesElem.innerHTML=`<h2>Nothing to show here.Add a note to display</h2>`
    }
}

//function to delete note
function deleteNote(index)
{
    console.log("i ma deleting",index);
    let notes=localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
       } else {
        notesObj = JSON.parse(notes);
       }
       
       notesObj.splice(index,1);
       localStorage.setItem("notes",JSON.stringify(notesObj));
       showNotes();
       }

       let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){

    let inputVal = search.value.toLowerCase();
    console.log('Input event fired!', inputVal);

    let noteCards = document.getElementsByClassName('exp');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })

})

