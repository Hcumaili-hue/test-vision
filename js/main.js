/* =========================================
   H. Cumaili Lab
   Main JavaScript System
========================================= */


/* ========= MOBILE MENU ========= */

const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

if(menuBtn && navbar){

  menuBtn.addEventListener('click', () => {

    navbar.classList.toggle('active');
    menuBtn.classList.toggle('open');

  });

}


/* ========= SMOOTH SCROLL ========= */

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

  link.addEventListener('click', e => {

    e.preventDefault();

    const target = document.querySelector(
      link.getAttribute('href')
    );

    if(target){

      target.scrollIntoView({
        behavior:'smooth'
      });

    }

  });

});


/* ========= HEADER SHADOW ========= */

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){

    header.classList.add('scrolled');

  }else{

    header.classList.remove('scrolled');

  }

});


/* ========= FADE IN ON SCROLL ========= */

const fadeElements =
document.querySelectorAll('.fade-in');

const observer =
new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

},{
  threshold:0.15
});

fadeElements.forEach(el => {
  observer.observe(el);
});


/* ========= SEARCH SYSTEM ========= */

const searchInput =
document.querySelector('.search-input');

const searchableItems =
document.querySelectorAll('.search-item');

if(searchInput){

  searchInput.addEventListener('keyup', () => {

    const value =
    searchInput.value.toLowerCase();

    searchableItems.forEach(item => {

      const text =
      item.textContent.toLowerCase();

      item.style.display =
      text.includes(value)
      ? 'block'
      : 'none';

    });

  });

}


/* ========= BACK TO TOP ========= */

const topBtn =
document.querySelector('.back-top');

window.addEventListener('scroll', () => {

  if(window.scrollY > 400){

    topBtn.classList.add('visible');

  }else{

    topBtn.classList.remove('visible');

  }

});

if(topBtn){

  topBtn.addEventListener('click', () => {

    window.scrollTo({
      top:0,
      behavior:'smooth'
    });

  });

}


/* ========= ACTIVE NAV LINK ========= */

const sections =
document.querySelectorAll('section');

const navLinks =
document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach(section => {

    const sectionTop =
    section.offsetTop;

    if(window.scrollY >= sectionTop - 150){

      current =
      section.getAttribute('id');

    }

  });

  navLinks.forEach(link => {

    link.classList.remove('active');

    if(
      link.getAttribute('href')
      === `#${current}`
    ){

      link.classList.add('active');

    }

  });

});


/* ========= TABLE FILTER ========= */

const filterButtons =
document.querySelectorAll('.filter-btn');

const tableRows =
document.querySelectorAll('.table-row');

filterButtons.forEach(btn => {

  btn.addEventListener('click', () => {

    const category =
    btn.dataset.filter;

    tableRows.forEach(row => {

      if(
        category === 'all' ||
        row.dataset.category === category
      ){

        row.style.display = 'table-row';

      }else{

        row.style.display = 'none';

      }

    });

  });

});

/* ========= ACADEMIC NETWORK ========= */

const networkToggle =
document.getElementById('networkToggle');

const platformNetwork =
document.getElementById('platformNetwork');

if(networkToggle && platformNetwork){

  networkToggle.addEventListener('click', () => {

    platformNetwork.classList.toggle('active');

    networkToggle.classList.toggle('opened');

  });

}
/* ========= LOADING COMPLETE ========= */

window.addEventListener('load', () => {

  document.body.classList.add('loaded');

});
/* =========================
MENU TOGGLE
========================= */

const menuBtn =
document.querySelector(
  ".header-menu-btn"
);

const menuOverlay =
document.querySelector(
  "#menuOverlay"
);

const menuClose =
document.querySelector(
  "#menuClose"
);


/* OPEN */

menuBtn.addEventListener(
  "click",
  ()=>{

    menuOverlay.classList.add(
      "active"
    );

  }
);


/* CLOSE */

menuClose.addEventListener(
  "click",
  ()=>{

    menuOverlay.classList.remove(
      "active"
    );

  }
);
/* CLOSE MENU AFTER CLICKING LINK */

const menuLinks =
document.querySelectorAll(
".menu-links a"
);

menuLinks.forEach((link)=>{

  link.addEventListener(
    "click",
    ()=>{

      menuOverlay.classList.remove(
        "active"
      );

    }
  );

});
