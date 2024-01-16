import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  elem;
  position;

  constructor(slides) {
    this.position = 0;
    this.slides = slides;
    console.log("slides length ", slides.length);
    this.elem = createElement(`
      <div class="carousel">
        <!--Кнопки переключения-->
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon"/>
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon"/>
        </div>
        <div class="carousel__inner"></div>
      </div>
    `);
    let appendNode = this.elem.querySelector(".carousel__inner");
    for (let slide of slides) {
      let nodeSlide = createElement(`
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide"/>
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon"/>
            </button>
          </div>
        </div>
      `);
      appendNode.appendChild(nodeSlide);
    }
    this.elem.addEventListener("click", (event) => {
      if (event.target.closest("button")) {
        let btnNode = event.target.closest("button");
        let slideNode = btnNode.parentElement.parentElement;
        let id = slideNode.dataset.id;
        let customEvent = new CustomEvent("product-add", {
          detail: id, // Уникальный идентификатора товара из объекта товара
          bubbles: true, // это событие всплывает - это понадобится в дальнейшем
        });
        this.elem.dispatchEvent(customEvent);
      }
    });
    // Получение ссылок на оперируемые объекты
    const btnRight = this.elem.querySelector(".carousel__arrow_right");
    const btnLeft = this.elem.querySelector(".carousel__arrow_left");
    const divCarousel = this.elem.querySelector(".carousel__inner");
    btnLeft.style.display = "none";

    // Обработчик событий вправо влево
    this.elem.addEventListener("click", (event) => {
      let divCarouselWidth = divCarousel.offsetWidth;
      console.log("divCarousel.offsetWidth ", divCarousel.offsetWidth);
      console.log("this.position = ", this.position);
      if (
        !(
          event.target.closest("div") === btnLeft ||
          event.target.closest("div") === btnRight
        )
      ) {
        return;
      }

      if (event.target.closest("div") === btnLeft) {
        console.log("нажата кнопка btnLeft");
        this.position--;
        if (this.position === 0) {
          btnRight.style.display = "";
          btnLeft.style.display = "none";
        }

        if (this.position === this.slides.length - 1) {
          btnRight.style.display = "none";
          btnLeft.style.display = "";
        }
        if ((this.position < this.slides.length - 1) & (this.position > 0)) {
          btnRight.style.display = "";
          btnLeft.style.display = "";
        }

        let shift = this.position * divCarouselWidth; //!
        divCarousel.style.transform = `translateX(-${shift}px)`;
      } else {
        console.log("нажата кнопка btnRight");
        this.position++;
        if (this.position == 0) {
          btnRight.style.display = "";
          btnLeft.style.display = "none";
        } else {
          btnLeft.style.display = "";
        }
        if (this.position === this.slides.length - 1) {
          btnRight.style.display = "none";
          btnLeft.style.display = "";
        } else {
          btnRight.style.display = "";
        }
        let shift = this.position * divCarouselWidth;
        divCarousel.style.transform = `translateX(-${shift}px)`;
      }
    });
  }
}
