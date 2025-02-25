let index = 0;
const slides = document.querySelectorAll(".slides img");
const caption = document.getElementById("caption");
const thumbnails = document.querySelectorAll(".thumbnails img");
const totalImages = slides.length;

function showSlide() {
    slides.forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });
    caption.textContent = slides[index].getAttribute("data-caption");
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    index = (index + 1) % totalImages;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + totalImages) % totalImages;
    showSlide();
}

function selectSlide(slideIndex) {
    index = slideIndex;
    showSlide();
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide();
    setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
});