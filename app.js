const headerHeroImg = document.querySelector(".header__hero-img");
const headerHeroImgSrc = headerHeroImg.getAttribute("src");
const burgerIcon = document.querySelector(".nav__menu-icon");
const burgerCloseIconBtn = document.querySelector(".nav__menu-close-icon");
const navMenuContainer = document.querySelector(".nav__menu-container");
const navSideMenu = document.querySelector(".nav__side-menu--smallScreens");
const navMenuItemLists = document.querySelectorAll(".nav__menu-item-list");
const navMenuItemListsTitle = document.querySelectorAll(
  ".nav__menu-item-title-box"
);
const navMenuItemListTitleCaretIcons = document.querySelectorAll(
  ".nav__menu-item-list-caret"
);

const toggleMenu = () => {
  navSideMenu.classList.toggle("nav__side-menu--smallScreens--slide-left");
  navMenuContainer.classList.toggle("nav__menu-container--toggle-visibility");
};

burgerIcon.addEventListener("click", (e) => {
  toggleMenu();
});

burgerCloseIconBtn.addEventListener("click", (e) => {
  toggleMenu();
});

for (let i = 0; i < navMenuItemListsTitle.length; i++) {
  navMenuItemListsTitle[i].addEventListener("click", (e) => {
    navMenuItemListsTitle[i].children[1].classList.toggle(
      "nav__menu-item-list-caret--active"
    );
    navMenuItemListsTitle[i].nextElementSibling.classList.toggle(
      "nav__menu-item-list--toggle-visibility"
    );
  });
}

const adaptHeroImgSizeOnScreens = () => {
  if (screen.availWidth <= 425) {
    headerHeroImg.setAttribute(
      "src",
      headerHeroImgSrc.replace("desktop", "mobile")
    );
  } else {
    headerHeroImg.setAttribute(
      "src",
      headerHeroImgSrc.replace("mobile", "desktop")
    );
  }
};

window.addEventListener("resize", (e) => {
  console.log("fired");
  adaptHeroImgSizeOnScreens();
});

window.addEventListener("load", (e) => {
  adaptHeroImgSizeOnScreens();
});
