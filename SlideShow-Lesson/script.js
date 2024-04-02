const swiper = new Swiper('.swiper',{
  // option(setting)
  loop: true,
  // pagination view setting
  pagination: {
    el: '.swiper-pagination', //pagination
  },
  // navigation button setting
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});