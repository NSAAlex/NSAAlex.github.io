//when the right arrow is clicked switch which image is showing
document.getElementById("hero-arrow-right").onclick = (e) => {
    e.preventDefault();
    const currentSlide = document.querySelector("#slides :not(.hidden)");
    let nextSlide = currentSlide.nextElementSibling;

    if(nextSlide == null){
        nextSlide == document.querySelector("#slides :first-child");
    }

    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hiddem");

};

document.getElementById("hero-arrow-left").onclick = (e)

const slide = (currentSlide, nextSlide) => {
    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
};