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

const preloadImages = images.map(src => {
    const img = new Image();
    img.src = src;
    return img;
});

const backgroundContainer = document.querySelector('.background-container');

backgroundContainer.style.backgroundImage = `url(${images[0]})`;

let imagesLoaded = 0;

preloadImages.forEach((img) => {
    img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === preloadImages.length) {
            setInterval(changeBackground, 3500);
        }
    };
});

function changeBackground() {
    backgroundContainer.style.transition = 'none';
    backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;
    setTimeout(() => {
        backgroundContainer.style.transition = 'background-image 1s ease-in-out, background-size 1s ease-in-out';
        backgroundContainer.style.backgroundSize = 'cover';
    }, 50);
    currentIndex = (currentIndex + 1) % images.length;
}
