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

backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;

function loadNextImage(index) {
    const img = new Image();
    img.src = images[index];
    img.onload = () => {
        if (index === currentIndex) {
            backgroundContainer.style.backgroundImage = `url(${img.src})`;
        }
    };
}

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    loadNextImage(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(changeBackground, 3500);
});
