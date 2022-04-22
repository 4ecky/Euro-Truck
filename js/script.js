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
const iconMenu = document.querySelector('.burger');
const closeMenu = document.querySelector('.header-top__close-menu')

const menuBody = document.querySelector('.header-top__inner');
const menuBodyBottom = document.querySelector('.header-bottom__menu');
if (iconMenu) {

  iconMenu.addEventListener('click', function (e) {

    iconMenu.classList.toggle('_active');

    menuBody.classList.toggle('_active');
    menuBodyBottom.classList.toggle('_active');

    document.body.classList.toggle('lock');
  });
  // Меню закрывается
  closeMenu.addEventListener('click', function () {
    menuBody.classList.remove('_active');
    menuBodyBottom.classList.remove('_active');
    document.body.classList.toggle('lock');
  });
}
// Прокрутка при клике
const menuLinks = document.querySelectorAll('.header-bottom__menu-link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  // Пишем функцию onMenuLinkClick
  function onMenuLinkClick(e) {
    const menuLink = e.target;

    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);

      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;


      if (iconMenu.classList.contains('_active')) {

        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        menuBodyBottom.classList.remove('_active');
        document.body.classList.remove('lock');
      }

      // прокручивается к нужному месту
      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
}