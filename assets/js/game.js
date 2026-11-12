let oGameUI = new Image();
oGameUI.src = "../assets/img/game_ui.webp";

let oGameBg = new Image();
oGameBg.src = "../assets/img/game_bg.webp";

let oRedButton = {
  x: 470,
  y: 517,
  width: 58,
  height: 28,
  image: new Image(),
  src: "../assets/img/red_button.svg",
  imagePressed: new Image(),
  srcPressed: "../assets/img/red_button_pressed.svg",
};
oRedButton.image.src = oRedButton.src;
oRedButton.imagePressed.src = oRedButton.srcPressed;

function gameLoop() {
  gameDisplay();
}

function gameDisplay() {
  oContext.drawImage(oGameBg, 0, 0);
  oContext.drawImage(oGameUI, 0, 0);

  gameDrawRedButton();
}

function gameDrawRedButton() {
  let bHover = detectHover(nMousePosX, nMousePosY, oRedButton.x, oRedButton.y, oRedButton.width, oRedButton.height);

  if (bHover) {
    oContext.drawImage(oRedButton.imagePressed, oRedButton.x, oRedButton.y, oRedButton.width, oRedButton.height);
  } else {
    oContext.drawImage(oRedButton.image, oRedButton.x, oRedButton.y, oRedButton.width, oRedButton.height);
  }
}
