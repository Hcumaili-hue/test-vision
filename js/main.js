/* =========================================
   H. Cumaili Lab
   Main JavaScript System
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

      /* ignore empty */

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

      observer.observe(
        el
      );

    }
  );

}


/* ==========================
SEARCH BUTTON
========================== */

const searchBtn =
document.getElementById(
  "searchTrigger"
);

if(
  searchBtn &&
  searchInput
){

  searchBtn
  .addEventListener(

    "click",

    ()=>{

      searchInput
      .scrollIntoView({

        behavior:"smooth",

        block:"center"

      });

      searchInput.focus();

    }

  );

}

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
            "active"
          );

          if(

            link.getAttribute(
              "href"
            )

            ===

            `#${current}`

          ){

            link.classList.add(
              "active"
            );

          }

        }
      );

    }
  );

}


/* =========================
TABLE FILTER
========================= */

const filterButtons =
document.querySelectorAll(
  ".filter-btn"
);

const tableRows =
document.querySelectorAll(
  ".table-row"
);

if(
  filterButtons.length &&
  tableRows.length
){

  filterButtons.forEach(
    btn=>{

      btn.addEventListener(
        "click",
        ()=>{

          const category =
          btn.dataset.filter;

          tableRows.forEach(
            row=>{

              if(

                category ===
                "all"

                ||

                row.dataset
                .category
                === category

              ){

                row.style
                .display =
                "table-row";

              }else{

                row.style
                .display =
                "none";

              }

            }
          );

        }
      );

    }
  );

}


/* =========================
ACADEMIC NETWORK OVERLAY
========================= */

const networkBtn =
document.querySelector(
  ".header-network-btn"
);

const networkOverlay =
document.querySelector(
  ".network-overlay"
);

const networkClose =
document.querySelector(
  ".network-close"
);


if(
  networkBtn &&
  networkOverlay &&
  networkClose
){

  /* OPEN */

  networkBtn
  .addEventListener(

    "click",

    ()=>{

      networkOverlay
      .classList
      .add(
        "active"
      );

      document.body
      .style
      .overflow =
      "hidden";

    }

  );


  /* CLOSE */

  networkClose
  .addEventListener(

    "click",

    ()=>{

      networkOverlay
      .classList
      .remove(
        "active"
      );

      document.body
      .style
      .overflow =
      "";

    }

  );


  /* CLOSE OUTSIDE */

  networkOverlay
  .addEventListener(

    "click",

    (e)=>{

      if(
        e.target ===
        networkOverlay
      ){

        networkOverlay
        .classList
        .remove(
          "active"
        );

        document.body
        .style
        .overflow =
        "";

      }

    }

  );

}

/* =========================
MENU OVERLAY
========================= */

const headerMenuBtn =
document.querySelector(
  ".header-menu-btn"
);

const menuOverlay =
document.getElementById(
  "menuOverlay"
);

const menuClose =
document.getElementById(
  "menuClose"
);

if(

  headerMenuBtn &&

  menuOverlay &&

  menuClose

){

  /* OPEN */

  headerMenuBtn
  .addEventListener(

    "click",

    ()=>{

      menuOverlay
      .classList
      .add(
        "active"
      );

    }

  );


  /* CLOSE */

  menuClose
  .addEventListener(

    "click",

    ()=>{

      menuOverlay
      .classList
      .remove(
        "active"
      );

    }

  );


  /* CLOSE AFTER LINK CLICK */

  const menuLinks =
  document.querySelectorAll(
    ".menu-links a"
  );

  menuLinks.forEach(
    link=>{

      link.addEventListener(

        "click",

        ()=>{

          menuOverlay
          .classList
          .remove(
            "active"
          );

        }

      );

    }
  );

}


/* =========================
PAGE LOADED
========================= */

window.addEventListener(
  "load",
  ()=>{

    document.body
    .classList
    .add(
      "loaded"
    );

  }
);
