const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();

lastModified.textContent =
    `Last Modification: ${document.lastModified}`;


const temperature = 5;
const windSpeed = 27;

document.querySelector("#temperature").textContent = temperature;
document.querySelector("#windspeed").textContent = windSpeed;

function calculateWindChill(temp, speed) {
    return (
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(speed, 0.16) +
        0.4275 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed) + "°C";
}

document.querySelector("#windchill").textContent = windChill;