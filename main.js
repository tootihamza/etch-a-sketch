const container = document.querySelector(".container");
const smallbtn = document.getElementById("smallbtn");
const mediumbtn = document.getElementById("mediumbtn");
const bigbtn = document.getElementById("bigbtn");


function CreatingGrid(divNumberCol, divNumberRow, itemID){
    for(let i = 0; i < divNumberCol*divNumberRow;i++) {
        let divItem = document.createElement("div");
        divItem.classList.add(itemID);
        container.appendChild(divItem);
        }
    }

CreatingGrid(16,16, "mediumContainerItems");

container.addEventListener("mouseover", function(evt) {
    if(evt.target.style.backgroundColor === ""){
        let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        let r = randomBetween(0, 255);
        let g = randomBetween(0, 255);
        let b = randomBetween(0, 255);
        let rgb = "rgb(" + r +", " + g + ", " + b +")";
        evt.target.style.backgroundColor = rgb;
        }
    else {
        let Colored = evt.target.style.backgroundColor;  
        Colored = Colored.slice(5);
        Colored = Colored.slice(0, -1);
        let ColoredArray = Colored.split(", ");
        for(let i = 0; i < 3; i++) {
            if(Number(ColoredArray[i]) >= 20) {
                ColoredArray[i] -= 20;
            }
            else if(Number(ColoredArray[i]) > 0 && Number(ColoredArray[i]) < 20) {
                ColoredArray[i] = 0;
            }
            else if(Number(ColoredArray[i]) === 0 || Number(ColoredArray[i]) === "")
            {
                ColoredArray[i] = 0;
            }
        }
        let NewColor = "rgb(" + ColoredArray.join(", ") +")";
        evt.target.style.backgroundColor = NewColor;
    }
})

smallbtn.addEventListener("click", function(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    container.setAttribute("id", "smallContainer");
    CreatingGrid(25, 25, "smallContainerItems");
})

mediumbtn.addEventListener("click", function(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    container.setAttribute("id", "mediumContainer");
    CreatingGrid(16, 16, "mediumContainerItems");
})

bigbtn.addEventListener("click", function(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.setAttribute("id", "bigContainer");
      CreatingGrid(8, 8, "bigContainerItems");
})