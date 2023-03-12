import { SlideNav } from "./module/slide.js";

const slidemodalities = new SlideNav(
  ".s-modalities__slide",
  ".s-modalities__slide___wrapper"
);

slidemodalities.init();
slidemodalities.addArrow(".s-prev__modalities", ".s-next__modalities");

const slideprices = new SlideNav(
  ".s-prices__slide",
  ".s-prices__slide___wrapper"
);

slideprices.init();
slideprices.addArrow(".s-prev__prices", ".s-next__prices");

const slidepartners = new SlideNav(
  ".s-partners__slide",
  ".s-partners__slide___wrapper"
);

slidepartners.init();
slidepartners.addArrow(".s-prev__partners", ".s-next__partners");

//add link whataspp for href
const btn = document.querySelectorAll(".whatsapp");
btn.forEach((item) => (item.href = "https://wa.me/5511997853236"));
btn.forEach((item) => {
  item.setAttribute("target", "_blank");
});

//update year of copyright
let yearCopyright = new Date().getFullYear().toString();
let spanElementDate = document.getElementById("date-copy");
spanElementDate.textContent = yearCopyright;

//add tab menu modalities
const tabMenuModalities = document.querySelectorAll(
  ".s-tabmenu__modalities li"
);

const tabContentModalities = document.querySelectorAll(
  ".s-tabcontent__modalities section"
);

if (tabMenuModalities.length && tabContentModalities.length) {
  tabContentModalities[1].classList.add("ativo");

  function activeTab(index) {
    tabContentModalities.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContentModalities[index].classList.add("ativo");
  }

  tabMenuModalities.forEach((item, index) => {
    item.addEventListener("click", () => {
      activeTab(index);
    });
  });
}

//add tab menu schedules
const tabMenuSchedules = document.querySelectorAll(".s-tabmenu__schedules li");

const tabContentSchedules = document.querySelectorAll(
  ".s-tabcontent__schedules section"
);

if (tabMenuSchedules.length && tabContentSchedules.length) {
  const dayActive = new Date().getDay();
  console.log(dayActive);

  if (dayActive === 0 || dayActive === 6) {
    tabContentSchedules[0].classList.add("ativo");
    tabMenuSchedules[0].classList.add("ativo");
  } else {
    tabContentSchedules[dayActive - 1].classList.add("ativo");
    tabMenuSchedules[dayActive - 1].classList.add("ativo");
  }

  function activeMenuSchedule(index) {
    tabMenuSchedules.forEach((item) => {
      item.classList.remove("ativo");
    });
    tabMenuSchedules[index].classList.add("ativo");
  }

  function activeTabSchedule(index) {
    tabContentSchedules.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContentSchedules[index].classList.add("ativo");
  }

  tabMenuSchedules.forEach((item, index) => {
    item.addEventListener("click", () => {
      activeTabSchedule(index);
      activeMenuSchedule(index);
    });
  });
}
