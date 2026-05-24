/* =========================================
   Search System
========================================= */


/* =========================
SITE SEARCH INDEX
========================= */

const searchIndex = [

  {
    title:"Library",
    description:
    "Research library and publications",

    url:"pages/library.html"
  },

  {
    title:"Archive",
    description:
    "Academic archive",

    url:"pages/archive.html"
  },

  {
    title:"Academic Network",
    description:
    "Research profiles and platforms",

    url:"pages/academic-network.html"
  },

  {
    title:"Core Thesis",
    description:
    "Core Abrahamic thesis",

    url:"pages/core-thesis.html"
  }

];


/* =========================
SEARCH ELEMENTS
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


/* =========================
SEARCH SYSTEM
========================= */

if(

  searchTrigger &&

  searchOverlay &&

  searchClose &&

  searchInput &&

  searchResults

){

  /* OPEN SEARCH */

  searchTrigger
  .addEventListener(

    "click",

    ()=>{

      searchOverlay
      .classList
      .add("active");

    }

  );


  /* CLOSE SEARCH */

  searchClose
  .addEventListener(

    "click",

    ()=>{

      searchOverlay
      .classList
      .remove("active");

    }

  );


  /* SEARCH INPUT */

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

      const results =

      searchIndex.filter(

        item =>

          item.title
          .toLowerCase()
          .includes(query)

          ||

          item.description
          .toLowerCase()
          .includes(query)

      );

      results.forEach(

        item=>{

          const card =
          document
          .createElement(
            "div"
          );

          card.className =
          "search-result-card";

          card.innerHTML =

          `
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          `;

          card
          .addEventListener(

            "click",

            ()=>{

              window.location.href =
              item.url;

            }

          );

          searchResults
          .appendChild(
            card
          );

        }

      );

    }

  );

}
