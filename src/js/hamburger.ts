const ACTIVE = "js-active";

// ハンバーガーメニュー
// 必要な要素の取得
const hamburger = document.querySelector<HTMLDivElement>(".hamburger")!;
const nav = document.querySelector<HTMLElement>(".header__nav")!;
const navLinks =
  document.querySelectorAll<HTMLAnchorElement>(".header__list li a");
const siteTitle = document.querySelector<HTMLAnchorElement>(".header__title")!;

// ハンバーガーメニューを閉じる関数
const hamburgerClose = () => {
  if (hamburger.classList.contains(ACTIVE)) {
    hamburger.classList.remove(ACTIVE);
    nav.classList.remove(ACTIVE);
  }
};

export const hamburgerActions = () => {
  // cssトランジションのトリガーになるクラスの定義

  // ハンバーガーボタンクリック時にjs-activeクラスをトグル
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle(ACTIVE);
    nav.classList.toggle(ACTIVE);
  });

  // ウィンドウリサイズ時にハンバーガーメニューを閉じる
  window.addEventListener("resize", hamburgerClose);

  // ハンバーガーメニュークリック時にメニューを閉じる
  navLinks.forEach((link) => {
    link.addEventListener("click", hamburgerClose);
  });

  // サイトタイトルクリック時にもハンバーガーメニューを閉じる
  siteTitle.addEventListener("click", hamburgerClose);
};
