// константы для различных модулей

// КАРУСЕЛЬ
const carousel = document.querySelector(".carousel");
export const carouselItems = carousel.querySelector(".carousel__items");
export const arrowToTheLeft = carousel.querySelector(
  ".carousel__arrow_to_left"
);
export const arrowToTheRight = carousel.querySelector(
  ".carousel__arrow_to_right"
);

export const delayTime = 200;

// классы для функций карусели
// элементы, которые используем для добавления им классов выбранных
export const classCarouselItem = ".carousel__item";
export const valueOfSelectedIndex = 1;
export const classCarouselItemChecked = "carousel__item_checked";
export const classItemHeader = ".carousel__item-header";
export const classItemRating = ".carousel__item-rating";
export const classItemPrice = ".carousel__item-price";
export const classItemImage = ".carousel__item-image";

export const classItemHeaderChecked = "carousel__item-header_checked";
export const classItemRatingChecked = "carousel__item-rating_checked";
export const classItemPriceChecked = "carousel__item-price_checked";
export const classItemImageChecked = "carousel__item-image_checked";

// МОДАЛЬНОЕ ОКНО
export const openModalBtn = document.getElementById("openModal");
export const modal = document.getElementById("modal");
export const closeModalBtn = document.getElementById("closeModal");
export const emailInput = document.getElementsByName("contact_input")[0];
export const contactButton = document.getElementsByName("contact_button")[0];

// КАРТОЧКИ В КАРУСЕЛИ ПОДГРУЗКА
export const template = document.querySelector(".template").content;

// КАРТОЧКИ ПРИ ВЫБОРЕ КАТЕГОРИИ
const popular = document.querySelector(".popular");
const popularItems = popular.querySelector(".popular__list-items");
export const popularButtons = popularItems.querySelectorAll(
  ".popular__list-item"
);
export const classPopularButtonChecked = "popular__list-item_checked";