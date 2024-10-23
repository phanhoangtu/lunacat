const images = [
    'assets/image-01.svg',
    'assets/image-02.svg',
    'assets/image-03.svg',
    'assets/image-04.svg'
];
let currentIndex = 0;
const preloadImages = images.map(src => {
    const img = new Image();
    img.src = src;
    return img;
});
const backgroundContainer = document.querySelector('.background-container');
let currentImageIndex = 0;
function changeBackground() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    backgroundContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;
}
backgroundContainer.style.backgroundImage = `url(${images[0]})`;
setInterval(changeBackground, 3500);
