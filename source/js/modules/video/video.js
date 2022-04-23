const playVideo = () => {
  const videoWrapper = document.querySelector('[data-video="video-wrapper"]');
  const videoIFrame = videoWrapper.querySelector('[data-video="video"]');
  const videoPlayButton = videoWrapper.querySelector('[data-video="play-button"]');

  videoWrapper.classList.remove('gym__video__wrapper--no-js');

  videoPlayButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    /* videoIFrame.src = 'https://www.youtube.com/embed/watch?v=9TZXsZItgdw'; */
    videoWrapper.classList.add('gym__video__wrapper--active');
  });
};

export {playVideo};
