const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//variables utiles pour les calculs :
//taille du tableau d'images
const tabSize = slides.length;

//slide actuelle
let currentSlide = 0;

//initialisation de la bannière 
let img = document.getElementById('banner-img');
img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"]);

//initialisation du texte
let tagline = document.getElementById('tagline');
tagline.innerHTML = slides[currentSlide]["tagLine"];

//initialisation des points
for(let i = 0; i < tabSize; i++){
	if( i == 0){
		//premier point selected
		let dot = document.createElement("div");
		dot.setAttribute("class", "dot dot_selected");
		dot.setAttribute("id", i);
		let parentElement = document.getElementById("dots");
		parentElement.appendChild(dot);
	}else{
		//les autres points s'affichent normalement
		let dot = document.createElement("div");
		dot.setAttribute("class", "dot");
		dot.setAttribute("id", i);
		let parentElement = document.getElementById("dots");
		parentElement.appendChild(dot);
	}
}


//Clic Gauche
const arrowLeft = document.querySelector('.arrow_left');

function clickGauche() {	
	if(currentSlide == 0){
		currentSlide = tabSize - 1;
		img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"]);
		tagline.innerHTML = slides[currentSlide]["tagLine"];
		dot = document.getElementById(currentSlide);
		dot.classList.add("dot_selected");
		oldDot = document.getElementById(0);
		oldDot.classList.remove("dot_selected");
	}else{
		currentSlide--;
		img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"]);
		tagline.innerHTML = slides[currentSlide]["tagLine"];
		dot = document.getElementById(currentSlide);
		dot.classList.add("dot_selected");
		oldDot = document.getElementById(currentSlide + 1);
		oldDot.classList.remove("dot_selected");
	}
}
arrowLeft.addEventListener("click", clickGauche);


//Clic Droit
const arrowRight = document.querySelector('.arrow_right');

function clickDroit() {
	if(currentSlide == tabSize - 1){
		currentSlide = 0;
		img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"]);
		tagline.innerHTML = slides[currentSlide]["tagLine"];
		dot = document.getElementById(currentSlide);
		dot.classList.add("dot_selected");
		oldDot = document.getElementById(tabSize - 1);
		oldDot.classList.remove("dot_selected");
	}else{
		currentSlide++;
		img.setAttribute("src", "./assets/images/slideshow/" + slides[currentSlide]["image"]);
		tagline.innerHTML = slides[currentSlide]["tagLine"];
		dot = document.getElementById(currentSlide);
		dot.classList.add("dot_selected");
		oldDot = document.getElementById(currentSlide-1);
		oldDot.classList.remove("dot_selected");
	}
}

arrowRight.addEventListener("click", clickDroit);