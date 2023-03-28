const header = document.querySelector<HTMLHeadElement>("header")!;

export const scrollAnimation = (event: MouseEvent) => {
  event.preventDefault();
  if (!(event.target instanceof HTMLAnchorElement)) return;
  const targetId = event.target.getAttribute("href")?.replace("#", "")!;
  const rect = document.getElementById(targetId)?.getBoundingClientRect().top;
  if (rect) {
    const y = rect - header.clientHeight;
    scrollBy(0, y);
  } else {
    scrollTo(0, 0);
  }
};
