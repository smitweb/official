// script.js

document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    showSlide(currentSlide); // Initial display

    // Gallery slider
    const gallery = document.querySelector('.gallery');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const prevButton = document.querySelector('.gallery-prev');
    const nextButton = document.querySelector('.gallery-next');
    const dots = document.querySelectorAll('.gallery-dots .dot');
    let galleryIndex = 0;

    function showGallerySlide(index) {
        galleryItems.forEach((item, i) => {
            item.style.transform = `translateX(${-index * 100}%)`;
        });
        updateDots(index);
    }

    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', () => {
        galleryIndex = (galleryIndex > 0) ? galleryIndex - 1 : galleryItems.length - 1;
        showGallerySlide(galleryIndex);
    });

    nextButton.addEventListener('click', () => {
        galleryIndex = (galleryIndex + 1) % galleryItems.length;
        showGallerySlide(galleryIndex);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            galleryIndex = i;
            showGallerySlide(galleryIndex);
        });
    });

    showGallerySlide(galleryIndex); // Initial display
});
