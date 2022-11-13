// requirements:
// must have user inputs: start stop keypresses
// must have animations
// must have clear and consistent theme
// must be uploaded to github


function initializeBoard(width, height) {
  // initialize divs and style with css
  let thisdiv = document.getElementsByClassName("game")[0];

  for (let i = 0; i < (width * height); i++) {
    let newDiv = document.createElement("div");
    thisdiv.appendChild(newDiv);
  }
  document.styleSheets[0].insertRule(".game > div { border: .5px       lightgray solid; margin: 0px; width: 30px; height: 29px;  }")

  console.log(thisdiv);
}

function draw(context, color, x, y) {
  // draw piece on the canvas at the given position
  context.fillStyle = color;
  context.fillRect(x, y, 30, 30);
}

function gamePlay() {
  
  let canvas = document.getElementsByClassName("game-board")[0];
  let context = canvas.getContext("2d");
  
  draw(context, "purple", 0, 575);
  draw(context, "purple", 30, 575);
  draw(context, "purple", 60, 575);
  draw(context, "purple", 30, 545);

  setTimeout(function() {
    draw(context, "red", 90, 575);
    draw(context, "red", 120, 575);
    draw(context, "red", 60, 545);
    draw(context, "red", 90, 545);
  }, 1000);


  setTimeout(function() {
    draw(context, "lightblue", 150, 575);
    draw(context, "lightblue", 180, 575);
    draw(context, "lightblue", 210, 575);
    draw(context, "iightblue", 240, 575);
  }, 1500);

  setTimeout(function() {
    draw(context, "orange", 30, 515);
    draw(context, "orange", 60, 515);
    draw(context, "orange", 30, 484);
    draw(context, "orange", 30, 453.5);
  }, 2000);

  setTimeout(function() {
    draw(context, "lightgreen", 30, 423);
    draw(context, "lightgreen", 30, 392);
    draw(context, "lightgreen", 60, 392);
    draw(context, "lightgreen", 60, 362);
  }, 2500);

  setTimeout(function() {
    draw(context, "blue", 60, 332);
    draw(context, "blue", 60, 302);
    draw(context, "blue", 90, 332);
    draw(context, "blue", 120, 332);
  }, 3000);
  
  setTimeout(function() {
    draw(context, "red", 150, 332);
    draw(context, "red", 180, 332);
    draw(context, "red", 120, 302);
    draw(context, "red", 150, 302);
  }, 3500);

  setTimeout(function() {
    draw(context, "lightblue", 150, 272);
    draw(context, "lightblue", 150, 242);
    draw(context, "lightblue", 150, 212);
    draw(context, "iightblue", 150, 184);
  }, 4000);

  setTimeout(function() {
    draw(context, "yellow", 150, 154);
    draw(context, "yellow", 120, 154);
    draw(context, "yellow", 150, 124);
    draw(context, "yellow", 120, 124);
    // THIS LINE is important
    context.translate(60, -80);
  }, 4500);
  

  setTimeout(function() {
    draw(context, "purple", 0, 575);
    draw(context, "purple", 30, 575);
    draw(context, "purple", 60, 575);
    draw(context, "purple", 30, 545);
  }, 5000)

  setTimeout(function() {
    draw(context, "red", 90, 575);
    draw(context, "red", 120, 575);
    draw(context, "red", 60, 545);
    draw(context, "red", 90, 545);
  }, 5500);


  setTimeout(function() {
    draw(context, "lightblue", 150, 575);
    draw(context, "lightblue", 180, 575);
    draw(context, "lightblue", 210, 575);
    draw(context, "iightblue", 240, 575);
  }, 6000);

  setTimeout(function() {
    draw(context, "orange", 30, 515);
    draw(context, "orange", 60, 515);
    draw(context, "orange", 30, 484);
    draw(context, "orange", 30, 453.5);
  }, 6500);

  setTimeout(function() {
    draw(context, "lightgreen", 30, 423);
    draw(context, "lightgreen", 30, 392);
    draw(context, "lightgreen", 60, 392);
    draw(context, "lightgreen", 60, 362);
  }, 7000);

  // prompt game over
  setTimeout(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.translate(-60, 80);
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, 15000);
  
}


// need to know width and height of board
const width = 10;
const height = 20;
initializeBoard(width, height);



document.getElementsByClassName("play-button")[0].addEventListener("click", gamePlay);

