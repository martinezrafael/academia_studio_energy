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

const slidePartners = new SlideNav(
  ".slide__partners",
  ".slide__partners___wrapper"
);

slidePartners.init();
slidePartners.addArrow(".prev__partners", ".next__partners");
