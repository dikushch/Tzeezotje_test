let body = document.querySelector('body');
let header = document.querySelector('.header');
let menu = document.querySelector('.h-nav');
let brg = document.querySelector('.header__brg');
let Links = document.querySelectorAll('.h-nav__link');

brg.addEventListener('click', () => {
  brg.classList.toggle('open');
  menu.classList.toggle('open');
  header.classList.toggle('open')
  body.classList.toggle('lock');
});

for (let link of Links) {
  link.addEventListener('click', () => {
    brg.classList.remove('open');
    menu.classList.remove('open');
    header.classList.remove('open');
    body.classList.remove('lock');
  })
}

header.addEventListener('click', () => {
  if (event.target === header && header.classList.contains('open')) {
    brg.classList.remove('open');
    menu.classList.remove('open');
    header.classList.remove('open');
    body.classList.remove('lock');
  }
});

window.addEventListener('scroll', () => {
  if (pageYOffset > 300) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})
// ###############################################
const swiper1 = new Swiper('.feedback__slider', {
  slidesPerView: 1,
  autoHeight: true,
  loop: true,

  navigation: {
    nextEl: '.feedback__btn--next',
    prevEl: '.feedback__btn--prev',
  },
});

const swiper2 = new Swiper('.gallery__swiper', {
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: '.gallery__btn--next',
    prevEl: '.gallery__btn--prev',
  },
});
// ###############################################
const formOpenBtn = document.querySelector('.hero__btn');
const formCloseBtn = document.querySelector('.p-form__close');
const form = document.querySelector('.popup');
const formSendData = document.querySelector('.p-form__btn');

formOpenBtn.addEventListener('click', () => {
  form.classList.add('open');
  body.classList.add('lock');
});

formCloseBtn.addEventListener('click', (event) => {
  event.preventDefault();
  form.classList.remove('open');
  body.classList.remove('lock');
});

form.addEventListener('click', () => {
  if (event.target === form) {
    form.classList.remove('open');
    body.classList.remove('lock');
  }
});
// ###############################################
$(".p-form").submit(function (event) {
  event.preventDefault();

  let formData = $(this).serialize();

  $.post('//jsonplaceholder.typicode.com/posts', formData, function (response) {
    alert(JSON.stringify(response));
  }).done(function () {
    console.log('success');
  }).fail(function () {
    console.log('fail');
  });

  form.classList.remove('open');
  body.classList.remove('lock');
});