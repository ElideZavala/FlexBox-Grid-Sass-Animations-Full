// Test if our JS file is property linked to the HTML File. 

// Grabging the target elements from the HTML File
const list = document.querySelector('.gallery-carrousel__img--container--list');
const imgs = Array.from(list.children); // accedemos a la lista y los convertimos en un array.
const nextButton = document.querySelector('.gallery-carrousel__btn--right');
const prevButton = document.querySelector('.gallery-carrousel__btn--left');
const carouselNav = document.querySelector('.gallery-carrousel__nav');
const dots = Array.from(carouselNav.children); // accedemos a todos los puntos y los convertimos en Array.
const currentImg = list.querySelector(".current--img") // Seleccionamos la imagen actual que tenga esta clase. 
const currentDot = carouselNav.querySelector('.current--img');


// console.log(carouselNav);
// Getting the width of our images
const imgWidth = imgs[0].getBoundingClientRect().width; // Devolvera el tamaño de un elemento y su posiciòn
// const imgWidth = imgs[0].getBoundingClientRect().height; // Devolvera el tamaño de un elemento y su posiciòn
// console.log(imgWidth);

// #fff Arrow Function. 
const setImgPosition = (img, index) => {
	img.style.left = imgWidth * index + "px";
};
imgs.forEach(setImgPosition);

// moveToImg Function. 
const moveToImg = (list, currentImg , targetImg) => {
	// *-*-*-*-*-*-*-*-*-*-*-*-*-* Move to the Next Image *-*-*-*-*-*-*-*-*-*-*-*-*-* // 
	list.style.transform = "translateX(-" + targetImg.style.left + ")";
	currentImg.classList.remove('current--img'); // Eliminamos la clase que tenia.
	targetImg.classList.add('current--img'); // Le ponemos la clase a la siguiente imagen. 
}

// Updating the color of the dots on click
const updateDots = (currentDot, targetDot) => {
	currentDot.classList.remove('current--img');
	targetDot.classList.add('current--img');
}
 
// Hide/Show Arrows .-Ocultar el button de previus si el indice es Cero-. 
const hideShowArrows = () => {
	if ( targetIndex === 0 ) {
		prevButton.classList.add('hidden'); 
	}
}


/* --------*-*-*-*-*-*-*-*-*-*-*-*-*-*--------*-*-*-*-*-*-*-*-*-*-*-*-*-*------------------------
------------------ When we click on the right button, move images to the left ------------------
--------*-*-*-*-*-*-*-*-*-*-*-*-*-*--------------------*-*-*-*-*-*-*-*-*-*-*-*-*-*------------*/

// console.log(list)
nextButton.addEventListener("click", (e) => {
	const nextImg = currentImg.nextElementSibling; // Proximo elemento hermano.
	// const distToMove = nextImg.style.left; // La distancia al movimiento va ser igual a nuestra siguiente imagen. 
	const nextDot = currentDot.nextElementSibling;
	
	moveToImg( list, currentImg,  nextImg );
	updateDots( currentDot, nextDot );
	
});



/* --------*-*-*-*-*-*-*-*-*-*-*-*-*-*--------*-*-*-*-*-*-*-*-*-*-*-*-*-*------------------------
------------------ When we click on the left button, move images to the right ------------------
--------*-*-*-*-*-*-*-*-*-*-*-*-*-*--------------------*-*-*-*-*-*-*-*-*-*-*-*-*-*------------*/

prevButton.addEventListener("click", (e) => {
	const previosImg = currentImg.previousElementSibling; // Proximo elemento hermano.
	const previosDot = currentDot.previousElementSibling;
	moveToImg( list, currentImg,  previosImg );
	updateDots(currentDot,  previosDot );

})

/* --------*-*-*-*-*-*-*-*-*-*-*-*-*-*--------*-*-*-*-*-*-*-*-*-*-*-*-*-*------------------------
------------------ When we click on the Carousel Nav, move switch the images ------------------
--------*-*-*-*-*-*-*-*-*-*-*-*-*-*--------------------*-*-*-*-*-*-*-*-*-*-*-*-*-*------------*/

carouselNav.addEventListener('click', (e) => {
	// What dot was clicked on 
	// El metodo closest atraviesa el elemento y sus padres, significa que va a dirigirse hacia la ruta del documento.
	const targetDot = e.target.closest('button'); // Nos traera al elemento mas cercano de button
	// console.log(targetDot);
	
	if (!targetDot) return;

	const targetIndex = dots.findIndex((dot) => dot === targetDot); // Asegurarnos que dot sea igual a targetDot
 	const targetImg = imgs[targetIndex]; // Esa imagen objetivo va a agarrar esa imagen que corresponde al punto que acemos clic.

	moveToImg( list, currentImg, targetImg );
	updateDots(currentDot,  targetDot );
 });