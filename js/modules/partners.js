function slidePartners(size) {
  new Swiper(".s-partners__carousel", {
    slidesPerView: size,
    spaceBetween: 40,
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

export default function resizeCarouselPartners() {
  if (document.body.clientWidth <= 800) {
    slidePartners(1);
  } else {
    slidePartners(4);
  }
}
