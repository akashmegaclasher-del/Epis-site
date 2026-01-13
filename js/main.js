const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

/* Close menu on link click (mobile UX polish) */
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
