const Swiper = global.Swiper;

const initHeroSwiper = () => {
  const videoWrapper = document.querySelector('.hero__multimedia--video');
  const videoPreview = document.querySelector('.hero__preview');
  const videoButton = document.querySelector('.hero__video-play');
  const audioWrapper = document.querySelector('.hero__multimedia--audioplayer');
  const audioPreview = document.querySelector('.hero__audioplayer');
  const audioButton = document.querySelector('.hero__audio-play');

  const heroSlider = new Swiper('.hero__swiper', {

    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },

    loop: true,
  });

  heroSlider.on('slideChange', () => {
    const videoIframe = videoWrapper.querySelector('iframe');
    const audioIframe = audioWrapper.querySelector('iframe');
    videoPreview.style.display = '';
    videoButton.style.display = '';
    audioPreview.style.display = '';
    audioButton.style.display = '';
    if (videoIframe) {
      videoIframe.remove();
    }
    if (audioIframe) {
      audioIframe.remove();
    }
  });
};

export {initHeroSwiper};
