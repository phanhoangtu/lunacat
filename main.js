const slides = document.querySelectorAll('.slide'); // Lấy tất cả các slide
let currentIndex = 0;

// Bắt đầu hiển thị ảnh đầu tiên ngay lập tức
document.addEventListener("DOMContentLoaded", () => {
    slides[currentIndex].classList.add('active'); // Hiển thị ảnh đầu tiên
    setInterval(changeBackground, 5000); // Chuyển đổi mỗi 5 giây
});

function changeBackground() {
    const currentSlide = slides[currentIndex]; // Slide hiện tại
    currentSlide.classList.remove('active'); // Ẩn slide hiện tại

    currentIndex = (currentIndex + 1) % slides.length; // Cập nhật chỉ số ảnh hiện tại
    const nextSlide = slides[currentIndex]; // Slide tiếp theo
    nextSlide.classList.add('active'); // Hiển thị slide tiếp theo
}
