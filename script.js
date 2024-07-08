let get_container = document.getElementsByClassName("container");
let container = get_container[0];

function addDiv() {
  if (container.children.length > 0) {
    container.innerHTML = "";
  }
  let number = prompt("Choose the number of grids");

  if (number > 100) {
    alert("IS TOO MUCH BRO!");
  } else {
    number_of_squares = number;

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
    paint();
  }
}

function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function paint() {
  let get_grid = document.getElementsByClassName("grid");
  Array.from(get_grid).forEach((element) => {
    element.addEventListener("mouseover", function () {
      // get_grid[element].classList.add("colorify");
      let color = randomColor();
      elem = element;
      elem.style.backgroundColor = color;
    });
  });
}
