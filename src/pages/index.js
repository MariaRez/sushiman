const carousel = document.querySelector(".carousel");
const carouselItems = carousel.querySelector(".carousel__items");
const arrowNext = carousel.querySelector(".carousel__arrow_to_left");
const arrowPrev = carousel.querySelector(".carousel__arrow_to_right");

// Устанавливаем обработчики событий на стрелки
arrowNext.addEventListener("click", shiftCarouselItemsRight);
arrowPrev.addEventListener("click", shiftCarouselItemsLeft);

// Функция для смещения элементов карусели влево
function shiftCarouselItemsLeft() {
  const firstItem = carouselItems.firstElementChild;
  carouselItems.removeChild(firstItem);
  carouselItems.appendChild(firstItem);
  carouselItems.style.transform = "translateX(-120px)";
  setTimeout(() => {
    carouselItems.style.transform = "translateX(0)";
    updateSelectedCarouselItemLeft();
  }, 0);
}

// Функция для смещения элементов карусели вправо
function shiftCarouselItemsRight() {
  const lastItem = carouselItems.lastElementChild;
  carouselItems.removeChild(lastItem);
  carouselItems.prepend(lastItem);
  carouselItems.style.transform = "translateX(120px)";
  setTimeout(() => {
    carouselItems.style.transform = "translateX(0)";
    updateSelectedCarouselItemRight();
  }, 0);
}

// Функция для обновления выбранного элемента карусели при нажатии кнопки налево
function updateSelectedCarouselItemLeft() {
  const items = carouselItems.querySelectorAll(".carousel__item");
  const carouselWidth = carousel.offsetWidth;
  const itemWidth = items[0].offsetWidth;
  const currentIndex = Math.round(carouselItems.scrollLeft / itemWidth);
  const selectedIndex = Math.floor(
    (currentIndex + carouselWidth / itemWidth) / 2
  );

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

// Функция для обновления выбранного элемента карусели при нажатии кнопки направо
function updateSelectedCarouselItemRight() {
  const items = carouselItems.querySelectorAll(".carousel__item");
  const carouselWidth = carousel.offsetWidth;
  const itemWidth = items[0].offsetWidth;
  const currentIndex = Math.round(carouselItems.scrollLeft / itemWidth);
  const selectedIndex = Math.floor(
    (currentIndex + carouselWidth / itemWidth) / 2 - 1
  );

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

// Инициализация выбранного элемента при загрузке страницы
updateSelectedCarouselItemRight();
