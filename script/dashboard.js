function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
}
function updateValues() {
    document.getElementById('temperature').textContent = Math.floor(Math.random() * 40) + ' °C';
    document.getElementById('soil').textContent = Math.floor(Math.random() * 100) + ' %';
    document.getElementById('humidity').textContent = Math.floor(Math.random() * 100) + ' %';
}

setInterval(updateValues, 3000);
updateValues();