console.log("welcome to myNote app console");
showNotes()
let saveEvent = document.getElementById("saveBtn");
saveEvent.addEventListener("click", function () {
    let addText = document.getElementById("addText");
    let txt = addText.innerHTML;

    let addTitle = document.getElementById("addTitle");
    let title = addTitle.innerHTML;


    let storage = localStorage.getItem("notes");
    if (storage == null) {
        storageObject = []
    }
    else {
        storageObject = JSON.parse(storage)
    }
    let myobj={
        title:addTitle.innerHTML,
        text:addText.innerHTML
    }
    storageObject.push(myobj);
    localStorage.setItem("notes", JSON.stringify(storageObject));
    addText.innerHTML = "";
    addTitle.innerHTML="";
    showNotes()
})
function showNotes() {
    let notes = document.getElementById("notes");
    let storage = localStorage.getItem("notes");
    if (storage == null) {
        storageObject = []
    }
    else {
        storageObject = JSON.parse(storage)
    }
    let html = "";
    storageObject.forEach(function (element, index) {
        html +=
            `<div class="noteCard my-2 mx-4 card" style="width:17rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index+1} ${element.title}</h5>
                <p class="card-text"> ${element.text}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div > `
    })
    notes.innerHTML = html;
}
function deleteNote(index) {
    let storage = localStorage.getItem("notes")
    if (storage == null) {
        storageObject = []
    }
    else {
        storageObject = JSON.parse(storage)
    }
    storageObject.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(storageObject))
    showNotes()
}
let search = document.getElementById("search");
search.addEventListener("input", function () {
    let find = search.value;
    let elementSearch = document.getElementsByClassName("noteCard")
    Array.from(elementSearch).forEach(function (element) {
        let c = element.getElementsByTagName("p")[0].innerHTML;
        if (c.includes(find)) {
            element.style.display = "block"
        }
        else {
            element.style.display = "none"
        }
        

    })
})
