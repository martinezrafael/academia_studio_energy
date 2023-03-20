export default function updateYearInCopyright() {
  document.getElementById("date-copy").textContent = new Date()
    .getFullYear()
    .toString();
}
