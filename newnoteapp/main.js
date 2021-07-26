console.log("notes making");
showdata();

let btn = document.getElementById("addBtn");
btn.addEventListener('click',function(e){
    let text = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if(notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(text.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    text.value=" ";
    showdata();
})

function showdata() {
    let notes = localStorage.getItem("notes");
    if(notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    let maindiv = document.getElementById("notes");
    let html="";
    notesobj.forEach(function(element,index) {
        html+=`<div class=" card notecard my-2 mx-2" style="width: 12rem;">
        <div class="card-body">
            <h5 class="card-title"> Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button  onclick="Deletenote(this.id)" class="btn btn-danger btn-sm" id="${index}">Delete Note</button>
        </div>
    </div>`
    });
    if(maindiv.length != 0) {
        maindiv.innerHTML = html;
    } else {
        maindiv.innerHTML = `You don't have any notes ! add one to show up it here `;
    }
}

function Deletenote(id) {
    let notes = localStorage.getItem("notes");
    if(notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    alert("Are you sure you want to delete it ");
    notesobj.splice(id,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    showdata();
}   

let search = document.getElementById("searchTxt");

search.addEventListener('input',function() {
    let value = search.value.toLowerCase();
    let notes = document.getElementsByClassName("notecard");
    Array.from(notes).forEach(function(element) {
        let textcontent = element.getElementsByTagName("p")[0].innerText;
        if(textcontent.includes(value)) {
            element.style.display="block";
        } else {
            element.style.display ="none";
        }
    })
})

