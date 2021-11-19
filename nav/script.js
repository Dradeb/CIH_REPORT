/* Open when someone clicks on the span element */
function openNav() {
    if (document.getElementById("myNav").style.left != "-100%") {
        document.getElementById("myNav").style.left = "-100%";
        document.getElementsByClassName('sticky-top')[0].style.background = "#06033600";
    } else if(document.getElementById("myNav").style.left == "-100%") {
        document.getElementById("myNav").style.left = "0%";
        document.getElementsByClassName('sticky-top')[0].style.background = "#080f29";
        var lang = localStorage.getItem("language") == "ar" ? "ar" : "fr";
        var path2 = "../images/" + lang + "/Asset 3.png";
        console.log(path2)
        btn.style.color = "white";
        icon.setAttribute("src", "../images/" + "white.svg");
        $("#logo").attr("src", path2);
        bar.setAttribute("src", "../images/" + "bar.png");
        if (window.innerWidth <= 600) {
            var navs = document.querySelectorAll(".overlay-content .row.d-flex");
            for(var n in navs){
                navs[n].scrollTo(80, 0)
            }
        }
    }
}

