'use strict';

const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');
const navHeight = nav.offsetHeight;

const stickyNav = function (entries) {
  entries.forEach((entry) => {
    nav.classList.toggle('sticky', !entry.isIntersecting);
  });
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px 0px 0px 0px`,
});

observer.observe(hero);