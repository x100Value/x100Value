(() => {
  const revealItems = document.querySelectorAll(".reveal");
  const counterItems = document.querySelectorAll("[data-count]");
  const barItems = document.querySelectorAll(".bar-fill");
  const radialItems = document.querySelectorAll(".radial-ring");

  const runCounter = (el) => {
    const target = Number(el.dataset.count || 0);
    if (!target) return;
    const duration = 950;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = String(value);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("in-view");

        if (entry.target.matches("[data-count]")) {
          runCounter(entry.target);
        }

        if (entry.target.matches(".bar-fill")) {
          const fill = Number(entry.target.dataset.fill || 0);
          entry.target.style.width = `${Math.max(0, Math.min(fill, 100))}%`;
        }

        if (entry.target.matches(".radial-ring")) {
          const target = Math.max(0, Math.min(Number(entry.target.dataset.degree || 0), 100));
          const valueNode = entry.target.querySelector(".radial-number");
          let current = 0;
          const timer = setInterval(() => {
            current += 1;
            entry.target.style.setProperty("--deg", String(current));
            if (valueNode) valueNode.textContent = `${current}%`;
            if (current >= target) clearInterval(timer);
          }, 14);
        }

        obs.unobserve(entry.target);
      }
    },
    { threshold: 0.2 }
  );

  for (const el of revealItems) observer.observe(el);
  for (const el of counterItems) observer.observe(el);
  for (const el of barItems) observer.observe(el);
  for (const el of radialItems) observer.observe(el);
})();
