document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const homeContent = document.getElementById("home-content");

    console.log("Checking session storage...");
    console.log(sessionStorage.getItem("homeLoaded")); // Debugging

    if (!sessionStorage.getItem("homeLoaded")) {
        console.log("First time loading, showing loading screen...");
        setTimeout(() => {
            console.log("Hiding loading screen and showing content...");
            loadingScreen.style.display = "none";
            homeContent.style.display = "block";
            sessionStorage.setItem("homeLoaded", "true");
        }, 1500);
    } else {
        console.log("Page already loaded before, skipping loading screen...");
        loadingScreen.style.display = "none";
        homeContent.style.display = "block";
    }
});
