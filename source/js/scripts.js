"use stict";

// Переменные
var toggleMenu = document.querySelector(".toggle-modal");
var mainNav = document.querySelector(".main-nav");
var pageHeader = document.querySelector(".page-header");
var menuWindow = document.querySelector(".menu-window");

// Menu
var openMenu = function () {
  if (mainNav.classList.contains("main-nav--hidden")
    && toggleMenu.classList.contains("toggle-modal--burger")
    && pageHeader.classList.contains("page-header--background")
    && menuWindow.classList.contains("menu-window--closed")) {
      mainNav.classList.remove("main-nav--hidden");
      toggleMenu.classList.remove("toggle-modal--burger");
      toggleMenu.classList.add("toggle-modal--cross");
      pageHeader.classList.remove("page-header--background");
      menuWindow.classList.remove("menu-window--closed");
  } else {
    mainNav.classList.add("main-nav--hidden");
    toggleMenu.classList.add("toggle-modal--burger");
    toggleMenu.classList.remove("toggle-modal--cross");
    pageHeader.classList.add("page-header--background");
    menuWindow.classList.add("menu-window--closed");
  };
};

openMenu();

toggleMenu.addEventListener("click", openMenu);
