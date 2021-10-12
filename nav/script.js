/* Open when someone clicks on the span element */
function openNav() {
    if (document.getElementById("myNav").style.left == "-100%") {
        document.getElementById("myNav").style.left = "0%";
        document.getElementsByClassName('sticky-top')[0].style.background = "#080f29";
        var lang = localStorage.getItem("language") == "ar" ? "ar" : "fr";
    var path2 = "./images/"+lang+"/Asset 3.png";
        btn.style.color = "white";
        icon.setAttribute("src", "./images/white.png");
        $("#logo").attr("src", path2);
        bar.setAttribute("src", "./images/bar.png");
    } else {
        document.getElementById("myNav").style.left = "-100%";
        document.getElementsByClassName('sticky-top')[0].style.background = "#06033600";
    }
    

}

