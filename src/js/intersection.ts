const TRIGGER = "js-intersection";

const intersectionObserverCallback: IntersectionObserverCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove(TRIGGER);
    observer.unobserve(entry.target);
  });
};

const intersectionObserverOptions: IntersectionObserverInit = {
  rootMargin: "-50% 200% -50% 200%",
};

const observer = new IntersectionObserver(
  intersectionObserverCallback,
  intersectionObserverOptions
);

export const intersection = (targetName: string) => {
  const targets = document.querySelectorAll(targetName);
  targets.forEach((target) => {
    observer.observe(target);
  });
};
