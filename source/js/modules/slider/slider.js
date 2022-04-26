import Swiper, {Navigation} from 'swiper';

const slider = () => {
  Swiper.use([Navigation]);

  const sliderWrapper = document.querySelector('[data-slider="slider"]');

  const sliderLeftButton = document.querySelector('[data-slider="left-button"]');
  const sliderRightButton = document.querySelector('[data-slider="right-button"]');

  sliderWrapper.classList.remove('coaches__content-wrapper--no-js');

  const swiper = new Swiper('.swiper1', {
    loop: true,

    breakpoints: {
      1365: {
        slidesPerView: 'auto',
        spaceBetween: 40,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },

    navigation: {
      prevEl: sliderLeftButton,
      nextEl: sliderRightButton,
    },
  });
};

export {slider};
