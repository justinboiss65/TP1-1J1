const oCanvas = document.getElementById("canvas");
const oContext = oCanvas.getContext("2d");

let sGameStatus = "menu"; // menu, settings, game

// Menu

let oMenuTimEE = {
  width: 437,
  height: 373,
  x: -20,
  y: -60,
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
  pressed: false,
};
oMenuPlayButton.x = (oCanvas.width / 3) * 2 - oMenuPlayButton.width / 2;

let oMenuSettingButton = {
  width: 500,
  height: 100,
  x: 0,
  y: 450,
  pressed: false,
};
oMenuSettingButton.x = (oCanvas.width / 3) * 2 - oMenuSettingButton.width / 2;

let oButtonStyle1 = {
  1: {
    image: new Image(),
    src: "./assets/img/button1Layout/1.svg",
  },
  2: {
    image: new Image(),
    src: "./assets/img/button1Layout/2.jpg",
  },
  3: {
    image: new Image(),
    src: "./assets/img/button1Layout/3.svg",
  },
  4: {
    image: new Image(),
    src: "./assets/img/button1Layout/4.jpg",
  },
  5: {
    image: new Image(),
    src: "./assets/img/button1Layout/5.jpg",
  },
  6: {
    image: new Image(),
    src: "./assets/img/button1Layout/6.jpg",
  },
  7: {
    image: new Image(),
    src: "./assets/img/button1Layout/7.svg",
  },
  8: {
    image: new Image(),
    src: "./assets/img/button1Layout/8.jpg",
  },
  9: {
    image: new Image(),
    src: "./assets/img/button1Layout/9.svg",
  },
};
oButtonStyle1[1].image.src = oButtonStyle1[1].src;
oButtonStyle1[2].image.src = oButtonStyle1[2].src;
oButtonStyle1[3].image.src = oButtonStyle1[3].src;
oButtonStyle1[4].image.src = oButtonStyle1[4].src;
oButtonStyle1[5].image.src = oButtonStyle1[5].src;
oButtonStyle1[6].image.src = oButtonStyle1[6].src;
oButtonStyle1[7].image.src = oButtonStyle1[7].src;
oButtonStyle1[8].image.src = oButtonStyle1[8].src;
oButtonStyle1[9].image.src = oButtonStyle1[9].src;

let oButtonStyle2 = {
  1: {
    image: new Image(),
    src: "./assets/img/button2Layout/1.svg",
  },
  2: {
    image: new Image(),
    src: "./assets/img/button2Layout/2.jpg",
  },
  3: {
    image: new Image(),
    src: "./assets/img/button2Layout/3.svg",
  },
  4: {
    image: new Image(),
    src: "./assets/img/button2Layout/4.jpg",
  },
  5: {
    image: new Image(),
    src: "./assets/img/button2Layout/5.jpg",
  },
  6: {
    image: new Image(),
    src: "./assets/img/button2Layout/6.jpg",
  },
  7: {
    image: new Image(),
    src: "./assets/img/button2Layout/7.svg",
  },
  8: {
    image: new Image(),
    src: "./assets/img/button2Layout/8.png",
  },
  9: {
    image: new Image(),
    src: "./assets/img/button2Layout/9.svg",
  },
};
oButtonStyle2[1].image.src = oButtonStyle2[1].src;
oButtonStyle2[2].image.src = oButtonStyle2[2].src;
oButtonStyle2[3].image.src = oButtonStyle2[3].src;
oButtonStyle2[4].image.src = oButtonStyle2[4].src;
oButtonStyle2[5].image.src = oButtonStyle2[5].src;
oButtonStyle2[6].image.src = oButtonStyle2[6].src;
oButtonStyle2[7].image.src = oButtonStyle2[7].src;
oButtonStyle2[8].image.src = oButtonStyle2[8].src;
oButtonStyle2[9].image.src = oButtonStyle2[9].src;

window.addEventListener("load", init);

function init() {
  oCanvas.addEventListener("click", onClick);
  oCanvas.addEventListener("mousemove", onMouseMove);

  setInterval(globalLoop, 1000 / 60);
}

function globalLoop() {
  switch (sGameStatus) {
    case "menu":
      menuLoop();
      break;
    case "game":
      gameLoop();
      break;
  }
}

function onClick(event) {}

function onMouseMove(event) {
  /*   let nOfsetX = window.screen.width / 2 - oCanvas.width / 2;
  let nOfsetY = window.screen.height / 2 - oCanvas.height / 2; */

  // console.log(nOfsetX + " " + nOfsetY);

  let nMousePosX = event.offsetX; /* - nOfsetX */
  let nMousePosY = event.offsetY; /* - nOfsetY */

  // console.log(nMousePosX + " " + nMousePosY);

  switch (sGameStatus) {
    case "menu":
      menuDetectHover(nMousePosX, nMousePosY);
  }
}

function buttonStyle1(x, y, width, height) {
  oContext.drawImage(oButtonStyle1[1].image, x, y, 50, 50);
  oContext.drawImage(oButtonStyle1[2].image, x + 50, y, width - 100, 50);
  oContext.drawImage(oButtonStyle1[3].image, x + width - 50, y, 50, 50);
  oContext.drawImage(oButtonStyle1[4].image, x, y + 50, 50, height - 100);
  oContext.drawImage(oButtonStyle1[5].image, x + 50, y + 50, width - 100, height - 100);
  oContext.drawImage(oButtonStyle1[6].image, x + width - 50, y + 50, 50, height - 100);
  oContext.drawImage(oButtonStyle1[7].image, x, y + height - 50, 50, 50);
  oContext.drawImage(oButtonStyle1[8].image, x + 50, y + height - 50, width - 100, 50);
  oContext.drawImage(oButtonStyle1[9].image, x + width - 50, y + height - 50, 50, 50);
}
function buttonStyle2(x, y, width, height) {
  y = y + 5;
  oContext.drawImage(oButtonStyle2[1].image, x, y, 50, 50);
  oContext.drawImage(oButtonStyle2[2].image, x + 50, y, width - 100, 50);
  oContext.drawImage(oButtonStyle2[3].image, x + width - 50, y, 50, 50);
  oContext.drawImage(oButtonStyle2[4].image, x, y + 50, 50, height - 100);
  oContext.drawImage(oButtonStyle2[5].image, x + 50, y + 50, width - 100, height - 100);
  oContext.drawImage(oButtonStyle2[6].image, x + width - 50, y + 50, 50, height - 100);
  oContext.drawImage(oButtonStyle2[7].image, x, y + height - 50, 50, 50);
  oContext.drawImage(oButtonStyle2[8].image, x + 50, y + height - 50, width - 100, 50);
  oContext.drawImage(oButtonStyle2[9].image, x + width - 50, y + height - 50, 50, 50);
}
