import aosModule from "./modules/aosModule.js";
import scrollModule from "./modules/scrollModule.js";
import navigationMenuModule from "./modules/navigationMenuModule.js";
// import wowModule from "./modules/wowModule.js";

window.addEventListener("DOMContentLoaded", () => {
  aosModule();
  scrollModule();
  navigationMenuModule();
  // wowModule();
});
