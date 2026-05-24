/* =========================
SMOOTH SCROLL
========================= */

const smoothLinks =
document.querySelectorAll(
  'a[href^="#"]'
);

smoothLinks.forEach(link=>{

  link.addEventListener(
    "click",
    (e)=>{

      const href =
      link.getAttribute(
        "href"
      );

      if(
        !href ||
        href === "#"
      ){
        return;
      }

      const target =
      document.querySelector(
        href
      );

      if(target){

        e.preventDefault();

        target.scrollIntoView({

          behavior:
          "smooth"

        });

      }

    }
  );

});


/* =========================
FADE IN ON SCROLL
========================= */

const fadeElements =
document.querySelectorAll(
  ".fade-in"
);

if(fadeElements.length){

  const observer =
  new IntersectionObserver(

    entries=>{

      entries.forEach(
        entry=>{

          if(
            entry.isIntersecting
          ){

            entry.target
            .classList
            .add("show");

          }

        }
      );

    },

    {
      threshold:0.15
    }

  );

  fadeElements.forEach(
    el=>{

      observer.observe(el);

    }
  );

}

