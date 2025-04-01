let slideIndex = 0;
const slides = document.querySelectorAll("article");
const dots = document.querySelectorAll(".dot");

// Fonction pour afficher une diapositive
function showSlides(index) {
  // Masquer toutes les diapositives
  slides.forEach((slide) => slide.classList.remove("active"));
  
  // Calculer l'index de la diapositive actuelle
  slideIndex = (index + slides.length) % slides.length;

  // Afficher la diapositive active
  slides[slideIndex].classList.add("active");

  // Mettre à jour l'aperçu
  updatePreview();
}
// Boutons "Précédent" et "Suivant"
document.querySelector(".prev").addEventListener("click", () => showSlides(slideIndex - 1));
document.querySelector(".next").addEventListener("click", () => showSlides(slideIndex + 1));


// Initialisation
showSlides(slideIndex);