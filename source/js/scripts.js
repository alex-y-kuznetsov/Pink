"use stict";

// Переменные
var toggleMenu = document.querySelector(".toggle-modal");
var mainNav = document.querySelector(".main-nav");
var pageHeader = document.querySelector(".page-header");
var menuWindow = document.querySelector(".menu-window");
var applyForm = document.querySelector(".apply-form");
var errorMessage = document.querySelector(".modal--error");
var successMessage = document.querySelector(".modal--success");
var submitForm = document.querySelector(".apply-form__submit");
var closeMessage = document.querySelectorAll(".modal__button");

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

//Warnings
var triggerMessage = function (e) {
  if (applyForm) {
    var requiredFields = document.querySelectorAll(".apply-form__text-input--required");
    var result = false;
    var i;

    for(i = 0; i < requiredFields.length; i++) {
      if(requiredFields[i].value) {
        result = true;
        break;
      }
    }

    if(!result) {
      e.preventDefault();
      errorMessage.classList.add("modal--show");
      successMessage.classList.remove("modal--show");
    } else {
      e.preventDefault();
      successMessage.classList.add("modal--show");
      errorMessage.classList.remove("modal--show");
    }
  }
}

var dismissMessage = function () {
  if (applyForm) {
    if (errorMessage.classList.contains("modal--show")
    || successMessage.classList.contains("modal--show")) {
      successMessage.classList.remove("modal--show");
      errorMessage.classList.remove("modal--show");
    }
  }
}

var checkEsc = function (e) {
  if(e.keyCode === 27) {
    e.preventDefault();
    dismissMessage();
  }
}

openMenu();

toggleMenu.addEventListener("click", openMenu);
if (submitForm) {
  submitForm.addEventListener("click", triggerMessage);
  for (i = 0; i < closeMessage.length; i++) {
    closeMessage[i].addEventListener("click", dismissMessage);
  }
  window.addEventListener("keydown", checkEsc);
}
