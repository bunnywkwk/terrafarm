document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-img");

    async function fetchSensorData() {
        try {
            // Replace this URL with your actual API endpoint where the sensor data is stored
            const response = await fetch("https://your-sensor-api.com/data"); 
            const data = await response.json();

            return data.plants; // Assuming the API returns an array of plant data
        } catch (error) {
            console.error("Error fetching sensor data:", error);
            return [];
        }
    }

    async function updateSensorData(index) {
        const plantData = await fetchSensorData(); // Fetch latest data from the sensor

        if (plantData.length === 0) return; // If no data, don't update

        document.getElementById("temperature").innerText = `${plantData[index].temp} °C`;
        document.getElementById("soil-moisture").innerText = `${plantData[index].moisture} %`;
        document.getElementById("humidity").innerText = `${plantData[index].humidity} %`;
        document.getElementById("status-text").innerText = plantData[index].status;

        // If the API returns image URLs, update the carousel images dynamically
        if (plantData[index].image) {
            images[currentIndex].src = plantData[index].image;
        }
    }

    function changeImage(indexChange) {
        images[currentIndex].classList.remove("active"); // Fade out current image
        currentIndex = (currentIndex + indexChange + images.length) % images.length;

        setTimeout(() => {
            images.forEach(img => img.style.opacity = "0"); // Make all images invisible
            images[currentIndex].style.opacity = "1"; // Fade in next image
            updateSensorData(currentIndex);
        }, 300); // Delay transition for smoother effect
    }

    window.prevImage = () => {
        clearInterval(autoSlide);
        changeImage(-1);
        startAutoSlide();
    };

    window.nextImage = () => {
        clearInterval(autoSlide);
        changeImage(1);
        startAutoSlide();
    };

    // Initial sensor data setup
    updateSensorData(currentIndex);

    // Auto-switch images every 5 seconds
    let autoSlide;
    function startAutoSlide() {
        autoSlide = setInterval(() => changeImage(1), 5000);
    }
    startAutoSlide();
});
