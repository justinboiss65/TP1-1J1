function loadTranslations(lang) {
  let oTrans = {};

  // Traduction
  if (lang == "en") {
    oTrans = {
      lang: "en",
      credit: "Credits",
      menuPlay: "Play",
      menuSetting: "Settings",
      gameMenuQuit: "Save & Quit",
      coder: "Code by: Justin Boissonneault",
      asseter: "Assets by: Justin Boissonneault",
      mather: "Math helper: Stéphane Delattre",
      translator: "Translation by :",
      translator1: "Justin Boissonneault",
      translator2: "davthegl1tchy0ne",
    };
  } else if (lang == "fr") {
    oTrans = {
      lang: "fr",
      credit: "Crédits",
      menuPlay: "Jouer",
      menuSetting: "Paramètre",
      gameMenuQuit: "Quitter",
      coder: "Code par : Justin Boissonneault",
      asseter: "Ressources par : Justin Boissonneault",
      mather: "Aide mathématique : Stéphane Delattre",
      translator: "Traductions par :",
      translator1: "Justin Boissonneault",
      translator2: "davthegl1tchy0ne",
    };
  } else if (lang == "ru") {
    oTrans = {
      lang: "ru",
      credit: "Титры",
      menuPlay: "Играть",
      menuSetting: "Настройки",
      gameMenuQuit: "Выйти",
      coder: "Переводы:: Boissonneault Justin",
      asseter: "Ресурсы:: Boissonneault Justin",
      mather: "Помощь с математикой:: Delattre Stéphane",
      translator: "Код::",
      translator1: "Boissonneault Justin",
      translator2: "davthegl1tchy0ne",
    };
  }

  return oTrans;
}
