function slidePrices(size) {
  new Swiper(".s-prices__carousel", {
    slidesPerView: size,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

export default function resizeCarouselPrices() {
  if (document.body.clientWidth <= 800) {
    slidePrices(1);
  } else {
    slidePrices(3);
  }
}
