const validation = () => {
  const feedbackForm = document.querySelector('[data-form="feedback-form"]');

  validateForm(feedbackForm);

  function validateForm(form) {
    let isStorageSupport = true;
    let storageName = '';
    let storagePhone = '';

    try {
      storageName = localStorage.getItem('name');
      storagePhone = localStorage.getItem('phone');
    } catch (err) {
      isStorageSupport = false;
    }

    const nameField = form.querySelector('[data-input="name-field"]');
    const phoneField = form.querySelector('[data-input="phone-field"]');
    const submitButton = form.querySelector('[data-button="submit-button"]');

    const phonePattern = /^8-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

    if (storageName) {
      nameField.value = storageName;
    }

    if (storagePhone) {
      phoneField.value = storagePhone;
    }

    nameField.addEventListener('input', (evt) => {
      evt.preventDefault();
      const regName = /^[A-Za-zА-яа-я\s]+$/;
      let invalidMessage = [];
      nameField.setCustomValidity('');
      const name = nameField.value.trim();

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

    phoneField.addEventListener('input', (evt) => {
      const input = evt.target;
      let inputNumbersValue = input.value.replace(/\D+/g, '');
      const selectionStart = input.selectionStart;
      let outputNumbersValue = '';

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

        const phonePrefix = '8';
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

    phoneField.addEventListener('keydown', (evt) => {
      let phoneValue = phoneField.value.replace(/\D+/g, '');
      if (evt.keyCode === 8 && phoneValue.length === 1) {
        phoneField.value = '';
      }
    });

    submitButton.addEventListener('click', (evt) => {
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

export {validation};
