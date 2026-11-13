let oGameMenuMenuButton = {
  width: 500,
  height: 100,
  x: 175,
  y: 225,
  scale: 50,
  pressed: false,
};

let oGameMenuMuteButtonPos = {
  x: 220,
  y: 500,
};

let oGameMenuTransButtonPos = {
  x: 310,
  y: 500,
};

let oGameMenuCreditButtonPos = {
  x: 400,
  y: 500,
};

function gameMenuLoop() {
  gameLoop();

  gameMenuDisplay();
}

function gameMenuDisplay() {
  // DARKEN BACKGROUND
  oContext.fillStyle = "#00000082";
  oContext.fillRect(0, 0, oCanvas.width, oCanvas.height);

  oContext.fillStyle = "#000000c3";
  oContext.beginPath();
  oContext.moveTo(oCanvas.width / 6, 0);
  oContext.lineTo((oCanvas.width / 6) * 5, 0);
  oContext.lineTo((oCanvas.width / 6) * 5 - 60, oCanvas.height);
  oContext.lineTo(oCanvas.width / 6 - 60, oCanvas.height);
  oContext.closePath();
  oContext.fill();

  // QUIT BUTTON
  oGameMenuMenuButton.pressed = detectHover(
    nMousePosX,
    nMousePosY,
    oGameMenuMenuButton.x,
    oGameMenuMenuButton.y,
    oGameMenuMenuButton.width,
    oGameMenuMenuButton.height,
  );
  if (!oGameMenuMenuButton.pressed) {
    buttonStyle1(oGameMenuMenuButton.x, oGameMenuMenuButton.y, oGameMenuMenuButton.width, oGameMenuMenuButton.height, oGameMenuMenuButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "bold 50px " + sSansSerif;
    oContext.fillText(oTrans.gameMenuQuit, oGameMenuMenuButton.x + oGameMenuMenuButton.width / 2, oGameMenuMenuButton.y + 65);
  } else {
    buttonStyle2(oGameMenuMenuButton.x, oGameMenuMenuButton.y, oGameMenuMenuButton.width, oGameMenuMenuButton.height, oGameMenuMenuButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "bold 50px " + sSansSerif;
    oContext.fillText(
      oTrans.gameMenuQuit,
      oGameMenuMenuButton.x + oGameMenuMenuButton.width / 2,
      oGameMenuMenuButton.y + 65 + oGameMenuMenuButton.scale / 10,
    );
  }

  //   // Bouton de crédits
  //   oCreditButton.pressed = detectHover(
  //     nMousePosX,
  //     nMousePosY,
  //     oGameMenuCreditButtonPos.x,
  //     oGameMenuCreditButtonPos.y,
  //     oCreditButton.width,
  //     oCreditButton.height,
  //   );
  //   if (!oCreditButton.pressed) {
  //     buttonStyle1(oGameMenuCreditButtonPos.x, oGameMenuCreditButtonPos.y, oCreditButton.width, oCreditButton.height, oCreditButton.scale);
  //     oContext.fillStyle = "#3fe4d6";
  //     oContext.textAlign = "center";
  //     oContext.font = "bold 25px " + sSansSerif;
  //     oContext.fillText(oTrans.credit, oGameMenuCreditButtonPos.x + oCreditButton.width / 2 + 2, oGameMenuCreditButtonPos.y + 37);
  //   } else {
  //     buttonStyle2(oGameMenuCreditButtonPos.x, oGameMenuCreditButtonPos.y, oCreditButton.width, oCreditButton.height, oCreditButton.scale);
  //     oContext.fillStyle = "#3fe4d6";
  //     oContext.textAlign = "center";
  //     oContext.font = "bold 25px " + sSansSerif;
  //     oContext.fillText(
  //       oTrans.credit,
  //       oGameMenuCreditButtonPos.x + oCreditButton.width / 2 + 2,
  //       oGameMenuCreditButtonPos.y + 37 + oCreditButton.scale / 10,
  //     );
  //   }

  // Bouton couper l'audio
  oMuteButton.pressed = detectHover(
    nMousePosX,
    nMousePosY,
    oGameMenuMuteButtonPos.x,
    oGameMenuMuteButtonPos.y,
    oMuteButton.width,
    oMuteButton.height,
  );
  if (!oMuteButton.pressed) {
    buttonStyle1(oGameMenuMuteButtonPos.x, oGameMenuMuteButtonPos.y, oMuteButton.width, oMuteButton.height, oMuteButton.scale);
    if (!bMuted) {
      oContext.drawImage(oMuteButton.image, oGameMenuMuteButtonPos.x + 18, oGameMenuMuteButtonPos.y + 12, 35, 35);
    } else {
      oContext.drawImage(oMuteButton.imageMuted, oGameMenuMuteButtonPos.x + 18, oGameMenuMuteButtonPos.y + 12, 35, 35);
    }
  } else {
    buttonStyle2(oGameMenuMuteButtonPos.x, oGameMenuMuteButtonPos.y, oMuteButton.width, oMuteButton.height, oMuteButton.scale);
    if (!bMuted) {
      oContext.drawImage(oMuteButton.image, oGameMenuMuteButtonPos.x + 18, oGameMenuMuteButtonPos.y + 12 + oMuteButton.scale / 10, 35, 35);
    } else {
      oContext.drawImage(oMuteButton.imageMuted, oGameMenuMuteButtonPos.x + 18, oGameMenuMuteButtonPos.y + 12 + oMuteButton.scale / 10, 35, 35);
    }
  }

  // Bouton de traduction
  oTransButton.pressed = detectHover(
    nMousePosX,
    nMousePosY,
    oGameMenuTransButtonPos.x,
    oGameMenuTransButtonPos.y,
    oTransButton.width,
    oTransButton.height,
  );
  if (!oTransButton.pressed) {
    buttonStyle1(oGameMenuTransButtonPos.x, oGameMenuTransButtonPos.y, oTransButton.width, oTransButton.height, oTransButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "bold 25px " + sSansSerif;
    oContext.fillText(oTrans.lang, oGameMenuTransButtonPos.x + oTransButton.width / 2 + 2, oGameMenuTransButtonPos.y + 37);
  } else {
    buttonStyle2(oGameMenuTransButtonPos.x, oGameMenuTransButtonPos.y, oTransButton.width, oTransButton.height, oTransButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "bold 25px 'Kenney Future'";
    oContext.fillText(oTrans.lang, oGameMenuTransButtonPos.x + oTransButton.width / 2 + 2, oGameMenuTransButtonPos.y + 37 + oTransButton.scale / 10);
  }

  // Title
  oContext.textAlign = "left";
  oContext.fillStyle = "#3fe4d6";
  oContext.font = "bold 90px " + sSansSerif;
  oContext.fillText("Timergia", 180, 100);
  oContext.fillText("Casino", 175, 180);

  drawGameMenuX();
}

function drawGameMenuX() {
  let bHover = detectGameMenuMouse(nMousePosX, nMousePosY, oGameMenuMenuBar.x, oGameMenuMenuBar.y, oGameMenuMenuBar.width, oGameMenuMenuBar.height);

  if (bHover) {
    oContext.drawImage(oGameMenuMenuX.imagePressed, oGameMenuMenuBar.x, oGameMenuMenuBar.y, oGameMenuMenuBar.width, oGameMenuMenuBar.height);
  } else {
    oContext.drawImage(oGameMenuMenuX.image, oGameMenuMenuBar.x, oGameMenuMenuBar.y, oGameMenuMenuBar.width, oGameMenuMenuBar.height);
  }
}

//--------------------//
// GAME MENU ON CLICK //
//--------------------//
function gameMenuOnClick() {
  gameMenuClickDetect();

  gameMenuQuitOnClick();

  detectPlayClick();

  gameMenuDetectMuteClick();
  gameMenuDetectTransClick();
}

function gameMenuQuitOnClick() {
  let bClicked = detectClick(
    nMousePosX,
    nMousePosY,
    oGameMenuMenuButton.x,
    oGameMenuMenuButton.y,
    oGameMenuMenuButton.width,
    oGameMenuMenuButton.height,
  );

  if (bClicked) {
    sGameStatus = "menu";
  }
}

function gameMenuDetectMuteClick() {
  let bClicked = detectClick(nMousePosX, nMousePosY, oGameMenuMuteButtonPos.x, oGameMenuMuteButtonPos.y, oMuteButton.width, oMuteButton.height);

  if (bClicked && !bMuted) {
    bMuted = true;
  } else if (bClicked && bMuted) {
    bMuted = false;
  }
}

function gameMenuDetectTransClick() {
  let bClicked = detectClick(nMousePosX, nMousePosY, oGameMenuTransButtonPos.x, oGameMenuTransButtonPos.y, oTransButton.width, oTransButton.height);

  if (bClicked && lang === "fr") {
    lang = "en";
  } else if (bClicked && lang === "en") {
    lang = "ru";
  } else if (bClicked && lang === "ru") {
    lang = "fr";
  }
}
