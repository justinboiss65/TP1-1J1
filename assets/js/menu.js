let oMenuTimEE = {
  width: 400,
  height: 341,
  x: -60,
  y: -80,
  rotation: -42,
  animTime: 0,
  image: new Image(),
  src: "./assets/img/menuTimEE.svg",
};
oMenuTimEE.image.src = oMenuTimEE.src;

let oMenuPlayButton = {
  width: 500,
  height: 100,
  x: 0,
  y: 325,
  scale: 50,
  pressed: false,
};
oMenuPlayButton.x = (oCanvas.width / 3) * 2 - oMenuPlayButton.width / 2;

let oMenuSettingButton = {
  width: 500,
  height: 100,
  x: 0,
  y: 450,
  scale: 50,
  pressed: false,
};
oMenuSettingButton.x = (oCanvas.width / 3) * 2 - oMenuSettingButton.width / 2;

function menuLoop() {
  oContext.drawImage(oGameBg, 0, 0);

  // Bouton jouer
  oMenuPlayButton.pressed = detectHover(nMousePosX, nMousePosY, oMenuPlayButton.x, oMenuPlayButton.y, oMenuPlayButton.width, oMenuPlayButton.height);
  if (!oMenuPlayButton.pressed) {
    buttonStyle1(oMenuPlayButton.x, oMenuPlayButton.y, oMenuPlayButton.width, oMenuPlayButton.height, oMenuPlayButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "bold 50px " + sSansSerif;
    oContext.fillText(oTrans.menuPlay, oMenuPlayButton.x + oMenuPlayButton.width / 2, oMenuPlayButton.y + 65);
  } else {
    buttonStyle2(oMenuPlayButton.x, oMenuPlayButton.y, oMenuPlayButton.width, oMenuPlayButton.height, oMenuPlayButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "bold 50px " + sSansSerif;
    oContext.fillText(oTrans.menuPlay, oMenuPlayButton.x + oMenuPlayButton.width / 2, oMenuPlayButton.y + 65 + oMenuPlayButton.scale / 10);
  }

  // Bouton de paramêtre
  oMenuSettingButton.pressed = detectHover(
    nMousePosX,
    nMousePosY,
    oMenuSettingButton.x,
    oMenuSettingButton.y,
    oMenuSettingButton.width,
    oMenuSettingButton.height,
  );
  if (!oMenuSettingButton.pressed) {
    buttonStyle1(oMenuSettingButton.x, oMenuSettingButton.y, oMenuSettingButton.width, oMenuSettingButton.height, oMenuSettingButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "bold 50px " + sSansSerif;
    oContext.fillText(oTrans.menuSetting, oMenuSettingButton.x + oMenuSettingButton.width / 2, oMenuSettingButton.y + 65);
  } else {
    buttonStyle2(oMenuSettingButton.x, oMenuSettingButton.y, oMenuSettingButton.width, oMenuSettingButton.height, oMenuSettingButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "bold 50px " + sSansSerif;
    oContext.fillText(
      oTrans.menuSetting,
      oMenuSettingButton.x + oMenuSettingButton.width / 2,
      oMenuSettingButton.y + 65 + oMenuSettingButton.scale / 10,
    );
  }

  // Bouton de crédits
  oCreditButton.pressed = detectHover(nMousePosX, nMousePosY, oCreditButton.x, oCreditButton.y, oCreditButton.width, oCreditButton.height);
  if (!oCreditButton.pressed) {
    buttonStyle1(oCreditButton.x, oCreditButton.y, oCreditButton.width, oCreditButton.height, oCreditButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "bold 25px " + sSansSerif;
    oContext.fillText(oTrans.credit, oCreditButton.x + oCreditButton.width / 2 + 2, oCreditButton.y + 37);
  } else {
    buttonStyle2(oCreditButton.x, oCreditButton.y, oCreditButton.width, oCreditButton.height, oCreditButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "bold 25px " + sSansSerif;
    oContext.fillText(oTrans.credit, oCreditButton.x + oCreditButton.width / 2 + 2, oCreditButton.y + 37 + oCreditButton.scale / 10);
  }

  // Bouton couper l'audio
  oMuteButton.pressed = detectHover(nMousePosX, nMousePosY, oMuteButton.x, oMuteButton.y, oMuteButton.width, oMuteButton.height);
  if (!oMuteButton.pressed) {
    buttonStyle1(oMuteButton.x, oMuteButton.y, oMuteButton.width, oMuteButton.height, oMuteButton.scale);
    if (!bMuted) {
      oContext.drawImage(oMuteButton.image, oMuteButton.x + 18, oMuteButton.y + 12, 35, 35);
    } else {
      oContext.drawImage(oMuteButton.imageMuted, oMuteButton.x + 18, oMuteButton.y + 12, 35, 35);
    }
  } else {
    buttonStyle2(oMuteButton.x, oMuteButton.y, oMuteButton.width, oMuteButton.height, oMuteButton.scale);
    if (!bMuted) {
      oContext.drawImage(oMuteButton.image, oMuteButton.x + 18, oMuteButton.y + 12 + oMuteButton.scale / 10, 35, 35);
    } else {
      oContext.drawImage(oMuteButton.imageMuted, oMuteButton.x + 18, oMuteButton.y + 12 + oMuteButton.scale / 10, 35, 35);
    }
  }

  // Bouton de traduction
  oTransButton.pressed = detectHover(nMousePosX, nMousePosY, oTransButton.x, oTransButton.y, oTransButton.width, oTransButton.height);
  if (!oTransButton.pressed) {
    buttonStyle1(oTransButton.x, oTransButton.y, oTransButton.width, oTransButton.height, oTransButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "bold 25px " + sSansSerif;
    oContext.fillText(oTrans.lang, oTransButton.x + oTransButton.width / 2 + 2, oTransButton.y + 37);
  } else {
    buttonStyle2(oTransButton.x, oTransButton.y, oTransButton.width, oTransButton.height, oTransButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "bold 25px 'Kenney Future'";
    oContext.fillText(oTrans.lang, oTransButton.x + oTransButton.width / 2 + 2, oTransButton.y + 37 + oTransButton.scale / 10);
  }

  // Title
  oContext.textAlign = "right";
  oContext.fillStyle = "#3fe4d6";
  oContext.font = "bold 90px " + sSansSerif;
  oContext.fillText("Timergia", oCanvas.width - 50, 210);
  oContext.fillText("Casino", oCanvas.width - 50, 290);

  // TIM-EE
  oMenuTimEE.animTime++;
  if (oMenuTimEE.animTime == 1) {
    oMenuTimEE.y = -80;
  } else if (oMenuTimEE.animTime > 1 && oMenuTimEE.animTime < 120) {
    oMenuTimEE.y = oMenuTimEE.y + 0.25;
  } else if (oMenuTimEE.animTime >= 120 && oMenuTimEE.animTime < 240) {
    oMenuTimEE.y = oMenuTimEE.y - 0.25;
  } else if (oMenuTimEE.animTime == 240) {
    oMenuTimEE.animTime = 0;
  }
  oContext.drawImage(oMenuTimEE.image, oMenuTimEE.x, oMenuTimEE.y, oMenuTimEE.width, oMenuTimEE.height);
}

function menuOnCick() {
  detectMuteClick();
  detectTransClick();

  detectPlayClick();
}

function detectMuteClick() {
  let bMuteClicked = detectClick(nMousePosX, nMousePosY, oMuteButton.x, oMuteButton.y, oMuteButton.width, oMuteButton.height);

  if (bMuteClicked && !bMuted) {
    bMuted = true;
  } else if (bMuteClicked && bMuted) {
    bMuted = false;
  }
}

function detectTransClick() {
  let bTransClicked = detectClick(nMousePosX, nMousePosY, oTransButton.x, oTransButton.y, oTransButton.width, oTransButton.height);

  if (bTransClicked && lang === "fr") {
    lang = "en";
  } else if (bTransClicked && lang === "en") {
    lang = "ru";
  } else if (bTransClicked && lang === "ru") {
    lang = "fr";
  }
}

function detectPlayClick() {
  let bPlayClicked = detectClick(nMousePosX, nMousePosY, oMenuPlayButton.x, oMenuPlayButton.y, oMenuPlayButton.width, oMenuPlayButton.height);

  if (bPlayClicked) {
    bGameFocused = true;
    sGameStatus = "game";
  }
}
