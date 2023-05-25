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

const banner = document.getElementById("banner");
const bannerImg = banner.querySelector(".banner-img");
const bannerTagline = banner.querySelector("p");
const dots = banner.querySelector(".dots");

let currentSlide = 0;

function showSlide(slideIndex) {
  bannerImg.src = `./assets/images/slideshow/${slides[slideIndex].image}`;
  bannerTagline.innerHTML = slides[slideIndex].tagLine;

  // les dots
  const dotSelected = dots.querySelector(".dot_selected");
  if (dotSelected) {
    dotSelected.classList.remove("dot_selected");
  }
  dots.children[slideIndex].classList.add("dot_selected");

  currentSlide = slideIndex;
}

function nextSlide() {
	let nextIndex = currentSlide + 1;
	if (nextIndex >= slides.length) {
	  nextIndex = 0;
	}
	showSlide(nextIndex);
  }

  function previousSlide() {
	let previousIndex = currentSlide - 1;
	if (previousIndex < 0) {
	  previousIndex = slides.length - 1;
	}
	showSlide(previousIndex);
  }

// Ajouter les dot a la bannier
slides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.className = "dot";
  if (index === 0) {
    dot.classList.add("dot_selected");
  }
  dot.addEventListener("click", () => {
    showSlide(index);
  });
  dots.appendChild(dot);
});

// Ajout de Add event listeners au arrow
banner.querySelector(".arrow_left").addEventListener("click", previousSlide);
banner.querySelector(".arrow_right").addEventListener("click", nextSlide);


