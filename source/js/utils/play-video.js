const videoWrapper = document.querySelector('.hero__multimedia--video');
const videoPreview = document.querySelector('.hero__preview');
const videoButton = document.querySelector('.hero__video-play');

const toPlayVideo = function () {

  videoButton.addEventListener('click', function () {
    videoPreview.style.display = 'none';
    videoButton.style.display = 'none';
    videoWrapper.insertAdjacentHTML('afterbegin', `<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe>`);
  });
};

export {toPlayVideo};
