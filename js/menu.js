/* =========================================
   Menu System
========================================= */


/* =========================
MENU ELEMENTS
========================= */

const menuTrigger =
document.getElementById(
  "menuTrigger"
);

const menuOverlay =
document.getElementById(
  "menuOverlay"
);

const menuClose =
document.getElementById(
  "menuClose"
);


/* =========================
MENU
========================= */

if(

  menuTrigger &&

  menuOverlay &&

  menuClose

){

  menuTrigger
  .addEventListener(

    "click",

    ()=>{

      menuOverlay
      .classList
      .add("active");

    }

  );

  menuClose
  .addEventListener(

    "click",

    ()=>{

      menuOverlay
      .classList
      .remove("active");

    }

  );

}
