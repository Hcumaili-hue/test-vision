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

      document.body
      .style
      .overflow =
      "hidden";

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

      document.body
      .style
      .overflow =
      "";

    }

  );


  /* CLOSE OUTSIDE */

  menuOverlay
  .addEventListener(

    "click",

    (e)=>{

      if(
        e.target ===
        menuOverlay
      ){

        menuOverlay
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

          document.body
          .style
          .overflow =
          "";

        }

      );

    }
  );

}
/* =========================
SEARCH SYSTEM
========================= */

const searchTrigger =
document.getElementById(
  "searchTrigger"
);

const searchOverlay =
document.getElementById(
  "searchOverlay"
);

const searchClose =
document.getElementById(
  "searchClose"
);

const searchInput =
document.getElementById(
  "searchInput"
);

const searchResults =
document.getElementById(
  "searchResults"
);


if(

  searchTrigger &&

  searchOverlay &&

  searchClose &&

  searchInput &&

  searchResults

){

  /* OPEN */

  searchTrigger
  .addEventListener(

    "click",

    ()=>{

      searchOverlay
      .classList
      .add(
        "active"
      );

      document.body
      .style
      .overflow =
      "hidden";

      setTimeout(()=>{

        searchInput
        .focus();

      },150);

    }

  );


  /* CLOSE */

  searchClose
  .addEventListener(

    "click",

    ()=>{

      searchOverlay
      .classList
      .remove(
        "active"
      );

      document.body
      .style
      .overflow =
      "";

      searchInput.value =
      "";

      searchResults
      .innerHTML =
      "";

    }

  );


  /* CLOSE OUTSIDE */

  searchOverlay
  .addEventListener(

    "click",

    (e)=>{

      if(
        e.target ===
        searchOverlay
      ){

        searchOverlay
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


  /* SEARCH */

  searchInput
  .addEventListener(

    "input",

    ()=>{

      const query =
      searchInput
      .value
      .toLowerCase()
      .trim();

      searchResults
      .innerHTML =
      "";

      if(!query){
        return;
      }

      const searchable =
      document.querySelectorAll(

        "section h1, section h2, section h3, p"

      );

      searchable
      .forEach(

        item=>{

          const text =
          item.textContent
          .toLowerCase();

          if(

            text.includes(
              query
            )

          ){

            const card =
            document
            .createElement(
              "div"
            );

            card.className =
            "search-result-card";

            card.innerHTML =

            `
            <h3>
            ${item.textContent}
            </h3>

            <p>
            Click to navigate
            to this section.
            </p>
            `;

            card
            .addEventListener(

              "click",

              ()=>{

                const section =
                item.closest(
                  "section"
                );

                if(
                  section
                ){

                  searchOverlay
                  .classList
                  .remove(
                    "active"
                  );

                  document.body
                  .style
                  .overflow =
                  "";

                  section
                  .scrollIntoView({

                    behavior:
                    "smooth"

                  });

                }

              }

            );

            searchResults
            .appendChild(
              card
            );

          }

        }

      );

    }

  );

}
/* =========================
ACADEMIC NETWORK EFFECT
========================= */

const networkCards =
document.querySelectorAll('.network-card');

networkCards.forEach(card=>{

  card.addEventListener('click',function(e){

    e.preventDefault();

    const url =
    this.getAttribute('href');

    this.classList.add(
      'network-open'
    );

    setTimeout(()=>{

      window.location.href =
      url;

    },320);

  });

});
