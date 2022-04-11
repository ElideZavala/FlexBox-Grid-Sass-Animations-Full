// Test if our JS file is property linked to the HTML File. 

// Grabging the target elements from the HTML File
const list = document.querySelector('.gallery-carrousel__img--container--list');
const imgs = Array.from(list.children); // accedemos a la lista y los convertimos en un array.
const nextButton = document.querySelector('.gallery-carrousel__btn--right');
const prevButton = document.querySelector('.gallery-carrousel__btn--left');
const carouselNav =document.querySelector('.gallery-carrousel__nav');
const dot = Array.from(carouselNav.children); // accedemos a todos los puntos y los convertimos en A.

// console.log(carouselNav);
// Getting the width of our images
const imgWidth = imgs[0].getBoundingClientRect().width; // Devolvera el tamaño de un elemento y su posiciòn
// const imgWidth = imgs[0].getBoundingClientRect().height; // Devolvera el tamaño de un elemento y su posiciòn
// console.log(imgWidth);

// #150 Arranging the images next to one another.
// function setImgPosition(img, index) {
// 	img.style.left = imgWidth * index + "px"; // movemos al elemento a la izquierda. 
// }

// #fff Arrow Function. 
const setImgPosition = (img, index) => {
	img.style.left = imgWidth * index + "px";
	// nextImg * 1 + px = 1209px 
}

imgs.forEach(setImgPosition);

// moveToImg Function. 
const moveToImg = (list, currentImg, targetImg) => {
	// *-*-*-*-*-*-*-*-*-*-*-*-*-* Move to the Next Image *-*-*-*-*-*-*-*-*-*-*-*-*-* // 
	list.style.transform = "translateX(-" + targetImg.style.left + ")";
	currentImg.classList.remove('current--img'); // Eliminamos la clase que tenia.
	targetImg.classList.add('current--img'); // Le ponemos la clase a la siguiente imagen. 
}


/* --------*-*-*-*-*-*-*-*-*-*-*-*-*-*--------*-*-*-*-*-*-*-*-*-*-*-*-*-*------------------------
------------------ When we click on the right button, move images to the left ------------------
--------*-*-*-*-*-*-*-*-*-*-*-*-*-*--------------------*-*-*-*-*-*-*-*-*-*-*-*-*-*------------*/

// console.log(list)
nextButton.addEventListener("click", (e) => {
	const currentImg = list.querySelector(".current--img") // Seleccionamos la imagen actual que tenga esta clase. 
	const nextImg = currentImg.nextElementSibling; // Proximo elemento hermano.
	// const distToMove = nextImg.style.left; // La distancia al movimiento va ser igual a nuestra siguiente imagen. 
	moveToImg(list, currentImg, nextImg);

});

prevButton.addEventListener("click", (e) => {
	const currentImg = list.querySelector(".current--img") // Seleccionamos la imagen actual que tenga esta clase. 
	const previosImg = currentImg.previousElementSibling; // Proximo elemento hermano.
	moveToImg(list, currentImg, previosImg);
})

/* --------*-*-*-*-*-*-*-*-*-*-*-*-*-*--------*-*-*-*-*-*-*-*-*-*-*-*-*-*------------------------
------------------ When we click on the left button, move images to the right ------------------
--------*-*-*-*-*-*-*-*-*-*-*-*-*-*--------------------*-*-*-*-*-*-*-*-*-*-*-*-*-*------------*/

