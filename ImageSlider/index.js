const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;

let intervalId = null;


function initializeSlider(){
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);    
    }
}

document.addEventListener("DOMContentLoaded", initializeSlider);


function showSlide(index){
if (index >= slides.length) {
    slideIndex = 0;
} else if(index < 0){
    slideIndex = slides.length - 1;
}

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    slideIndex --;
    showSlide(slideIndex);
    clearInterval(intervalId);
}

function nextSlide(){
    slideIndex ++;
    showSlide(slideIndex);
}