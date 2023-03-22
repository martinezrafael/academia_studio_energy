export default function tabSchedules() {
  const tabMenuSchedules = document.querySelectorAll(
    ".s-schedules__tabmenu li"
  );

  const tabMenuSchedulesLink = document.querySelectorAll(
    ".s-schedules__tabmenu li a"
  );

  const tabContentSchedules = document.querySelectorAll(
    ".s-schedules__tabcontent section"
  );

  if (tabMenuSchedules.length && tabContentSchedules.length) {
    const day = new Date().getDay();

    if (day === 0 || day === 6) {
      tabContentSchedules[0].classList.add("ativo");
      tabMenuSchedulesLink[0].classList.add("ativo");
    } else {
      tabContentSchedules[day - 1].classList.add("ativo");
      tabMenuSchedulesLink[day - 1].classList.add("ativo");
    }

    function activeTab(index) {
      tabContentSchedules.forEach((item) => {
        item.classList.remove("ativo");
      });
      tabContentSchedules[index].classList.add("ativo");
    }

    function activeDay(index) {
      tabMenuSchedulesLink.forEach((item) => {
        item.classList.remove("ativo");
      });
      tabMenuSchedulesLink[index].classList.add("ativo");
    }

    tabMenuSchedules.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
        activeDay(index);
      });
    });
  }
}
