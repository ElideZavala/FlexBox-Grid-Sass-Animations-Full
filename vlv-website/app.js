// Test if our JS file is property linked to the HTML File. 

// Grabging the target elements from the HTML File
const list = document.querySelector('.gallery-carrousel__img--container--list');
const imgs = Array.from(list.children); // accedemos a la lista y los convertimos en un array.
const nextButton = document.querySelector('.gallery-carrousel__btn--right');
const prevButton = document.querySelector('.gallery-carrousel__btn--left');
const carouselNav =document.querySelector('.gallery-carrousel__nav');
const dot = Array.from(carouselNav.children); // accedemos a todos los puntos y los convertimos en A.

console.log(carouselNav);




