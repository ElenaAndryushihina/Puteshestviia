const videoWrapper = document.querySelector('.hero__multimedia--video');
const videoPreview = document.querySelector('.hero__preview');
const videoButton = document.querySelector('.hero__video-play');

const createVideo = () => {
  const video = document.createElement('iframe');

  if (!videoWrapper) {
    video.remove();
    return;
  }
  video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  video.setAttribute('title', 'YouTube video player');
  video.setAttribute('frameborder', '0');
  video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  video.setAttribute('allowfullscreen', '');
  videoWrapper.append(video);
};

const onClickButton = () => {
  if (!videoButton) {
    return;
  }
  videoPreview.style.display = 'none';
  videoButton.style.display = 'none';
  createVideo();
};

const toPlayVideo = () => {
  if (!videoWrapper) {
    videoButton.removeEventListener('click', onClickButton);
    return;
  }
  videoButton.addEventListener('click', onClickButton);
};

export {toPlayVideo};
