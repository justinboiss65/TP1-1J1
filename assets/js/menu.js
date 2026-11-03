function menuLoop() {
  oContext.fillStyle = "#e84747";
  oContext.fillRect(0, 0, oCanvas.width, oCanvas.width);

  // Bouton jouer
  oMenuPlayButton.pressed = detectHover(nMousePosX, nMousePosY, oMenuPlayButton.x, oMenuPlayButton.y, oMenuPlayButton.width, oMenuPlayButton.height);
  if (!oMenuPlayButton.pressed) {
    buttonStyle1(oMenuPlayButton.x, oMenuPlayButton.y, oMenuPlayButton.width, oMenuPlayButton.height, oMenuPlayButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "50px " + sSansSerif;
    oContext.fillText(oTrans.menuPlay, oMenuPlayButton.x + oMenuPlayButton.width / 2, oMenuPlayButton.y + 65);
  } else {
    buttonStyle2(oMenuPlayButton.x, oMenuPlayButton.y, oMenuPlayButton.width, oMenuPlayButton.height, oMenuPlayButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "50px " + sSansSerif;
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
    oContext.font = "50px " + sSansSerif;
    oContext.fillText(oTrans.menuSetting, oMenuSettingButton.x + oMenuSettingButton.width / 2, oMenuSettingButton.y + 65);
  } else {
    buttonStyle2(oMenuSettingButton.x, oMenuSettingButton.y, oMenuSettingButton.width, oMenuSettingButton.height, oMenuSettingButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "50px " + sSansSerif;
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
    oContext.font = "25px " + sSansSerif;
    oContext.fillText(oTrans.credit, oCreditButton.x + oCreditButton.width / 2 + 2, oCreditButton.y + 37);
  } else {
    buttonStyle2(oCreditButton.x, oCreditButton.y, oCreditButton.width, oCreditButton.height, oCreditButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "25px " + sSansSerif;
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
    oContext.font = "25px " + sSansSerif;
    oContext.fillText(oTrans.lang, oTransButton.x + oTransButton.width / 2 + 2, oTransButton.y + 37);
  } else {
    buttonStyle2(oTransButton.x, oTransButton.y, oTransButton.width, oTransButton.height, oTransButton.scale);
    oContext.fillStyle = "#3fe4d6";
    oContext.textAlign = "center";
    oContext.font = "25px 'Kenney Future'";
    oContext.fillText(oTrans.lang, oTransButton.x + oTransButton.width / 2 + 2, oTransButton.y + 37 + oTransButton.scale / 10);
  }

  // Title
  oContext.textAlign = "right";
  oContext.fillStyle = "#fff";
  oContext.font = "70px " + sSansSerif;
  oContext.fillText("Timergia", oCanvas.width - 50, 200);
  oContext.fillText("Casino", oCanvas.width - 50, 270);

  // TIM-EE
  oMenuTimEE.animTime++;
  if (oMenuTimEE.animTime == 1) {
    oMenuTimEE.y = -60;
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
  let bMuteClicked = detectClick(nMousePosX, nMousePosY, oMuteButton.x, oMuteButton.y, oMuteButton.width, oMuteButton.height);

  let bTransClicked = detectClick(nMousePosX, nMousePosY, oTransButton.x, oTransButton.y, oTransButton.width, oTransButton.height);

  if (bTransClicked && lang === "fr") {
    lang = "en";
  } else if (bTransClicked && lang === "en") {
    lang = "ru";
  } else if (bTransClicked && lang === "ru") {
    lang = "fr";
  }

  if (bMuteClicked && !bMuted) {
    bMuted = true;
  } else if (bMuteClicked && bMuted) {
    bMuted = false;
  }
}
