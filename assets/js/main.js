const oCanvas = document.getElementById("canvas");
const oContext = oCanvas.getContext("2d");

let sGameStatus = "menu"; // menu, settings, game

let nMousePosX;
let nMousePosY;

let bMuted = false;

let lang = "fr"; // fr, en
let oTrans;

let sSansSerif = "'Kenney Future', 'Arial', 'sans-serif'";
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

let oCreditButton = {
  width: 160,
  height: 60,
  x: 50,
  y: 490,
  scale: 30,
  pressed: false,
};

let oMuteButton = {
  width: 70,
  height: 60,
  x: 50,
  y: 420,
  scale: 30,
  pressed: false,
  image: new Image(),
  src: "./assets/img/speaker.svg",
  imageMuted: new Image(),
  srcMuted: "./assets/img/mute.svg",
};
oMuteButton.image.src = oMuteButton.src;
oMuteButton.imageMuted.src = oMuteButton.srcMuted;

let oTransButton = {
  width: 70,
  height: 60,
  x: 130,
  y: 420,
  scale: 30,
  pressed: false,
};

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

let oButtonStyle2ol = {
  1: {
    image: new Image(),
    src: "./assets/img/button2Layout/1_ol.svg",
  },
  2: {
    image: new Image(),
    src: "./assets/img/button2Layout/square_ol.jpg",
  },
  3: {
    image: new Image(),
    src: "./assets/img/button2Layout/3_ol.svg",
  },
  4: {
    image: new Image(),
    src: "./assets/img/button2Layout/square_ol.jpg",
  },
  5: {
    image: new Image(),
    src: "./assets/img/button2Layout/square_ol.jpg",
  },
  6: {
    image: new Image(),
    src: "./assets/img/button2Layout/square_ol.jpg",
  },
  7: {
    image: new Image(),
    src: "./assets/img/button2Layout/7_ol.svg",
  },
  8: {
    image: new Image(),
    src: "./assets/img/button2Layout/8_ol.png",
  },
  9: {
    image: new Image(),
    src: "./assets/img/button2Layout/9_ol.svg",
  },
};
oButtonStyle2ol[1].image.src = oButtonStyle2ol[1].src;
oButtonStyle2ol[2].image.src = oButtonStyle2ol[2].src;
oButtonStyle2ol[3].image.src = oButtonStyle2ol[3].src;
oButtonStyle2ol[4].image.src = oButtonStyle2ol[4].src;
oButtonStyle2ol[5].image.src = oButtonStyle2ol[5].src;
oButtonStyle2ol[6].image.src = oButtonStyle2ol[6].src;
oButtonStyle2ol[7].image.src = oButtonStyle2ol[7].src;
oButtonStyle2ol[8].image.src = oButtonStyle2ol[8].src;
oButtonStyle2ol[9].image.src = oButtonStyle2ol[9].src;

window.addEventListener("load", init);

function init() {
  oCanvas.addEventListener("click", onClick);
  oCanvas.addEventListener("mousemove", onMouseMove);

  setInterval(globalLoop, 1000 / 60);
}

function globalLoop() {
  // Traduction
  if (lang == "en") {
    oTrans = {
      lang: "en",
      credit: "Credits",
      menuPlay: "Play",
      menuSetting: "Settings",
    };
  } else if (lang == "fr") {
    oTrans = {
      lang: "fr",
      credit: "Crédits",
      menuPlay: "Jouer",
      menuSetting: "Paramêtre",
    };
  } else if (lang == "ru") {
    oTrans = {
      lang: "ru",
      credit: "Титры",
      menuPlay: "Играть",
      menuSetting: "Настройки",
    };
  }

  switch (sGameStatus) {
    case "menu":
      menuLoop();
      break;
    case "game":
      gameLoop();
      break;
  }
}

function detectClick(nMousePosX, nMousePosY, nObjectX, nObjectY, nObjectWidth, nObjectHeight) {
  if (nMousePosX >= nObjectX && nMousePosX <= nObjectX + nObjectWidth && nMousePosY >= nObjectY && nMousePosY <= nObjectY + nObjectHeight) {
    return true;
  } else {
    return false;
  }
}

function detectHover(nMousePosX, nMousePosY, nObjectX, nObjectY, nObjectWidth, nObjectHeight) {
  if (nMousePosX >= nObjectX && nMousePosX <= nObjectX + nObjectWidth && nMousePosY >= nObjectY && nMousePosY <= nObjectY + nObjectHeight) {
    return true;
  } else {
    return false;
  }
}

function onClick() {
  menuOnCick();
}

function onMouseMove(event) {
  nMousePosX = event.offsetX;
  nMousePosY = event.offsetY;
}

function buttonStyle1(x, y, width, height, scale) {
  oContext.drawImage(oButtonStyle1[1].image, x, y, scale, scale);
  oContext.drawImage(oButtonStyle1[2].image, x + scale, y, width - 2 * scale, scale);
  oContext.drawImage(oButtonStyle1[3].image, x + width - scale, y, scale, scale);
  oContext.drawImage(oButtonStyle1[4].image, x, y + scale, scale, height - scale * 2);
  oContext.drawImage(oButtonStyle1[5].image, x + scale, y + scale, width - scale * 2, height - scale * 2);
  oContext.drawImage(oButtonStyle1[6].image, x + width - scale, y + scale, scale, height - scale * 2);
  oContext.drawImage(oButtonStyle1[7].image, x, y + height - scale, scale, scale);
  oContext.drawImage(oButtonStyle1[8].image, x + scale, y + height - scale, width - scale * 2, scale);
  oContext.drawImage(oButtonStyle1[9].image, x + width - scale, y + height - scale, scale, scale);
}
function buttonStyle2(x, y, width, height, scale) {
  y = y + scale / 10;
  oContext.drawImage(oButtonStyle2ol[1].image, x - scale / 10, y - scale / 10, scale + scale / 10, scale + scale / 10);
  oContext.drawImage(oButtonStyle2ol[2].image, x + scale, y - scale / 10, width - scale * 2, scale + scale / 10);
  oContext.drawImage(oButtonStyle2ol[3].image, x + width - scale, y - scale / 10, scale + scale / 10, scale + scale / 10);
  oContext.drawImage(oButtonStyle2ol[4].image, x - scale / 10, y + scale, scale + scale / 10, height - scale * 2);
  oContext.drawImage(oButtonStyle2ol[5].image, x + scale, y + scale, width - scale * 2, height - scale * 2);
  oContext.drawImage(oButtonStyle2ol[6].image, x + width - scale, y + scale, scale + scale / 10, height - scale * 2);
  oContext.drawImage(oButtonStyle2ol[7].image, x - scale / 10, y + height - scale, scale + scale / 10, scale + scale / 10);
  oContext.drawImage(oButtonStyle2ol[8].image, x + scale, y + height - scale, width - scale * 2, scale + scale / 10);
  oContext.drawImage(oButtonStyle2ol[9].image, x + width - scale, y + height - scale, scale + scale / 10, scale + scale / 10);

  oContext.drawImage(oButtonStyle2[1].image, x, y, scale, scale);
  oContext.drawImage(oButtonStyle2[2].image, x + scale, y, width - scale * 2, scale);
  oContext.drawImage(oButtonStyle2[3].image, x + width - scale, y, scale, scale);
  oContext.drawImage(oButtonStyle2[4].image, x, y + scale, scale, height - scale * 2);
  oContext.drawImage(oButtonStyle2[5].image, x + scale, y + scale, width - scale * 2, height - scale * 2);
  oContext.drawImage(oButtonStyle2[6].image, x + width - scale, y + scale, scale, height - scale * 2);
  oContext.drawImage(oButtonStyle2[7].image, x, y + height - scale, scale, scale);
  oContext.drawImage(oButtonStyle2[8].image, x + scale, y + height - scale, width - scale * 2, scale);
  oContext.drawImage(oButtonStyle2[9].image, x + width - scale, y + height - scale, scale, scale);
}
