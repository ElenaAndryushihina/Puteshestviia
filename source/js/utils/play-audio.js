const audioWrapper = document.querySelector('.hero__multimedia--audioplayer');
const audioPreview = document.querySelector('.hero__audioplayer');
const audioButton = document.querySelector('.hero__audio-play');

const toPlayAudio = function () {

  audioButton.addEventListener('click', function () {
    audioButton.classList.add('visually-hidden');
    audioPreview.classList.add('visually-hidden');

    if (audioWrapper.classList.contains('ready')) {
      return;
    }
    audioWrapper.classList.add('ready');
    audioWrapper.insertAdjacentHTML('afterbegin', '<iframe frameborder="0" src="https://music.yandex.ru/iframe/#track/112912322/25474374"></iframe>');
  });
};

export {toPlayAudio};
