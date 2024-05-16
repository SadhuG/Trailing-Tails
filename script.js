function createGrid(x) {
  let edge = 500 / x;
  for (let rows = 0; rows < x; rows++) {
    for (let column = 0; column < x; column++) {
      var gridDiv = document.createElement("div");

      gridDiv.className = "gridDiv";
      gridDiv.style.width = edge + "px";
      gridDiv.style.height = edge + "px";

      document.getElementById("gridContainer").append(gridDiv);
    }
  }
}

function cleanGrid() {
  document.querySelector("#gridContainer").replaceChildren();
}

function refreshGrid() {
  var x = prompt("How many boxes per side?");

  if (x.trim() !== "" && !isNaN(x) && x > 0) {
    cleanGrid();
    createGrid(x);
  } else {
    alert("That's not a number! Please try again.");
    refreshGrid();
  }
}

addEventListener("DOMContentLoaded", (e) => createGrid(16));
