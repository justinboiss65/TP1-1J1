let sCreditsSource;

function creditsLoop() {
  oContext.drawImage(oGameBg, 0, 0);

  oContext.font = "90px " + sSansSerif;
  oContext.textAlign = "left";
  oContext.fillText(`${oTrans.credit}`, 100, 150);

  oContext.font = "20px " + sSansSerif;
  oContext.fillText(`${oTrans.coder}: Justin Boissonneault`, 100, 200);
  oContext.fillText(`${oTrans.asseter}: Justin Boissonneault`, 100, 235);
  oContext.fillText(`${oTrans.mather}: Stéphane Delatre`, 100, 270);
  oContext.fillText(`${oTrans.translator}:`, 100, 305);
  oContext.fillText(`Justin Boissonneault`, 125, 330);
  oContext.fillText(`davthegl1tchy0ne`, 125, 355);

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
