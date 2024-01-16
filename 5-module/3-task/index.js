function initCarousel() {
  // Получение ссылок на оперируемые объекты
  const btnRight = document.querySelector(".carousel__arrow_right");
  const btnLeft = document.querySelector(".carousel__arrow_left");
  const divCarousel = document.querySelector(".carousel__inner");
  // Первоначальная инициализация и вычисление используемых величин
  let position = 0;
  let divCarouselWidth = divCarousel.offsetWidth;
  console.log("divCarousel = ", divCarousel);
  console.log("divCarouselWidth = ", divCarouselWidth);

  btnLeft.style.display = "none";
  btnRight.style.display = "";

  // Обработчик событий
  document.addEventListener("click", function (event) {
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
      position--; //!
      if (position == 0) {
        btnLeft.style.display = "none";
      } else {
        btnLeft.style.display = "";
      }
      if (position == 3) {
        btnRight.style.display = "none";
      } else {
        btnRight.style.display = "";
      }

      let shift = position * divCarouselWidth; //!
      divCarousel.style.transform = `translateX(-${shift}px)`;
    } else {
      console.log("нажата кнопка btnRight");
      position++;
      if (position == 0) {
        btnLeft.style.display = "none";
      } else {
        btnLeft.style.display = "";
      }
      if (position == 3) {
        btnRight.style.display = "none";
      } else {
        btnRight.style.display = "";
      }
      let shift = position * divCarouselWidth;
      divCarousel.style.transform = `translateX(-${shift}px)`;
    }
  });
}
