'use strict';

const items = document.querySelectorAll('.item');
const scrollBox = document.querySelector('#scrollBox');
const liveBox = document.querySelector('#info p');

const activeItemFunction = function (entries) {
  entries.forEach((entry) => {
    const isActive = entry.isIntersecting && entry.intersectionRatio >= 0.5;

    entry.target.classList.toggle('active', isActive);   // on AND off in one line

    liveBox.textContent =                                 // runs on every entry
      `Item: ${entry.target.dataset.id} | Intersecting: ${entry.isIntersecting} | Ratio: ${entry.intersectionRatio.toFixed(2)}`;
  });
};

const observer = new IntersectionObserver(activeItemFunction, {
  root: scrollBox,
  threshold: 0.5,
  rootMargin: '-50px 0px',
});

items.forEach((item) => observer.observe(item));