/* =========================
BACK TO TOP
========================= */

const topBtn =
document.querySelector(
  ".back-top"
);

if(topBtn){

  window.addEventListener(
    "scroll",
    ()=>{

      if(
        window.scrollY > 400
      ){

        topBtn.classList
        .add("visible");

      }else{

        topBtn.classList
        .remove("visible");

      }

    }
  );

  topBtn.addEventListener(
    "click",
    ()=>{

      window.scrollTo({

        top:0,

        behavior:
        "smooth"

      });

    }
  );

}
