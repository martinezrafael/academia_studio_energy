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

//update year of copyright
let yearCopyright = new Date().getFullYear().toString();
let spanElementDate = document.getElementById("date-copy");
spanElementDate.textContent = yearCopyright;
