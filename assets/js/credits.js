let sCreditsSource;

function creditsLoop() {
  oContext.drawImage(oGameBg, 0, 0);

  oContext.font = "90px " + sSansSerif;
  oContext.textAlign = "left";
  oContext.fillStyle = "#3fe4d6";
  oContext.fillText(`${oTrans.credit}`, 50, 150);

  oContext.font = "20px " + sSansSerif;
  oContext.fillStyle = "#aeb6df";
  oContext.fillText(`${oTrans.coder}`, 50, 200);
  oContext.fillText(`${oTrans.asseter}`, 50, 235);
  oContext.fillText(`${oTrans.mather}`, 50, 270);
  oContext.fillText(`${oTrans.translator}`, 50, 305);
  oContext.fillText(`${oTrans.translator1}`, 75, 330);
  oContext.fillText(`${oTrans.translator2}`, 75, 355);

  drawGameMenuX();
}

function creditsOnClick() {
  let bClicked = detectGameMenuMouse(nMousePosX, nMousePosY, oGameMenuMenuBar.x, oGameMenuMenuBar.y, oGameMenuMenuBar.width, oGameMenuMenuBar.height);

  if (bClicked) {
    if (sCreditsSource === "game") {
      sGameStatus = "gameMenu";
    } else {
      sGameStatus = "menu";
    }
  }
}

function creditsOnKeyUp(event) {
  if (event.key === "Escape") {
    if (sCreditsSource === "game") {
      sGameStatus = "gameMenu";
    } else {
      sGameStatus = "menu";
    }
  }
}
