window.onscroll = function() {
    var targetSection = document.getElementById("target-section");
    var targetSectionPosition = targetSection.getBoundingClientRect().top;
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= targetSectionPosition) {
        alert("You have reached the target section!");
    }
};

document.getElementById("back-to-top-btn").addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
