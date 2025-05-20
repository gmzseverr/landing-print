document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero");
  const stickyPanel = document.querySelector(".sticky-panel");
  const hoursElements = document.querySelectorAll(".hours");
  const minutesElements = document.querySelectorAll(".minutes");
  const secondsElements = document.querySelectorAll(".seconds");

  let countdownTime = 24 * 60 * 60;

  function updateTimer() {
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;

    hoursElements.forEach(
      (el) => (el.textContent = String(hours).padStart(2, "0"))
    );
    minutesElements.forEach(
      (el) => (el.textContent = String(minutes).padStart(2, "0"))
    );
    secondsElements.forEach(
      (el) => (el.textContent = String(seconds).padStart(2, "0"))
    );

    if (countdownTime > 0) {
      countdownTime--;
    } else {
      clearInterval(timerInterval);

      const offerP = document.querySelector(".offer-p");
      if (offerP) {
        offerP.textContent = "Offer expired!";
      }
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);
  updateTimer();

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        stickyPanel.style.display = "none";
      } else {
        stickyPanel.style.display = "flex";
      }
    },
    {
      threshold: 0.7,
    }
  );

  if (heroSection) {
    observer.observe(heroSection);
  }
});
