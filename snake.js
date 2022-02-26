// variable diclaration

var cvs = document.getElementById("canvas").getContext("2d");

// onload function
window.onload = function () {
  mainGame();
};

// main game function

function mainGame() {
  //game area

  //bg-color

  cvs.fillstyle = "red";
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
}

//input controll
