import "../pages/index.css";

import { menuItems } from "../utils/menuItems.js";
import {
  carouselItems,
  arrowToTheLeft,
  arrowToTheRight,
  delayTime,
  classCarouselItem,
  valueOfSelectedIndex,
  classCarouselItemChecked,
  classItemHeader,
  classItemRating,
  classItemPrice,
  classItemImage,
  classItemHeaderChecked,
  classItemRatingChecked,
  classItemPriceChecked,
  classItemImageChecked,
  modal,
  offerBtn,
  closeModalBtn,
  emailInput,
  contactButton,
  search,
  template,
  popularButtons,
  classPopularButtonChecked,
  modalHeader,
  modalDescription,
  headerInOffers,
  descriptionInOffers,
  headerInSearch,
  descriptionInSearch,
  searchBtn,
} from "../utils/constants.js";

// КАРУСЕЛЬ
// для проверки размера экрана и вызова соответствующей функции обновления выбранного элемента карусели
// Создаем обработчик события resize с использованием debounce
const handleResize = debounce(updateSelectedCarouselItem, delayTime);

window.addEventListener("resize", handleResize);

// Функция debounce, ограничивающая частоту вызова функции
function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Устанавливаем обработчики событий на стрелки
arrowToTheLeft.addEventListener("click", shiftCarouselItemsLeft);
arrowToTheRight.addEventListener("click", shiftCarouselItemsRight);

// Функция для смещения элементов карусели вправо
function shiftCarouselItemsRight() {
  const firstItem = carouselItems.firstElementChild;
  carouselItems.removeChild(firstItem);
  carouselItems.appendChild(firstItem);
  carouselItems.style.transform = "translateX(-120px)";
  setTimeout(() => {
    carouselItems.style.transform = "translateX(0)";
    updateSelectedCarouselItem();
  }, 0);
}

// Функция для смещения элементов карусели влево
function shiftCarouselItemsLeft() {
  const lastItem = carouselItems.lastElementChild;
  carouselItems.removeChild(lastItem);
  carouselItems.prepend(lastItem);
  carouselItems.style.transform = "translateX(120px)";
  setTimeout(() => {
    carouselItems.style.transform = "translateX(0)";
    updateSelectedCarouselItem();
  }, 0);
}

// Функция для обновления выбранного элемента карусели
function updateSelectedCarouselItem() {
  const items = carouselItems.querySelectorAll(classCarouselItem);
  const selectedIndex = valueOfSelectedIndex;

  items.forEach((item, index) => {
    if (index === selectedIndex) {
      item.classList.add(classCarouselItemChecked);
    } else {
      item.classList.remove(classCarouselItemChecked);
    }

    const itemHeader = item.querySelector(classItemHeader);
    const itemRating = item.querySelector(classItemRating);
    const itemPrice = item.querySelector(classItemPrice);
    const itemImage = item.querySelector(classItemImage);

    if (itemHeader && itemRating && itemPrice && itemImage) {
      if (index === selectedIndex) {
        itemHeader.classList.add(classItemHeaderChecked);
        itemRating.classList.add(classItemRatingChecked);
        itemPrice.classList.add(classItemPriceChecked);
        itemImage.classList.add(classItemImageChecked);
      } else {
        itemHeader.classList.remove(classItemHeaderChecked);
        itemRating.classList.remove(classItemRatingChecked);
        itemPrice.classList.remove(classItemPriceChecked);
        itemImage.classList.remove(classItemImageChecked);
      }
    }
  });
}

// МОДАЛЬНОЕ ОКНО

function openModal () {
  modal.style.display = "flex";
}

function closeModal () {
  modal.style.display = "none";
}

offerBtn.addEventListener("click", function () {
  openModal();
  modalHeader.textContent = headerInOffers;
  modalDescription.textContent = descriptionInOffers;
});

closeModalBtn.addEventListener("click",closeModal());

emailInput.addEventListener("input", function () {
  if (emailInput.checkValidity()) {
    contactButton.disabled = false;
  } else {
    contactButton.disabled = true;
  }
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    searchBtn.value = "";
    emailInput.value = "";
    contactButton.disabled = true;
  }
});

// ПОИСК
search.addEventListener("submit", function (evt) {
  evt.preventDefault();
  openModal();
  modalHeader.textContent = headerInSearch;
  modalDescription.textContent = descriptionInSearch;
})

// КАРТОЧКИ В КАРУСЕЛИ ПОДГРУЗКА
const appendToContainer = (container, element) => {
  container.append(element);
};

function create(element) {
  const htmlElement = template.cloneNode(true);
  htmlElement.querySelector(classItemHeader).textContent = element.name;
  htmlElement.querySelector(classItemRating).textContent = element.rating;
  htmlElement.querySelector(classItemPrice).textContent = element.price;
  const image = htmlElement.querySelector(classItemImage);
  image.src = element.image;
  image.alt = element.name;
  return htmlElement;
}

function filterItems(category) {
  carouselItems.innerHTML = ""; // Очищаем контейнер с карточками
  // Фильтруем карточки на основе выбранной категории
  const filteredItems =
    category === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === category);
  // Отрисовываем отфильтрованные карточки
  filteredItems.forEach((item) => {
    appendToContainer(carouselItems, create(item));
  });
  updateSelectedCarouselItem();
}

// КАРТОЧКИ ПРИ ВЫБОРЕ КАТЕГОРИИ
// функция добавляет класс нажатой кнопке и убирает класс у остальных
function handleButtonClick(clickedBtn) {
  popularButtons.forEach(function (button) {
    if (button === clickedBtn) {
      button.classList.add(classPopularButtonChecked);
    } else {
      button.classList.remove(classPopularButtonChecked);
    }
  });
  const category = clickedBtn.getAttribute("data-category");
  filterItems(category);
}

popularButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    handleButtonClick(button);
  });
});

filterItems("all"); // При загрузке страницы отображаем все карточки
