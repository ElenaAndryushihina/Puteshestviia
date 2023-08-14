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
    audioWrapper.insertAdjacentHTML('afterbegin', '<iframe frameborder="0" style="border:none;" width="100%" height="100%" src="https://music.yandex.ru/iframe/#track/112912322/25474374">Слушайте <a href=`https://music.yandex.ru/album/25474374/track/112912322`>001. Конец фронтенда, одинаковые фреймворки и логические свойства</a> на Яндекс Музыке</iframe>');
  });
};

export {toPlayAudio};

{/* <iframe style="border:none;" width="100%" height="180" src="https://music.yandex.ru/iframe/#track/112912322/25474374?autoplay=1"></iframe> */}
