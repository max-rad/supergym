/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ios-vh-fix */ "./js/utils/ios-vh-fix.js");
/* harmony import */ var _modules_scroll_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll/scroll */ "./js/modules/scroll/scroll.js");
/* harmony import */ var _modules_video_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/video/video */ "./js/modules/video/video.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs/tabs */ "./js/modules/tabs/tabs.js");
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider/slider */ "./js/modules/slider/slider.js");
/* harmony import */ var _modules_carousel_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/carousel/carousel */ "./js/modules/carousel/carousel.js");
/* harmony import */ var _modules_validation_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/validation/validation */ "./js/modules/validation/validation.js");






 // ---------------------------------

window.addEventListener('DOMContentLoaded', function () {
  // Utils
  // ---------------------------------
  Object(_utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_0__["iosVhFix"])(); // Modules
  // ---------------------------------

  Object(_modules_scroll_scroll__WEBPACK_IMPORTED_MODULE_1__["smoothScroll"])();
  Object(_modules_video_video__WEBPACK_IMPORTED_MODULE_2__["video"])();
  Object(_modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_3__["tabs"])();
  Object(_modules_slider_slider__WEBPACK_IMPORTED_MODULE_4__["slider"])();
  Object(_modules_carousel_carousel__WEBPACK_IMPORTED_MODULE_5__["carousel"])();
  Object(_modules_validation_validation__WEBPACK_IMPORTED_MODULE_6__["validation"])(); // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана

  window.addEventListener('load', function () {});
}); // ---------------------------------
// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.
// привязывайте js не на классы, а на дата атрибуты (data-validate)
// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅
// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.
// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();
// используйте .closest(el)

/***/ }),

/***/ "./js/modules/carousel/carousel.js":
/*!*****************************************!*\
  !*** ./js/modules/carousel/carousel.js ***!
  \*****************************************/
/*! exports provided: carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carousel", function() { return carousel; });
var carousel = function carousel() {
  var carouselWrapper = document.querySelector('[data-carousel="carousel"]');
  var carouselItems = carouselWrapper.querySelectorAll('[data-carousel="slide"]');
  var carouselLeftButton = carouselWrapper.querySelector('[data-carousel="left-button"]');
  var carouselRightButton = carouselWrapper.querySelector('[data-carousel="right-button"]');
  carouselWrapper.classList.remove('reviews__content-wrapper--no-js');
  var index = 0;
  var animateFrames;
  var ANIMATE_OPTIONS = {
    duration: 400,
    iterations: 1
  };
  carouselLeftButton.addEventListener('click', onClickLeftButton);
  carouselRightButton.addEventListener('click', onClickRightButton);

  function showSlides() {
    for (var i = 0; i < carouselItems.length; i++) {
      carouselItems[i].classList.remove('reviews__item--active');
    }

    carouselItems[index].classList.add('reviews__item--active');
    carouselItems[index].animate(animateFrames, ANIMATE_OPTIONS);
  }

  function onClickLeftButton() {
    index--;
    animateFrames = [{
      transform: 'translateX(0px)',
      opacity: '0'
    }, {
      transform: 'translateX(-5px)',
      opacity: '0.25'
    }, {
      transform: 'translateX(-10px)',
      opacity: '0.5'
    }, {
      transform: 'translateX(-15px)',
      opacity: '0.75'
    }, {
      transform: 'translateX(-20px)',
      opacity: '1'
    }];

    if (index < 0) {
      index = carouselItems.length - 1;
    }

    showSlides();
  }

  function onClickRightButton() {
    index++;
    animateFrames = [{
      transform: 'translateX(0px)',
      opacity: '0'
    }, {
      transform: 'translateX(5px)',
      opacity: '0.25'
    }, {
      transform: 'translateX(10px)',
      opacity: '0.5'
    }, {
      transform: 'translateX(15px)',
      opacity: '0.75'
    }, {
      transform: 'translateX(20px)',
      opacity: '1'
    }];

    if (index >= carouselItems.length) {
      index = 0;
    }

    showSlides();
  }
};



/***/ }),

/***/ "./js/modules/scroll/scroll.js":
/*!*************************************!*\
  !*** ./js/modules/scroll/scroll.js ***!
  \*************************************/
/*! exports provided: smoothScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothScroll", function() { return smoothScroll; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var smoothScroll = function smoothScroll() {
  var anchorLinks = document.querySelectorAll('[data-link]');

  var _iterator = _createForOfIteratorHelper(anchorLinks),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (evt) {
        evt.preventDefault();
        var anchorHref = anchor.getAttribute('href').substring(1);
        document.getElementById(anchorHref).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};



/***/ }),

/***/ "./js/modules/slider/slider.js":
/*!*************************************!*\
  !*** ./js/modules/slider/slider.js ***!
  \*************************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
var slider = function slider() {
  var sliderWrapper = document.querySelector('[data-slider="slider"]');
  var sliderItems = document.querySelectorAll('[data-slider="slide"]');
  var sliderLeftButton = document.querySelector('[data-slider="left-button"]');
  var sliderRightButton = document.querySelector('[data-slider="right-button"]');
  var DESKTOP_NUMBER_OF_ELEMENTS = 4;
  var TABLET_NUMBER_OF_ELEMENTS = 2;
  var MOBILE_NUMBER_OF_ELEMENTS = 1;
  var ANIMATE_OPTIONS = {
    duration: 400,
    iterations: 1
  };
  var startIndex;
  var endIndex;
  var step;
  var animateFrames;
  sliderWrapper.classList.remove('coaches__content-wrapper--no-js');

  if (window.innerWidth < 767) {
    initSlider(MOBILE_NUMBER_OF_ELEMENTS);
  } else if (window.innerWidth < 1199) {
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
    for (var i = 0; i < sliderItems.length; i++) {
      sliderItems[i].classList.remove('coaches__item--active');
    }

    for (var _i = start; _i < Math.min(end, sliderItems.length); _i++) {
      sliderItems[_i].classList.add('coaches__item--active');

      if (isClicked) {
        sliderItems[_i].animate(animateFrames, ANIMATE_OPTIONS);
      }
    }
  }

  function checkLength(numberOfElements) {
    var length;
    var sliderItemsLength;
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
    var length;

    if (sliderItems.length % step !== 0) {
      length = sliderItems.length + step - 1;
    } else {
      length = sliderItems.length;
    }

    animateFrames = [{
      transform: 'translateX(0px)',
      opacity: '0'
    }, {
      transform: 'translateX(-5px)',
      opacity: '0.25'
    }, {
      transform: 'translateX(-10px)',
      opacity: '0.5'
    }, {
      transform: 'translateX(-15px)',
      opacity: '0.75'
    }, {
      transform: 'translateX(-20px)',
      opacity: '1'
    }];
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
    animateFrames = [{
      transform: 'translateX(0px)',
      opacity: '0'
    }, {
      transform: 'translateX(5px)',
      opacity: '0.25'
    }, {
      transform: 'translateX(10px)',
      opacity: '0.5'
    }, {
      transform: 'translateX(15px)',
      opacity: '0.75'
    }, {
      transform: 'translateX(20px)',
      opacity: '1'
    }];
    startIndex += step;
    endIndex += step;

    if (startIndex >= sliderItems.length) {
      startIndex = 0;
      endIndex = step;
    }

    showSlides(startIndex, Math.min(endIndex, sliderItems.length), true);
  }
};



/***/ }),

/***/ "./js/modules/tabs/tabs.js":
/*!*********************************!*\
  !*** ./js/modules/tabs/tabs.js ***!
  \*********************************/
/*! exports provided: tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabs", function() { return tabs; });
var tabs = function tabs() {
  var tabControls = document.querySelectorAll('[data-tab-control]');
  var tabContent = document.querySelectorAll('[data-tab-content]');
  tabControls.forEach(function (control) {
    control.addEventListener('click', function (evt) {
      evt.preventDefault();
      var attr = control.getAttribute('data-tab-control');
      var content = document.querySelector("[data-tab-content=\"".concat(attr, "\"]"));

      for (var i = 0; i < tabControls.length; i++) {
        if (tabControls[i].classList.contains('membership__period-link--active')) {
          tabControls[i].classList.remove('membership__period-link--active');
          break;
        }
      }

      control.classList.add('membership__period-link--active');

      for (var _i = 0; _i < tabContent.length; _i++) {
        if (tabContent[_i].classList.contains('membership__prices-list--active')) {
          tabContent[_i].classList.remove('membership__prices-list--active');

          break;
        }
      }

      content.classList.add('membership__prices-list--active');
    });
  });
};



/***/ }),

/***/ "./js/modules/validation/validation.js":
/*!*********************************************!*\
  !*** ./js/modules/validation/validation.js ***!
  \*********************************************/
/*! exports provided: validation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validation", function() { return validation; });
var validation = function validation() {
  var feedbackForm = document.querySelector('[data-form="feedback-form"]');
  validateForm(feedbackForm);

  function validateForm(form) {
    var isStorageSupport = true;
    var storageName = '';
    var storagePhone = '';

    try {
      storageName = localStorage.getItem('name');
      storagePhone = localStorage.getItem('phone');
    } catch (err) {
      isStorageSupport = false;
    }

    var nameField = form.querySelector('[data-input="name-field"]');
    var phoneField = form.querySelector('[data-input="phone-field"]');
    var submitButton = form.querySelector('[data-button="submit-button"]');
    var phonePattern = /^8-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

    if (storageName) {
      nameField.value = storageName;
    }

    if (storagePhone) {
      phoneField.value = storagePhone;
    }

    nameField.addEventListener('input', function (evt) {
      evt.preventDefault();
      var regName = /^[A-Za-zА-яа-я\s]+$/;
      var invalidMessage = [];
      nameField.setCustomValidity('');
      var name = nameField.value.trim();

      if (name.length !== 0) {
        if (!regName.test(name)) {
          invalidMessage.push('The name can contain only alphabetic characters.');
        }
      }

      if (name.length > 255) {
        invalidMessage.push('The name cannot be longer than 255 characters.');
      }

      if (invalidMessage.length > 0) {
        nameField.setCustomValidity(invalidMessage.join('\n'));
      }

      nameField.reportValidity();
    });
    phoneField.addEventListener('input', function (evt) {
      var input = evt.target;
      var inputNumbersValue = input.value.replace(/\D+/g, '');
      var selectionStart = input.selectionStart;
      var outputNumbersValue = '';

      if (input.value.length !== selectionStart) {
        if (evt.data && /\D/g.test(evt.data)) {
          input.value = inputNumbersValue;
        }

        return;
      }

      if (inputNumbersValue.length > 0) {
        if (inputNumbersValue[0] !== '8') {
          inputNumbersValue = '8' + inputNumbersValue;
        }

        var phonePrefix = '8';
        outputNumbersValue = input.value = phonePrefix;

        if (inputNumbersValue.length > 1) {
          outputNumbersValue += '-' + inputNumbersValue.substring(1, 4);
        }

        if (inputNumbersValue.length >= 5) {
          outputNumbersValue += '-' + inputNumbersValue.substring(4, 7);
        }

        if (inputNumbersValue.length >= 8) {
          outputNumbersValue += '-' + inputNumbersValue.substring(7, 9);
        }

        if (inputNumbersValue.length >= 10) {
          outputNumbersValue += '-' + inputNumbersValue.substring(9, 11);
        }
      }

      input.value = outputNumbersValue;
    });
    phoneField.addEventListener('keydown', function (evt) {
      var phoneValue = phoneField.value.replace(/\D+/g, '');

      if (evt.keyCode === 8 && phoneValue.length === 1) {
        phoneField.value = '';
      }
    });
    submitButton.addEventListener('click', function (evt) {
      if (nameField.value === '') {
        evt.preventDefault();
        nameField.setCustomValidity('Name is required.');
        nameField.reportValidity();
        nameField.focus();
      } else if (phoneField.value === '') {
        evt.preventDefault();
        phoneField.setCustomValidity('Phone is required.');
        phoneField.reportValidity();
        phoneField.focus();
      } else if (!phonePattern.test(phoneField.value) && phoneField.value !== '') {
        evt.preventDefault();
        phoneField.setCustomValidity('Invalid phone number.');
        phoneField.reportValidity();
        phoneField.focus();
      } else {
        phoneField.setCustomValidity('');
        phoneField.reportValidity();

        if (isStorageSupport) {
          localStorage.setItem('name', nameField.value);
          localStorage.setItem('phone', phoneField.value);
        }
      }
    });
  }
};



/***/ }),

/***/ "./js/modules/video/video.js":
/*!***********************************!*\
  !*** ./js/modules/video/video.js ***!
  \***********************************/
/*! exports provided: video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "video", function() { return video; });
var video = function video() {
  var videoWrapper = document.querySelector('[data-video="video-wrapper"]');
  var videoPlayer = videoWrapper.querySelector('[data-video="video-player"]');
  var videoPlayButton = videoWrapper.querySelector('[data-video="play-button"]');
  videoPlayButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    videoWrapper.classList.add('gym__video__wrapper--active');
    videoPlayer.play();
  });
};



/***/ }),

/***/ "./js/utils/ios-checker.js":
/*!*********************************!*\
  !*** ./js/utils/ios-checker.js ***!
  \*********************************/
/*! exports provided: iosChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosChecker", function() { return iosChecker; });
var iosChecker = function iosChecker() {
  return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection
  || navigator.userAgent.includes('Mac') && 'ontouchend' in document;
};

/***/ }),

/***/ "./js/utils/ios-vh-fix.js":
/*!********************************!*\
  !*** ./js/utils/ios-vh-fix.js ***!
  \********************************/
/*! exports provided: iosVhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosVhFix", function() { return iosVhFix; });
/* harmony import */ var _ios_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ios-checker */ "./js/utils/ios-checker.js");


var iosVhFix = function iosVhFix() {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    if (Object(_ios_checker__WEBPACK_IMPORTED_MODULE_0__["iosChecker"])()) {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      window.addEventListener('resize', function () {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      });
    }
  }
};



/***/ })

/******/ });
//# sourceMappingURL=main.js.map