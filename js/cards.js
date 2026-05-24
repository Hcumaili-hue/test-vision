/* =========================================
   Cards System
========================================= */


/* =========================
ACADEMIC NETWORK EFFECT
========================= */

const networkCards =
document.querySelectorAll(
  ".network-card"
);

if(networkCards.length){

  networkCards.forEach(

    card=>{

      card.addEventListener(

        "click",

        function(e){

          e.preventDefault();

          const url =

          this.getAttribute(
            "href"
          );

          this.classList.add(
            "network-open"
          );

          setTimeout(()=>{

            window.location.href =
            url;

          },320);

        }

      );

    }

  );

}
