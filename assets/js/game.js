//-----------//
// VARIABLES //
//-----------//

// GAME VARIABLE

// INTERFACE ELEMENTS
let oGameUI = new Image();
oGameUI.src = "./assets/img/game_ui.webp";

let oRedButton = {
  x: 470,
  y: 517,
  width: 58,
  height: 28,
  image: new Image(),
  src: "./assets/img/red_button.svg",
  imagePressed: new Image(),
  srcPressed: "./assets/img/red_button_pressed.svg",
};
oRedButton.image.src = oRedButton.src;
oRedButton.imagePressed.src = oRedButton.srcPressed;

let oCable1 = {
  x: 172,
  y: 128,
  width: 196,
  height: 475,
  image: new Image(),
  src: "./assets/img/cable_1.svg",

  visible: true,
};
oCable1.image.src = oCable1.src;

let oCable2 = {
  x: 168,
  y: 307,
  width: 226,
  height: 296,
  image: new Image(),
  src: "./assets/img/cable_2.svg",

  visible: true,
};
oCable2.image.src = oCable2.src;

let oCable3 = {
  x: 168,
  y: 473,
  width: 217,
  height: 129,
  image: new Image(),
  src: "./assets/img/cable_3.svg",

  visible: true,
};
oCable3.image.src = oCable3.src;

let oGameMenuMenuBar = {
  x: 0,
  y: 0,
  width: 90,
  height: 57,
  image: new Image(),
  src: "./assets/img/gameMenuBar.webp",
  imagePressed: new Image(),
  srcPressed: "./assets/img/gameMenuBarPressed.webp",
};
oGameMenuMenuBar.image.src = oGameMenuMenuBar.src;
oGameMenuMenuBar.imagePressed.src = oGameMenuMenuBar.srcPressed;

let oGameMenuMenuX = {
  x: 0,
  y: 0,
  width: 90,
  height: 57,
  image: new Image(),
  src: "./assets/img/gameMenuX.webp",
  imagePressed: new Image(),
  srcPressed: "./assets/img/gameMenuXPressed.webp",
};
oGameMenuMenuX.image.src = oGameMenuMenuX.src;
oGameMenuMenuX.imagePressed.src = oGameMenuMenuX.srcPressed;

//-----------//
// GAME LOOP //
//-----------//
function gameLoop() {
  gameDisplay();
}

function gameDisplay() {
  oContext.drawImage(oGameBg, 0, 0);

  // DISPLAY CABLES
  drawCable(oCable1);
  drawCable(oCable2);
  drawCable(oCable3);

  drawGameMenuBar();

  oContext.drawImage(oGameUI, 0, 0);

  gameDrawRedButton();
}

function drawCable(data) {
  if (data.visible) {
    oContext.drawImage(data.image, data.x, data.y, data.width, data.height);
  }
}

function drawGameMenuBar() {
  let bHover = detectGameMenuMouse(nMousePosX, nMousePosY, oGameMenuMenuBar.x, oGameMenuMenuBar.y, oGameMenuMenuBar.width, oGameMenuMenuBar.height);

  if (bHover) {
    oContext.drawImage(oGameMenuMenuBar.imagePressed, oGameMenuMenuBar.x, oGameMenuMenuBar.y, oGameMenuMenuBar.width, oGameMenuMenuBar.height);
  } else {
    oContext.drawImage(oGameMenuMenuBar.image, oGameMenuMenuBar.x, oGameMenuMenuBar.y, oGameMenuMenuBar.width, oGameMenuMenuBar.height);
  }
}

function gameDrawRedButton() {
  let bHover = false;
  if (sGameStatus === "game") {
    bHover = detectMouse(nMousePosX, nMousePosY, oRedButton.x, oRedButton.y, oRedButton.width, oRedButton.height);
  }

  if (bHover) {
    oContext.drawImage(oRedButton.imagePressed, oRedButton.x, oRedButton.y, oRedButton.width, oRedButton.height);
  } else {
    oContext.drawImage(oRedButton.image, oRedButton.x, oRedButton.y, oRedButton.width, oRedButton.height);
  }
}

function detectGameMenuMouse(nMousePosX, nMousePosY, nObjectX, nObjectY, nObjectWidth, nObjectHeight) {
  if (
    nMousePosX >= nObjectX &&
    nMousePosY + ((nObjectY + 57) * nMousePosX) / 38 <= ((nObjectX + 90) * (nObjectY + 57)) / 38 &&
    nMousePosY >= nObjectY &&
    nMousePosY <= nObjectY + nObjectHeight
  ) {
    return true;
  } else {
    return false;
  }
}

//---------------//
// GAME ON CLICK //
//---------------//
function gameOnClick() {
  gameMenuClickDetect();
}

function gameMenuClickDetect() {
  let bClicked = detectGameMenuMouse(nMousePosX, nMousePosY, oGameMenuMenuBar.x, oGameMenuMenuBar.y, oGameMenuMenuBar.width, oGameMenuMenuBar.height);

  if (bClicked) {
    if (sGameStatus === "game") {
      sGameStatus = "gameMenu";
    } else {
      sGameStatus = "game";
    }
  }
}

function gameOnKeyUp(event) {
  if (event.key === "Escape") {
    sGameStatus = "gameMenu";
  }
}
