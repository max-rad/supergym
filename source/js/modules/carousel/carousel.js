import Swiper, {Navigation} from 'swiper';

const carousel = () => {
  Swiper.use([Navigation]);

  const carouselWrapper = document.querySelector('[data-carousel="carousel"]');

  const carouselLeftButton = carouselWrapper.querySelector('[data-carousel="left-button"]');
  const carouselRightButton = carouselWrapper.querySelector('[data-carousel="right-button"]');

  carouselWrapper.classList.remove('reviews__content-wrapper--no-js');

  const swiper = new Swiper('.swiper2', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 40,

    navigation: {
      prevEl: carouselLeftButton,
      nextEl: carouselRightButton,
    },
  });
};

export {carousel};
