const videoWrapper = document.querySelector('.hero__multimedia--video');
const videoPreview = document.querySelector('.hero__preview');
const playerButton = document.querySelector('.hero__video-play');

const toPlayVideo = function () {

  playerButton.addEventListener('click', function () {
    playerButton.classList.add('visually-hidden');
    videoPreview.classList.add('visually-hidden');

    if (videoWrapper.classList.contains('ready')) {
      return;
    }
    videoWrapper.classList.add('ready');
    videoWrapper.insertAdjacentHTML('afterbegin', `<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>`);
  });
};

export {toPlayVideo};
