document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero");
  const stickyPanel = document.querySelector(".sticky-panel");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        stickyPanel.style.display = "none";
      } else {
        stickyPanel.style.display = "flex"; // ya da "block", yapısına göre
      }
    },
    {
      threshold: 0.5,
    }
  );

  if (heroSection) {
    observer.observe(heroSection);
  }
});
