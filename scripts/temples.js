document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Última modificación: " + document.lastModified;

const menuButton = document.getElementById("menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  // Cambiar icono ☰ ↔ ❎
  menuButton.textContent = navigation.classList.contains("open") ? "❎" : "☰";
});