// Creating variables
var hilka1X = 0,
  hilka1Y = 0;

var hilka2X = 730,
  hilka2Y = 0;

var dX = 1.5,
  dY = 1.5;

var top4eX = 0,
  top4eY = 600;

var to4ka1 = 0,
  to4ka2 = 0;

function stawa(x1, y1, s1, s2, x2, y2, s3, s4) {
  if (x1 + s2 > x2 && x1 < x2 + s3 && y1 + s2 > y2 && y1 < y2 + s4) {
    return true;
    console.log("gotin");
  }
}

function update() {
  console.log(to4ka1, " na ", to4ka2);
  if (isKeyPressed[83]) {
    hilka1Y = hilka1Y + 5;
  }
  if (isKeyPressed[87]) {
    hilka1Y = hilka1Y - 5;
  }
  if (isKeyPressed[40]) {
    hilka2Y = hilka2Y + 5;
  }
  if (isKeyPressed[38]) {
    hilka2Y = hilka2Y - 5;
  }
  // if(stawa( hilka1X, hilka1Y, hilka2X, hilka2Y ))
  top4eX = top4eX + dX;
  top4eY = top4eY + dY;
  if (top4eX + top4eY) increaseSpeed(dY);

  if (top4eY > 600) {
    dY = -dY;
  }
  if (stawa(top4eX, top4eY, 10, 10, hilka1X, hilka1Y, 20, 120)) {
    dX = -dX;
  }
  if (stawa(top4eX, top4eY, 10, 10, hilka2X, hilka2Y, 20, 120)) {
    dX = -dX;
  }
  if (top4eX < 0) {
    to4ka2 = to4ka2 + 1;
    top4eX = 400;
    top4eY = 300;
    dX = 0;
    dY = 0;
  }
  if (top4eX > 800) {
    to4ka1 = to4ka1 + 1;
    top4eX = 400;
    top4eY = 300;
    dX = 0;
    dY = 0;
  }
  if (to4ka1 == 10) {
    top4eX = 1000;
    top4eY = 1001;
    console.log("game over");
  }
  if (to4ka2 == 10) {
    top4eX = 1000;
    top4eY = 1001;
    console.log("game over");
  }
}

function increaseSpeed(direction) {
  console.log(direction);

  if (top4eY < 0) {
    dY = -dY;
    if (dY >= 0) {
      dY += +0.5;
    } else {
      dY -= -0.5;
    }
  }
}

function draw() {
  // This is how you draw a rectangle
  context.fillRect(hilka1X, hilka1Y, 20, 120);
  context.fillRect(hilka2X, hilka2Y, 20, 120);
  context.fillRect(top4eX, top4eY, 10, 10);
}

function keyup(key) {
  // Show the pressed keycode in the console
  console.log("Pressed", key);
}

function mouseup() {
  // Show coordinates of mouse on click
  console.log("Mouse clicked at", mouseX, mouseY);
  if (dX == 0) {
    dX = 1.5;
    dY = 1.5;
  }
}
