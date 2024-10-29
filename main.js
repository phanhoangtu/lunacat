const slides = document.querySelectorAll('.slide'); // Lấy tất cả các slide
let currentIndex = 0;

// Bắt đầu hiển thị ảnh đầu tiên ngay lập tức
document.addEventListener("DOMContentLoaded", () => {
    changeBackground(); // Hiển thị ảnh đầu tiên
    setInterval(changeBackground, 5000); // Chuyển đổi mỗi 5 giây
});

function changeBackground() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.opacity = 1; // Hiện ảnh hiện tại
        } else {
            slide.style.opacity = 0; // Ẩn các ảnh khác
        }
    });

    currentIndex = (currentIndex + 1) % slides.length; // Cập nhật chỉ số ảnh hiện tại
}
