const prevBtn = document.querySelector(".carousel__arrow_to_left");
const nextBtn = document.querySelector(".carousel__arrow_to_right");
const container = document.querySelector(".carousel__items");
const items = document.querySelectorAll(".carousel__item");

let currentIndex = 0;

function updateCarousel() {
    items.forEach((item, index) => {
      if (index === currentIndex) {
        item.classList.add("carousel__item_checked");
      } else if (index === currentIndex + 1 || index === currentIndex - 1) {
        item.classList.remove("carousel__item_checked");
      } else {
        item.classList.remove("carousel__item_checked");
        item.style.opacity = 0;
      }
    });
  
    setTimeout(() => {
      items.forEach((item, index) => {
        if (index === currentIndex + 1 || index === currentIndex - 1) {
          item.style.opacity = 0.5;
        }
      });
    }, 300);
  
    container.style.transform = `translateX(-${currentIndex * 120}px)`;
  }
  
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  
  nextBtn.addEventListener("click", () => {
    if (currentIndex < items.length - 3) {
      currentIndex++;
      updateCarousel();
    }
  });
  
  updateCarousel();