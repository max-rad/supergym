const video = () => {
  const videoWrapper = document.querySelector('[data-video="video-wrapper"]');
  const videoPlayer = videoWrapper.querySelector('[data-video="video-player"]');
  const videoPlayButton = videoWrapper.querySelector('[data-video="play-button"]');

  videoPlayButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    videoWrapper.classList.add('gym__video__wrapper--active');
    videoPlayer.play();
  });
};

export {video};
