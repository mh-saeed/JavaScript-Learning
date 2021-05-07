showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    if (addTxt.value!="") {
        
        let addTxt = document.getElementById(`addTxt`);
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
        console.log(notesObj);
        showNotes();
    }
    else{
        alert(`Text field is empty!`)
    }
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id ="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
    </div>`;
    });
    let notesElem = document.getElementById(`notes`);
    if (notesObj.length!=0) {
        notesElem.innerHTML=html;
    }else{
        notesElem.innerHTML=`<h6>Nothing to show !</h6>"Use above section to add a Note"`;
    }
}

function deleteNote(index) {
    // console.log(index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById(`searchTxt`);
search.addEventListener(`input`, function() {
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName(`noteCard`);
    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display="block";
        }else{
            element.style.display="none";
        }
    });
})