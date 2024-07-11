window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  document.getElementById("navbar").style.background = "#fff";
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
