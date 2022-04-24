const slider = () => {
  const sliderWrapper = document.querySelector('[data-slider="slider"]');
  const sliderItems = document.querySelectorAll('[data-slider="slide"]');

  const sliderLeftButton = document.querySelector('[data-slider="left-button"]');
  const sliderRightButton = document.querySelector('[data-slider="right-button"]');

  const DESKTOP_NUMBER_OF_ELEMENTS = 4;
  const TABLET_NUMBER_OF_ELEMENTS = 2;
  const MOBILE_NUMBER_OF_ELEMENTS = 1;
  const ANIMATE_OPTIONS = {
    duration: 400,
    iterations: 1,
  };

  let startIndex;
  let endIndex;
  let step;

  let animateFrames;

  sliderWrapper.classList.remove('coaches__content-wrapper--no-js');

  if (window.innerWidth <= 767) {
    initSlider(MOBILE_NUMBER_OF_ELEMENTS);
  } else if (window.innerWidth <= 1199) {
    initSlider(TABLET_NUMBER_OF_ELEMENTS);
  } else {
    initSlider(DESKTOP_NUMBER_OF_ELEMENTS);
  }

  window.addEventListener('resize', onChangeWindowSize);
  sliderLeftButton.addEventListener('click', onClickLeftButton);
  sliderRightButton.addEventListener('click', onClickRightButton);

  function onChangeWindowSize() {
    if (window.matchMedia('(max-width: 767px)').matches) {
      checkLength(MOBILE_NUMBER_OF_ELEMENTS);
      step = MOBILE_NUMBER_OF_ELEMENTS;
      showSlides(startIndex, endIndex, false);
    } else if (window.matchMedia('(max-width: 1199px)').matches) {
      checkLength(TABLET_NUMBER_OF_ELEMENTS);
      step = TABLET_NUMBER_OF_ELEMENTS;
      if ((startIndex + 1) % 2 === 0) {
        startIndex -= 1;
        endIndex -= 1;
      }
      showSlides(startIndex, endIndex, false);
    } else {
      checkLength(DESKTOP_NUMBER_OF_ELEMENTS);
      step = DESKTOP_NUMBER_OF_ELEMENTS;
      if ((startIndex + 1) % 2 !== 0) {
        if ((startIndex + 2) % 4 === 0) {
          startIndex -= 2;
          endIndex -= 2;
        }
      }
      showSlides(startIndex, endIndex, false);
    }
  }

  function initSlider(numberOfElements) {
    startIndex = 0;
    endIndex = numberOfElements;
    step = numberOfElements;
    showSlides(startIndex, endIndex, false);
  }

  function showSlides(start, end, isClicked) {
    for (let i = 0; i < sliderItems.length; i++) {
      sliderItems[i].classList.remove('coaches__item--active');
    }

    for (let i = start; i < Math.min(end, sliderItems.length); i++) {
      sliderItems[i].classList.add('coaches__item--active');
      if (isClicked) {
        sliderItems[i].animate(animateFrames, ANIMATE_OPTIONS);
      }
    }
  }

  function checkLength(numberOfElements) {
    let length;
    let sliderItemsLength;

    endIndex = Math.min(endIndex, sliderItems.length);

    if (sliderItems.length % numberOfElements !== 0) {
      sliderItemsLength = sliderItems.length + numberOfElements - 1;
    } else {
      sliderItemsLength = sliderItems.length;
    }

    if (numberOfElements > step) {
      length = startIndex + numberOfElements;
    } else {
      length = endIndex - numberOfElements;
    }

    if (length <= sliderItemsLength) {
      endIndex = startIndex + numberOfElements;
    }

    if (length > sliderItemsLength) {
      startIndex -= step;
      endIndex = startIndex + numberOfElements;
    }
  }

  function onClickLeftButton(evt) {
    evt.preventDefault();

    let length;

    if (sliderItems.length % step !== 0) {
      length = sliderItems.length + step - 1;
    } else {
      length = sliderItems.length;
    }

    animateFrames = [
      {transform: 'translateX(0px)', opacity: '0'},
      {transform: 'translateX(-5px)', opacity: '0.25'},
      {transform: 'translateX(-10px)', opacity: '0.5'},
      {transform: 'translateX(-15px)', opacity: '0.75'},
      {transform: 'translateX(-20px)', opacity: '1'}
    ];

    startIndex -= step;
    endIndex -= step;

    if (startIndex < 0) {
      startIndex = length - step;
      endIndex = length;
    }
    showSlides(startIndex, Math.min(endIndex, sliderItems.length), true);
  }

  function onClickRightButton(evt) {
    evt.preventDefault();

    animateFrames = [
      {transform: 'translateX(0px)', opacity: '0'},
      {transform: 'translateX(5px)', opacity: '0.25'},
      {transform: 'translateX(10px)', opacity: '0.5'},
      {transform: 'translateX(15px)', opacity: '0.75'},
      {transform: 'translateX(20px)', opacity: '1'}
    ];

    startIndex += step;
    endIndex += step;

    if (startIndex >= sliderItems.length) {
      startIndex = 0;
      endIndex = step;
    }
    showSlides(startIndex, Math.min(endIndex, sliderItems.length), true);
  }
};

export {slider};
