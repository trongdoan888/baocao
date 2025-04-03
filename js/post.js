// Lấy phần tử cần sử dụng
const menuToggle = document.querySelector(".menu-toggle");
const sideMenu = document.querySelector(".side-menu");
const closeMenu = document.querySelector(".close-menu");

// Khi ấn vào nút 3 gạch
menuToggle.addEventListener("click", (event) => {
    sideMenu.classList.add("open");
    event.stopPropagation(); // Ngăn chặn sự kiện click lan ra document
});

// Khi ấn vào nút đóng (×)
closeMenu.addEventListener("click", () => {
    sideMenu.classList.remove("open");
});

// Khi ấn ra ngoài menu
document.addEventListener("click", (event) => {
    if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        sideMenu.classList.remove("open");
    }
});

