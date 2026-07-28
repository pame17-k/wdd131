
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;

function calculateWindChill(tempC, windKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) +
         0.3965 * tempC * Math.pow(windKmh, 0.16);
}

const temp = 25;
const wind = 10;
  if (temp <= 10 && wind > 4.8) {
    document.getElementById("chill").textContent =
      calculateWindChill(temp, wind).toFixed(1) + "°C";
  } 
  else {
    document.getElementById("chill").textContent = "N/A";
  }