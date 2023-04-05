const closeAnim = (content: HTMLElement): Keyframe[] => [
  {
    height: `${content.offsetHeight / 16}rem`,
  },
  {
    height: 0,
  },
];

const openAnim = (content: HTMLElement): Keyframe[] => [
  {
    height: 0,
  },
  {
    height: `${content.offsetHeight / 16}rem`,
  },
];

const animOption: KeyframeAnimationOptions = {
  duration: 400,
  easing: "ease-in-out",
};

const RUNNING_VARUE = "running";

export const accordionAnimation = () => {
  const details = document.querySelectorAll<HTMLDetailsElement>(".js-details");

  details.forEach((element) => {
    const summary = element.querySelector<HTMLElement>(".js-summary")!;
    const content = element.querySelector<HTMLElement>(".js-content")!;

    summary.addEventListener("click", (event: MouseEvent) => {
      event.preventDefault();

      if (element.dataset.animStatus === RUNNING_VARUE) return;

      if (element.open) {
        const close = content.animate(closeAnim(content), animOption);
        element.dataset.animStatus = RUNNING_VARUE;

        close.onfinish = () => {
          element.removeAttribute("open");
          element.dataset.animStatus = "";
        };
      } else {
        element.setAttribute("open", "true");
        const open = content.animate(openAnim(content), animOption);
        element.dataset.animStatus = RUNNING_VARUE;

        open.onfinish = () => {
          element.dataset.animStatus = "";
        };
      }
    });
  });
};
