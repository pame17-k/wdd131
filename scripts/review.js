document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last modified: " + document.lastModified;

// Contador de reseñas usando localStorage
let count = localStorage.getItem("reviewCount") || 0;
count++;
localStorage.setItem("reviewCount", count);
document.getElementById("reviewCount").textContent = count;