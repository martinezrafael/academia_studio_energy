import { SlideNav } from "./module/slide.js";

const slideActivities = new SlideNav(
  ".slide__activities",
  ".slide__activities___wrapper"
);

slideActivities.init();
slideActivities.addArrow(".prev__activities", ".next__activities");

const slidePrices = new SlideNav(".slide__prices", ".slide__prices___wrapper");

slidePrices.init();
slidePrices.addArrow(".prev__prices", ".next__prices");
