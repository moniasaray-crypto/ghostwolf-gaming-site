/*
  GHOSTWOLF Gaming Site
  Personalize the website by editing the SETTINGS below.
*/
const SETTINGS = {
  name: "GHOSTWOLF",
  instagramUsername: "y4ss__1ne",
  tiktokUsername: "y4ss__1ne"
};

// Set the site name throughout all pages.
document.querySelectorAll("[data-name]").forEach((element) => {
  element.textContent = SETTINGS.name;
});
document.querySelectorAll("title").forEach((element) => {
  element.textContent = element.textContent.replace("GHOSTWOLF", SETTINGS.name);
});

// Set social links and visible handles.
const instagramCard = document.querySelector('[data-social="instagram"]');
if (instagramCard) {
  const username = SETTINGS.instagramUsername.replace(/^@/, "").trim();
  instagramCard.href = `https://www.instagram.com/${encodeURIComponent(username)}/`;
  const handle = instagramCard.querySelector("[data-handle]");
  if (handle) handle.textContent = `@${username || "your_instagram"}`;
}

const tiktokCard = document.querySelector('[data-social="tiktok"]');
if (tiktokCard) {
  const username = SETTINGS.tiktokUsername.replace(/^@/, "").trim();
  tiktokCard.href = `https://www.tiktok.com/@${encodeURIComponent(username)}`;
  const handle = tiktokCard.querySelector("[data-handle]");
  if (handle) handle.textContent = `@${username || "your_tiktok"}`;
}

// Mobile navigation.
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });
}

// Reveal sections when they enter the viewport.
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

// Current year in the footer.
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
