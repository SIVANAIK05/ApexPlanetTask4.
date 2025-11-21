 // ===== MOBILE MENU TOGGLE WITH ANIMATION =====
function toggleMenu() {
  const nav = document.getElementById("navMenu");

  if (nav.style.display === "flex") {
    nav.style.opacity = "0";
    nav.style.transform = "translateY(-10px)";
    setTimeout(() => (nav.style.display = "none"), 200);
  } else {
    nav.style.display = "flex";
    nav.style.opacity = "0";
    nav.style.transform = "translateY(-10px)";
    setTimeout(() => {
      nav.style.opacity = "1";
      nav.style.transform = "translateY(0)";
    }, 20);
  }
}

// ===== PAGE FADE-IN EFFECT =====
window.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "1s";
    document.body.style.opacity = 1;
  }, 100);
});

// ===== BUTTON RIPPLE EFFECT =====
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("hero-btn") ||
      e.target.classList.contains("project-btn") ||
      e.target.classList.contains("contact-btn")) {

    let ripple = document.createElement("span");
    ripple.classList.add("ripple");
    e.target.appendChild(ripple);

    let x = e.clientX - e.target.getBoundingClientRect().left;
    let y = e.clientY - e.target.getBoundingClientRect().top;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => ripple.remove(), 600);
  }
});