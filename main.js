const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
let jumpCounter = 0;

document.addEventListener("keydown", function (event) {
  jump();
  jumpCounter += 1;
});

function jump () {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 500)
}


let setLive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
  if (dinoTop === 150 && cactusLeft < 50) {
    alert("ПОПАВСЬ!!! " + jumpCounter + " раз прыгнул как кролик");
    jumpCounter = 0;
  }
},10);
