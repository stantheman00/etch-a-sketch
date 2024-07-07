let get_container = document.getElementsByClassName("container");
let container = get_container[0];

function addDiv() {
  number_of_squares = 16;

  for (let i = 0; i < number_of_squares; i++) {
    let createRow = document.createElement("div");
    createRow.className = "row";
    container.appendChild(createRow);
    for (let j = 0; j < number_of_squares; j++) {
      let createDiv = document.createElement("div");
      createDiv.className = "grid";
      createRow.appendChild(createDiv);
    }
  }
}

addDiv();
