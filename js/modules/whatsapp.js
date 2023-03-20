export default function addLinkWhatsapp() {
  document.querySelectorAll(".whatsapp").forEach((item) => {
    item.href = "https://wa.me/5511997853236";
    item.setAttribute("target", "_blank");
  });
}
