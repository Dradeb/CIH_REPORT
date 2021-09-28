/* Open when someone clicks on the span element */
function openNav() {
    if (document.getElementById("myNav").style.left == "-100%") {
        document.getElementById("myNav").style.left = "0%";
    } else {
        document.getElementById("myNav").style.left = "-100%";
    }

}