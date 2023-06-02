import { menuItems } from "../utils/data.js";

// КАРУСЕЛЬ

const carousel = document.querySelector(".carousel");
const carouselItems = carousel.querySelector(".carousel__items");
const arrowToTheLeft = carousel.querySelector(".carousel__arrow_to_left");
const arrowToTheRight = carousel.querySelector(".carousel__arrow_to_right");

// для проверки размера экрана и вызова соответствующей функции обновления выбранного элемента карусели
// Создаем обработчик события resize с использованием debounce
const handleResize = debounce(updateSelectedCarouselItem, 200);

// Добавляем обработчик события resize
window.addEventListener('resize', handleResize);

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
  const items = carouselItems.querySelectorAll(".carousel__item");
  const selectedIndex = 1;

  items.forEach((item, index) => {
    if (index === selectedIndex) {
      item.classList.add("carousel__item_checked");
    } else {
      item.classList.remove("carousel__item_checked");
    }

    const itemHeader = item.querySelector(".carousel__item-header");
    const itemRating = item.querySelector(".carousel__item-rating");
    const itemPrice = item.querySelector(".carousel__item-price");
    const itemImage = item.querySelector(".carousel__item-image");

    if (itemHeader && itemRating && itemPrice && itemImage) {
      if (index === selectedIndex) {
        itemHeader.classList.add("carousel__item-header_checked");
        itemRating.classList.add("carousel__item-rating_checked");
        itemPrice.classList.add("carousel__item-price_checked");
        itemImage.classList.add("carousel__item-image_checked");
      } else {
        itemHeader.classList.remove("carousel__item-header_checked");
        itemRating.classList.remove("carousel__item-rating_checked");
        itemPrice.classList.remove("carousel__item-price_checked");
        itemImage.classList.remove("carousel__item-image_checked");
      }
    }
  });
}

// МОДАЛЬНОЕ ОКНО

const openModalBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");
const emailInput = document.getElementsByName("contact_input")[0];
const contactButton = document.getElementsByName("contact_button")[0];

openModalBtn.addEventListener("click", function() {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
  emailInput.value = ""; // Очистка поля ввода email
  contactButton.disabled = true; // Блокировка кнопки
});

emailInput.addEventListener("input", function() {
  if (emailInput.checkValidity()) {
    contactButton.disabled = false;
  } else {
    contactButton.disabled = true;
  }
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    emailInput.value = ""; // Очистка поля ввода email
    contactButton.disabled = true; // Блокировка кнопки
  }
});

// КАРТОЧКИ В КАРУСЕЛИ ПОДГРУЗКА
const template = document.querySelector('.template').content;
const items = document.querySelector('.carousel__items');

const appendToContainer = (container, element) => {
  container.append(element);
}

function create (element) {
  const htmlElement = template.cloneNode(true); 
  htmlElement.querySelector('.carousel__item-header').textContent = element.name;
  htmlElement.querySelector('.carousel__item-rating').textContent = element.rating;
  htmlElement.querySelector('.carousel__item-price').textContent = element.price;
  const image = htmlElement.querySelector('.carousel__item-image');
  image.src = element.image;
  image.alt = element.name;
  return htmlElement;
};

function filterItems(category) {
  items.innerHTML = ''; // Очищаем контейнер с карточками
  // Фильтруем карточки на основе выбранной категории
  const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);
  // Отрисовываем отфильтрованные карточки
  filteredItems.forEach(item => {
    appendToContainer(items, create(item));
  });
  updateSelectedCarouselItem();
}

// КАРТОЧКИ ПРИ ВЫБОРЕ КАТЕГОРИИ
const popular = document.querySelector(".popular")
const popularItems = popular.querySelector(".popular__list-items");
const popularButtons = popularItems.querySelectorAll(".popular__list-item")

// функция добавляет класс нажатой кнопке и убирает класс у остальных
function handleButtonClick(clickedBtn) {
  popularButtons.forEach(function (button) {
    if (button === clickedBtn) {
      button.classList.add("popular__list-item_checked");
    } else {
      button.classList.remove("popular__list-item_checked");
    }
  });
  const category = clickedBtn.getAttribute('data-category');
  filterItems(category);
}

popularButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    handleButtonClick(button);
  });
});

filterItems('all'); // При загрузке страницы отображаем все карточки
