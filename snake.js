// variable diclaration

var cvs = document.getElementById("canvas").getContext("2d");
//snake
var sPosx = 80;
var sPosy = 80;
var nPosy = 0;
var nPosx = 0;

//fruit
var fPosx = 140;
var fPosy = 140;
// onload function
window.onload = function () {
  addEventListener("keydown", inputControl);
  setInterval(mainGame, 200);
};

// main game function

function mainGame() {
  //move snake
  sPosx += nPosx;
  sPosy += nPosy;

  //snake in frame
  if (sPosx > 400) {
    sPosx = 0;
  }
  if (sPosy > 400) {
    sPosy = 0;
  }
  if (sPosx < 0) {
    sPosx = 400;
  }
  if (sPosy < 0) {
    sPosy = 400;
  }

  //game area

  //bg-color

  cvs.fillStyle = "black";
  cvs.fillRect(0, 0, 400, 400);

  // CVS.moveTo(20, 0);
  //CVS.lineTo(20, 400);
  //CVS.stroke();
  //grid line

  for (var cl = 0; cl < 400; cl += 20) {
    cvs.moveTo(cl, 0);
    cvs.lineTo(cl, 400);
  }
  for (var rl = 0; rl < 400; rl += 20) {
    cvs.moveTo(0, rl);
    cvs.lineTo(400, rl);
  }
  cvs.strokeStyle = "gray";
  cvs.stroke();

  //snake
  cvs.fillStyle = "yellow";
  cvs.fillRect(sPosx, sPosy, 20, 20);

  //fruit

  cvs.fillStyle = "red";
  cvs.fillRect(fPosx, fPosy, 20, 20);

  // if snake eat fruit
  if (sPosx == fPosx && sPosy == fPosy) {
    fPosx = Math.floor(Math.random() * 20) * 20;
    fPosy = Math.floor(Math.random() * 20) * 20;
  }
}

//input controll

function inputControl(e) {
  console.log(e.keyCode);
  console.log(e.key);
  switch (e.keyCode) {
    case 37:
      //left
      nPosx -= 20;
      nPosy = 0;
      break;

    case 39:
      //right
      nPosx += 20;
      nPosy = 0;
      break;

    case 38:
      //up
      nPosy -= 20;
      nPosx = 0;
      break;

    case 40:
      //down
      nPosy += 20;
      nPosx = 0;
      break;
  }
}
