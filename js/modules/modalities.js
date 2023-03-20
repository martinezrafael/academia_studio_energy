export function slideModalities() {
  new Swiper(".s-modalities__carousel", {
    slidesPerView: 3,
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

export function tabModalities() {
  const tabMenuModalities = document.querySelectorAll(
    ".s-modalities__tabmenu li"
  );
  const tabContentModalities = document.querySelectorAll(
    ".s-modalities__tabcontent section"
  );

  if (tabMenuModalities.length && tabContentModalities) {
    tabContentModalities[0].classList.add("ativo");

    function activeTab(index) {
      tabContentModalities.forEach((item) => {
        item.classList.remove("ativo");
      });
      tabContentModalities[index].classList.add("ativo");
    }

    tabMenuModalities.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
