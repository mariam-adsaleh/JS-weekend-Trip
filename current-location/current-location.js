document.addEventListener("DOMContentLoaded", function () {
    getLocation();
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var location = "Latitude: " + latitude + ", Longitude: " + longitude;
    document.getElementById("location").innerHTML = location;
}