const tabs = () => {
  const tabControls = document.querySelectorAll('[data-tab-control]');
  const tabContent = document.querySelectorAll('[data-tab-content]');

  tabControls.forEach((control) => {
    control.addEventListener('click', (evt) => {
      evt.preventDefault();

      const attr = control.getAttribute('data-tab-control');
      const content = document.querySelector(`[data-tab-content="${attr}"]`);

      for (let i = 0; i < tabControls.length; i++) {
        if (tabControls[i].classList.contains('membership__period-link--active')) {
          tabControls[i].classList.remove('membership__period-link--active');
          break;
        }
      }
      control.classList.add('membership__period-link--active');

      for (let i = 0; i < tabContent.length; i++) {
        if (tabContent[i].classList.contains('membership__prices-list--active')) {
          tabContent[i].classList.remove('membership__prices-list--active');
          break;
        }
      }
      content.classList.add('membership__prices-list--active');
    });
  });
};

export {tabs};
