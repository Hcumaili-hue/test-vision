/* =========================================
   Navbar System
========================================= */


/* =========================
HEADER SHADOW
========================= */

const header =
document.querySelector(
  ".site-header"
);

if(header){

  window.addEventListener(
    "scroll",
    ()=>{

      if(window.scrollY > 50){

        header.classList.add(
          "scrolled"
        );

      }else{

        header.classList.remove(
          "scrolled"
        );

      }

    }
  );

}


/* =========================
ACTIVE NAV LINK
========================= */

const sections =
document.querySelectorAll(
  "section[id]"
);

const navLinks =
document.querySelectorAll(
  '.menu-links a[href^="#"]'
);

if(

  sections.length &&

  navLinks.length

){

  window.addEventListener(

    "scroll",

    ()=>{

      let current =
      "";

      sections.forEach(

        section=>{

          const sectionTop =
          section.offsetTop;

          if(

            window.scrollY >=
            sectionTop - 150

          ){

            current =
            section.id;

          }

        }

      );

      navLinks.forEach(

        link=>{

          link.classList.remove(
            "is-active"
          );

          if(

            link.getAttribute(
              "href"
            )

            ===

            `#${current}`

          ){

            link.classList.add(
              "is-active"
            );

          }

        }

      );

    }

  );

}
