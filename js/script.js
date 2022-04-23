const popUp = document.querySelector('.pop-up');
const popUpOpen = document.querySelector('.button--pop-up');
const popUpClose = document.querySelector('.pop-up__close');

// Попап появляется при нажатии
popUpOpen.addEventListener('click', function (e) {
  e.preventDefault;
  popUp.classList.add('opened');
});
// Попап закрывается
popUpClose.addEventListener('click', function () {
  popUp.classList.remove('opened');
});
// Слайдеры 
new Swiper('.about-slider', {
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  speed: 1500,
});

new Swiper('.swiper__gallery', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 1500,
});

// Аккорден 
//1. получаем все кнопки
document.querySelectorAll('.accordeon').forEach((el) => {
  //2. ниже говорим, что при нажатии на любую из кнопок, будет событие
  el.addEventListener('click', () => {
    //3. получаем контент
    let content = el.nextElementSibling;

    //4. теперь нужно, чтобы при нажатии на кнопку, контент раскрывался и скрывался
    //ниже в параметрах условия говорится, что если в переменной content есть в       стилях
    //св-во max-height, то его нужно скрыть, иначе - раскрыть
    if (content.style.maxHeight) {
      document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
      //ниже говорим, что тут у content св-во max-height будет равен scrollHeight в px
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
})

// МЕНЮ БУРГЕР
const burger = document.querySelector('.burger');
const menuNav = document.querySelector('.header-bottom__menu');
const navLink = document.querySelectorAll('.header-bottom__menu-link');
const menuClose = document.querySelector('.header-bottom__close-menu');
// доп в меню
let topMenu = document.querySelector('.header-top__inner');

burger.addEventListener('click', mobileMenu);

function mobileMenu() {
  burger.classList.toggle('_active');
  menuNav.classList.toggle('_open');
  menuClose.classList.add('_active');
  topMenu.classList.add('_active');
  document.body.classList.add('_lock');
}
// при нажатии на X, меню закрывается 
menuClose.addEventListener('click', closeMenu);

function closeMenu() {
  burger.classList.toggle('_active');
  menuNav.classList.toggle('_open');
  menuClose.classList.remove('_active');
  topMenu.classList.remove('_active');
  document.body.classList.remove('_lock');
}
// при нажатии на ссылку, меню закрывается
navLink.forEach(n => n.addEventListener('click', closeMenuForLink));

function closeMenuForLink() {
  burger.classList.toggle('_active');
  menuNav.classList.toggle('_open');
  menuClose.classList.remove('_active');
  topMenu.classList.remove('_active');
  document.body.classList.remove('_lock');
}

// плавная прокрутка к разделам
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    menuClose.classList.remove('_active');
    topMenu.classList.remove('_active');
    document.body.classList.remove('_lock');
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}