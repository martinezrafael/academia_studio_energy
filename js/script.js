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

const btn = document.querySelectorAll(".whatsapp");
console.log(btn);

btn.forEach((item) => (item.href = "https://wa.me/5511997853236"));
