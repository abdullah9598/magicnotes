console.log("In Storage");
shownotes();

let addButton = document.getElementById("addBtn");

addButton.addEventListener("click", function () {
  let heading = document.getElementById("head");
  let addText = document.getElementById("addText");

  locStorageH = localStorage.getItem("addedHeading");
  locStorageQ = localStorage.getItem("addedNotes");

  if (locStorageH == null) {
    locStorageHeading = [];
    locStorageQuotes = [];
  } else {
    locStorageHeading = JSON.parse(locStorageH);
    locStorageQuotes = JSON.parse(locStorageQ);
  }

  locStorageHeading.push(heading.value);
  locStorageQuotes.push(addText.value);
  localStorage.setItem("addedHeading", JSON.stringify(locStorageHeading));
  localStorage.setItem("addedNotes", JSON.stringify(locStorageQuotes));
  heading.value = "";
  addText.value = "";
  shownotes();

  //   <div class="alert alert-warning alert-dismissible fade show" role="alert">
  //   <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  //   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  // </div>

  let elemen = document.createElement("div");

  elemen.className = "alert alert-success alert-dismissible fade show";
  elemen.setAttribute("role", "alert");
  elemen.innerHTML = `<strong>Notes added suucessfully !</strong> You should check in on some of those fields below.
     <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>`;

  let container = document.getElementById("container");
  container.append(elemen);
  container.insertBefore(elemen, document.getElementById("card"));
});

//Function to display the notes
function shownotes() {
  let heading = document.getElementById("head");
  let addText = document.getElementById("addText");

  locStorageH = localStorage.getItem("addedHeading");
  locStorageQ = localStorage.getItem("addedNotes");

  if (locStorageH == null) {
    locStorageHeading = [];
    locStorageQuotes = [];
  } else {
    locStorageHeading = JSON.parse(locStorageH);
    locStorageQuotes = JSON.parse(locStorageQ);
  }

  let index = 0;
  let html = "";
  for (let i = 0; i < locStorageHeading.length; i++) {
    html += `<div class="card my-2 mx-0 border-0" style="width:50rem">
    <div class="card-body">
      <h5 class="card-title">${locStorageHeading[i]}</h5>
      <p class="card-text">
       ${locStorageQuotes[i]}
      </p>
      <button class="btn btn-success" id="${index}" onclick="deleteNodes(this.id)">Delete Node</button>
    </div>
  </div>
  <hr>`;
    index += 1;
  }
  let NotesElem = document.getElementById("notes");

  if (locStorageHeading.length === 0) {
    NotesElem.innerHTML = '<b class="mt-3"> NO DATA HERE TO SHOW </b>';
  } else {
    NotesElem.innerHTML = html;
  }
}

//DeleteAllNotes

function deleteAllItems() {
  localStorage.clear();
  let elemen = document.createElement("div");

  elemen.className = "alert alert-danger alert-dismissible fade show";
  elemen.setAttribute("role", "alert");
  elemen.innerHTML = `<strong>All Notes Deleted !</strong> Add notes to proceed.
     <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button>`;

  let container = document.getElementById("container");
  container.append(elemen);
  container.insertBefore(elemen, document.getElementById("card"));

  shownotes();
}

//Delete a specific Note

function deleteNodes(index) {
  let heading = document.getElementById("head");
  let addText = document.getElementById("addText");

  locStorageH = localStorage.getItem("addedHeading");
  locStorageQ = localStorage.getItem("addedNotes");

  if (locStorageH == null) {
    locStorageHeading = [];
    locStorageQuotes = [];
  } else {
    locStorageHeading = JSON.parse(locStorageH);
    locStorageQuotes = JSON.parse(locStorageQ);
  }

  locStorageHeading.splice(index, 1);
  locStorageQuotes.splice(index, 1);
  localStorage.setItem("addedHeading", JSON.stringify(locStorageHeading));
  localStorage.setItem("addedNotes", JSON.stringify(locStorageQuotes));
  shownotes();
}
