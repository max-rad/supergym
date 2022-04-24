const carousel = () => {
  const carouselWrapper = document.querySelector('[data-carousel="carousel"]');
  const carouselItems = carouselWrapper.querySelectorAll('[data-carousel="slide"]');

  const carouselLeftButton = carouselWrapper.querySelector('[data-carousel="left-button"]');
  const carouselRightButton = carouselWrapper.querySelector('[data-carousel="right-button"]');

  carouselWrapper.classList.remove('reviews__content-wrapper--no-js');

  let index = 0;
  let animateFrames;

  const ANIMATE_OPTIONS = {
    duration: 400,
    iterations: 1,
  };

  carouselLeftButton.addEventListener('click', onClickLeftButton);

  carouselRightButton.addEventListener('click', onClickRightButton);

  function showSlides() {
    for (let i = 0; i < carouselItems.length; i++) {
      carouselItems[i].classList.remove('reviews__item--active');
    }

    carouselItems[index].classList.add('reviews__item--active');
    carouselItems[index].animate(animateFrames, ANIMATE_OPTIONS);
  }

  function onClickLeftButton() {
    index--;

    animateFrames = [
      {transform: 'translateX(0px)', opacity: '0'},
      {transform: 'translateX(-5px)', opacity: '0.25'},
      {transform: 'translateX(-10px)', opacity: '0.5'},
      {transform: 'translateX(-15px)', opacity: '0.75'},
      {transform: 'translateX(-20px)', opacity: '1'}
    ];

    if (index < 0) {
      index = carouselItems.length - 1;
    }

    showSlides();
  }

  function onClickRightButton() {
    index++;

    animateFrames = [
      {transform: 'translateX(0px)', opacity: '0'},
      {transform: 'translateX(5px)', opacity: '0.25'},
      {transform: 'translateX(10px)', opacity: '0.5'},
      {transform: 'translateX(15px)', opacity: '0.75'},
      {transform: 'translateX(20px)', opacity: '1'}
    ];

    if (index >= carouselItems.length) {
      index = 0;
    }

    showSlides();
  }
};

export {carousel};
