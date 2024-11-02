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
const heartContainer = document.getElementById('heart-container');
const heart = document.getElementById('heart');

backgroundContainer.style.backgroundColor = 'pink'; // Set initial background color
heartContainer.style.display = 'flex'; // Show heart container

let imagesLoaded = 0;

// Function to handle heart animation
function createSmallHearts() {
    for (let i = 0; i < 5; i++) { // Create 5 small hearts
        const smallHeart = document.createElement('div');
        smallHeart.classList.add('small-heart');
        smallHeart.style.left = `${Math.random() * 100}px`; // Random horizontal position
        smallHeart.style.animationDelay = `${Math.random() * 0.5}s`; // Random delay for animation
        heartContainer.appendChild(smallHeart);
        
        // Remove small heart after animation ends
        smallHeart.addEventListener('animationend', () => {
            smallHeart.remove();
        });
    }
}

// Function to start the slideshow after images have loaded
function startSlideshow() {
    // Start showing the first image immediately after loading
    backgroundContainer.style.transition = 'background-color 1s ease-in-out'; // Transition effect for background color
    heartContainer.style.transition = 'opacity 1s ease-in-out'; // Transition for heart
    heartContainer.style.opacity = '0'; // Fade out heart container

    // After fading out, hide the heart container and change background
    setTimeout(() => {
        heartContainer.style.display = 'none'; // Hide heart container
        backgroundContainer.style.backgroundColor = 'transparent'; // Prepare to show images
        setInterval(changeBackground, 5000); // Change image every 5 seconds
    }, 1000); // Wait for the transition to complete
}

// Load all images
preloadImages.forEach((img) => {
    img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === preloadImages.length) {
            // All images are loaded, now start the slideshow
            startSlideshow(); // Start the slideshow immediately after loading all images
        }
    };
});

// Change background function
function changeBackground() {
    const currentSlide = backgroundContainer.querySelector('.slide.active');
    if (currentSlide) currentSlide.classList.remove('active');

    const nextSlide = backgroundContainer.querySelector(`.slide:nth-child(${currentIndex + 1})`);
    nextSlide.classList.add('active'); // Show next slide

    currentIndex = (currentIndex + 1) % images.length; // Update index
}

// Event listener for heart click
heart.addEventListener('click', () => {
    createSmallHearts();
});
