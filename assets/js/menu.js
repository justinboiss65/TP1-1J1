function menuLoop() {
  oContext.fillStyle = "#e84747";
  oContext.fillRect(0, 0, oCanvas.width, oCanvas.width);

  // Play button
  if (!oMenuPlayButton.pressed) {
    buttonStyle1(oMenuPlayButton.x, oMenuPlayButton.y, oMenuPlayButton.width, oMenuPlayButton.height);
  } else {
    buttonStyle2(oMenuPlayButton.x, oMenuPlayButton.y, oMenuPlayButton.width, oMenuPlayButton.height);
  }

  // Setting button
  if (!oMenuSettingButton.pressed) {
    buttonStyle1(oMenuSettingButton.x, oMenuSettingButton.y, oMenuSettingButton.width, oMenuSettingButton.height);
  } else {
    buttonStyle2(oMenuSettingButton.x, oMenuSettingButton.y, oMenuSettingButton.width, oMenuSettingButton.height);
  }

  // Title
  oContext.textAlign = "right";
  oContext.fillStyle = "#fff";
  oContext.font = "70px 'Kenney Future'";
  oContext.fillText("Timergia", oCanvas.width - 50, 200);
  oContext.fillText("Casino", oCanvas.width - 50, 270);

  // TIM-EE
  oMenuTimEE.animTime++;
  if (oMenuTimEE.animTime >= 0 && oMenuTimEE.animTime < 120) {
    oMenuTimEE.y = oMenuTimEE.y + 0.25;
  } else if (oMenuTimEE.animTime >= 120 && oMenuTimEE.animTime < 240) {
    oMenuTimEE.y = oMenuTimEE.y - 0.25;
  } else if (oMenuTimEE.animTime == 240) {
    oMenuTimEE.animTime = 0;
  }
  oContext.drawImage(oMenuTimEE.image, oMenuTimEE.x, oMenuTimEE.y, oMenuTimEE.width, oMenuTimEE.height);
}

function menuDetectHover(nMousePosX, nMousePosY) {
  if (
    nMousePosX >= oMenuPlayButton.x &&
    nMousePosX <= oMenuPlayButton.x + oMenuPlayButton.width &&
    nMousePosY >= oMenuPlayButton.y &&
    nMousePosY <= oMenuPlayButton.y + oMenuPlayButton.height
  ) {
    oMenuPlayButton.pressed = true;
  } else {
    oMenuPlayButton.pressed = false;
  }
  if (
    nMousePosX >= oMenuSettingButton.x &&
    nMousePosX <= oMenuSettingButton.x + oMenuSettingButton.width &&
    nMousePosY >= oMenuSettingButton.y &&
    nMousePosY <= oMenuSettingButton.y + oMenuSettingButton.height
  ) {
    oMenuSettingButton.pressed = true;
  } else {
    oMenuSettingButton.pressed = false;
  }
}
