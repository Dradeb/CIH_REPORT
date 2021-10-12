/* Open when someone clicks on the span element */
function openNav() {
    if (document.getElementById("myNav").style.left == "-100%") {
        document.getElementById("myNav").style.left = "0%";
        document.getElementsByClassName('sticky-top')[0].style.background = "#080f29";
    } else {
        document.getElementById("myNav").style.left = "-100%";
        document.getElementsByClassName('sticky-top')[0].style.background = "#06033600";
    }
    

}

