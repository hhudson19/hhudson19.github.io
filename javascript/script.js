// requirements:
// must have user inputs: start stop keypresses
// must have animations
// must have clear and consistent theme
// must be uploaded to github

// thisdiv.style.setProperty("background-color", "yellow");
/*
class Board {  
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = this.getEmptyBoard();
    this.piece = new Piece(ctx);    
  }
}
*/

// define tetrominoes
class Piece {  
  constructor() {
    let shape = [
      [[0][0][0]],
      [[1][1][1]],
      [[0][0][1]]
    ];
  }

  printShape() {
    console.log(this.shape);
  }
/*
  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {  
      row.forEach((value, x) => {  
        if (value > 0) {  
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);  
        }  
      });  
    });  
  }*/
}



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

let canvas = document.getElementsByClassName("game-board")[0];
let context = canvas.getContext("2d");

context.fillStyle = "orange";
context.fillRect(30, 30, 30, 30);

context.fillStyle = "blue";
context.fillRect(60, 30, 30, 30);

context.strokeStyle = "royalblue";
context.lineWidth = 6; 
context.strokeRect(120, 30, 100, 40);

/*
context.beginPath();
context.moveTo(100, 10);
context.lineTo(50, 90);
//context.moveTo(150, 90);
context.lineTo(150, 10);
context.closePath();
context.fillStyle = "pink";
context.fill();
context.lineWidth = 5;
context.strokeStyle = "purple";
context.stroke();
*/


// need to know width and height of board
const width = 10;
const height = 20;
const divSize = 30;
initializeBoard(width, height);


let tetrominoe = new Piece;
tetrominoe.printShape;

// define behavior of tetrominoies

// define row removal/points behavior

// define pre viewing tetrominoes

// define saving a tetrominoe

// define timing of tetrominoes/falling/speeding up
