// variable diclaration

var cvs = document.getElementById("canvas").getContext("2d");
var sposx = 80;
var sposy = 80;

// onload function
window.onload = function () {
  addEventListener("keydown", inputControl);
  setInterval(mainGame, 200);
};

// main game function

function mainGame() {
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
  cvs.fillRect(sposx, sposy, 20, 20);

  //fruit

  cvs.fillStyle = "red";
  cvs.fillRect(140, 140, 20, 20);
}

//input controll

function inputControl(e) {
  console.log(e.keyCode);
  console.log(e.key);
  switch (e.keyCode) {
    case 37:
      //left
      sposx -= 20;
      break;

    case 39:
      //right
      sposx += 20;
      break;

    case 38:
      //up
      sposy -= 20;
      break;

    case 40:
      //down
      sposy += 20;
      break;
  }
}
