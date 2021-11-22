/* Open when someone clicks on the span element */
function openNav(url) {
    if (document.getElementById("myNav").style.left != "-100%") {
        document.getElementById("myNav").style.left = "-100%";
        document.getElementsByClassName('sticky-top')[0].style.background = "#06033600";
    } else if(document.getElementById("myNav").style.left == "-100%") {
        document.getElementById("myNav").style.left = "0%";
        document.getElementsByClassName('sticky-top')[0].style.background = "#080f29";
        var lang = localStorage.getItem("language") == "ar" ? "ar" : "fr";
        var link = url ? url : "../images/"
        var path2 = link + lang + "/Asset 3.png";
        btn.style.color = "white";
        icon.setAttribute("src", link + "../images/"+"white.svg");
        $("#logo").attr("src", path2);
        bar.setAttribute("src", link + "../images/"+"bar.png");
        if (window.innerWidth <= 600) {
            var navs = document.querySelectorAll(".overlay-content .row.d-flex");
            for(var n in navs){
                navs[n].scrollTo(80, 0)
            }
        }
    }
}

