window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) { // Thay 100 bằng khoảng cách cụ thể bạn muốn
    navbar.style.background = "#fff"; // Áp dụng màu nền khi cuộn xuống
  } else {
    navbar.style.background = "transparent"; // Hoặc áp dụng màu nền trong suốt khi lên đầu trang
  }
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  body.dataset.theme = currentTheme;

  // Toggle theme colors based on current theme
  if (currentTheme === 'dark') {
    document.documentElement.style.setProperty('--bg-color', '#333333');
    document.documentElement.style.setProperty('--primary-bg', '#333');
    document.documentElement.style.setProperty('--color', '#e9dcdc');
    document.documentElement.style.setProperty('--togglebg', '#333');
    document.documentElement.style.setProperty('--toggleslider', '#e9dcdc');
    document.documentElement.style.setProperty('--roundcolor', '#333');
    document.documentElement.style.setProperty('--svgcolor', '#fff');
  } else {
    document.documentElement.style.setProperty('--bg-color', '#ffffff');
    document.documentElement.style.setProperty('--primary-bg', '#8c43ff');
    document.documentElement.style.setProperty('--color', '#333');
    document.documentElement.style.setProperty('--togglebg', '#d4e7d5');
    document.documentElement.style.setProperty('--toggleslider', '#fff');
    document.documentElement.style.setProperty('--roundcolor', '#fff');
    document.documentElement.style.setProperty('--svgcolor', '#111');
  }
});

const body = document.body;
const navbar = document.getElementById('navbar');

function updateHeaderBackground(theme) {
  if (theme === 'dark') {
    navbar.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--header-bg-dark');
  } else {
    navbar.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--header-bg-light');
  }
}

// Gọi hàm updateHeaderBackground khi trang được tải và khi thay đổi chủ đề
document.addEventListener('DOMContentLoaded', function () {
  updateHeaderBackground(body.dataset.theme);

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  themeToggleBtn.addEventListener('click', function () {
    const currentTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    body.dataset.theme = currentTheme;
    updateHeaderBackground(currentTheme);
  });
});

// Cập nhật màu nền của header khi cuộn trang
window.addEventListener('scroll', function () {
  const currentTheme = body.dataset.theme;
  updateHeaderBackground(currentTheme);
});
