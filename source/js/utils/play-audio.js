const audioWrapper = document.querySelector('.hero__multimedia--audioplayer');
const audioPreview = document.querySelector('.hero__audioplayer');
const audioButton = document.querySelector('.hero__audio-play');

const toPlayAudio = function () {

  audioButton.addEventListener('click', function () {
    audioPreview.style.display = 'none';
    audioButton.style.display = 'none';
    audioWrapper.insertAdjacentHTML('afterbegin', '<iframe frameborder="0" src="https://music.yandex.ru/iframe/#track/112912322/25474374"></iframe>');
  });
};

export {toPlayAudio};
