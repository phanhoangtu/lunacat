const images = [
    'assets/image1.svg',
    'assets/image2.svg',
    'assets/image3.svg',
    'assets/image4.svg',
    'assets/image5.svg',
    'assets/image6.svg',
    'assets/image7.svg',
    'assets/image8.svg'
];

let currentIndex = 0;
const backgroundContainer = document.querySelector('.background-container');
const nextBackground = document.querySelector('.next-background');

backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    const nextImage = images[currentIndex];

    nextBackground.style.backgroundImage = `url(${nextImage})`;
    nextBackground.classList.add('fade-in');

    nextBackground.addEventListener('transitionend', () => {
        backgroundContainer.style.backgroundImage = `url(${nextImage})`;
        nextBackground.classList.remove('fade-in');
    }, { once: true });
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(changeBackground, 3500);
});
