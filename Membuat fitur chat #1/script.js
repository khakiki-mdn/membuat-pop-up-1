const tombol = document.querySelector('div.tombol');
const container = document.querySelector('div.chat-container');
const close = document.querySelector('.close');

tombol.addEventListener('click', function () {
  container.classList.add('show');
});

close.addEventListener('click', function () {
  container.classList.remove('show');
});

container.addEventListener('click', function (e) {
  if (e.target == container) {
    container.classList.remove('show');
  }
});
