let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

document.querySelector('.next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalImages;
    document.querySelector('.slider').style.transform = `translateX(-${100 * currentIndex}%)`;
});

document.querySelector('.prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    document.querySelector('.slider').style.transform = `translateX(-${100 * currentIndex}%)`;
});
