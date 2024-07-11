window.onscroll = function () {
  scrollFunction();
};

const navbar = document.getElementById("navbar");
const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Sự kiện cuộn trang
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-scrolled");
    navbar.classList.remove("navbar-transparent");
  } else {
    navbar.classList.remove("navbar-scrolled");
    navbar.classList.add("navbar-transparent");
  }
}

// Sự kiện toggle nav
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

// Đóng nav khi click vào link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// Sự kiện toggle theme
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  body.dataset.theme = currentTheme;

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

