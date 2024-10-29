const slides = document.querySelectorAll('.slide'); // Lấy tất cả các slide
let currentIndex = 0;

// Bắt đầu hiển thị ảnh đầu tiên ngay lập tức
document.addEventListener("DOMContentLoaded", () => {
    slides[currentIndex].classList.add('active'); // Hiển thị ảnh đầu tiên
    setInterval(changeBackground, 5000); // Chuyển đổi mỗi 5 giây
});

function changeBackground() {
    slides[currentIndex].classList.remove('active'); // Ẩn ảnh hiện tại
    currentIndex = (currentIndex + 1) % slides.length; // Cập nhật chỉ số ảnh hiện tại
    slides[currentIndex].classList.add('active'); // Hiện ảnh tiếp theo
}
