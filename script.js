const cursor = document.querySelector(".custom-cursor");

if (cursor) {
  let mouseX = 0;
  let mouseY = 0;

  const updateCursorPosition = () => {
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  };

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    updateCursorPosition();
  });

  window.addEventListener("mouseleave", () => {
    cursor.classList.add("custom-cursor--hidden");
  });

  window.addEventListener("mouseenter", () => {
    cursor.classList.remove("custom-cursor--hidden");
  });

  const interactiveSelectors = "a, button, .btn, .card";

  document.addEventListener("mouseover", (event) => {
    if (event.target.closest(interactiveSelectors)) {
      cursor.classList.add("custom-cursor--link");
    }
  });

  document.addEventListener("mouseout", (event) => {
    if (event.target.closest(interactiveSelectors)) {
      cursor.classList.remove("custom-cursor--link");
    }
  });
}

// простые анимации появления секций при скролле
const fadeSections = document.querySelectorAll(".fade-section");

if (fadeSections.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  fadeSections.forEach((section) => observer.observe(section));
} else {
  // fallback — если нет IntersectionObserver, показываем всё сразу
  fadeSections.forEach((section) => section.classList.add("is-visible"));
}

