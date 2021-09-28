var btn = document.querySelectorAll("nav form .btn")[0];
var icon = document.querySelectorAll("nav form img")[0];
var logo = document.querySelectorAll("nav a img")[0];
var bar = document.getElementById("bar");
var body = document.getElementsByTagName('body')[0];
document.addEventListener("scroll", function () {
    //console.log( window.innerHeight + " " + window.scrollY)
    if (btn.style.color == "white" && window.scrollY >= window.innerHeight) {
        //console.log("offset out if")
        btn.style.color = "black";
        logo.setAttribute("src", "./images/logo-dark.png");
        icon.setAttribute("src", "./images/black.png");
        bar.setAttribute("src", "./images/bar2.png");
    } else if (btn.style.color == "black" && window.scrollY < window.innerHeight) {
        //console.log("offset out else if")
        btn.style.color = "white";
        icon.setAttribute("src", "./images/white.png");
        logo.setAttribute("src", "./images/Asset 3.png");
        bar.setAttribute("src", "./images/bar.png");
    }
});
particlesJS.load('particles-js', './particles.json', function () {
    console.log('callback - particles.js config loaded');
});
function hello(i, filePath) {
    document.getElementById("carro").style.pointerEvents = "none";
    document.getElementsByClassName("carousel")[0].classList.remove("is-draggable")
    var titre = document.querySelectorAll(".is-selected h1")[0];
    var cel = document.querySelectorAll(".carousel-cell.is-selected")[0];
    cel.style.animationName = "scal" + i;
    cel.style.top = "0px";
    cel.style.animationDuration = ".5s";
    cel.style.animationFillMode = "forwards";
    cel.style.animationTimingFunction = "ease-in-out"
    cel.style.animationDelay = ".5s"
    cel.style.zIndex = "500"
    if (cel.nextSibling != null) {
        cel.nextSibling.style.animationName = "run" + i;
        cel.nextSibling.style.animationDuration = ".5s";
        cel.nextSibling.style.animationFillMode = "forwards";
        cel.nextSibling.style.animationTimingFunction = "ease-in-out"
    }
    cel.previousSibling.style.animationName = "run" + (i + 2)
    cel.previousSibling.style.animationDuration = ".5s";
    cel.previousSibling.style.animationFillMode = "forwards";
    cel.previousSibling.style.animationTimingFunction = "ease-in-out";
    var read = document.querySelectorAll(".is-selected .read")[0];
    read.style.display = "none";
    var vid = document.getElementById("myVideo" + i);
    vid.classList.add("bgvid");
    vid.play();
    function loadDoc() {
        //console.log(vid.play());
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.querySelectorAll(".body")[0].innerHTML = this.responseText;
                var caro = document.getElementsByClassName("carousel")[0];
                caro.style.position = "fixed";
                caro.style.height = "100vh";
                caro.style.width = "100vw";
                caro.style.zIndex = "1";
            }
        };
        xhttp.open("GET", filePath, true);
        xhttp.send();
    }
    setTimeout(function () {
        // document.querySelectorAll(".carousel-cell img")[i].style.height = "100%";
        // document.querySelectorAll(".carousel-cell img")[i].style.width = "100%";
        var flick = document.getElementsByClassName("flickity-slider")[0];
        flick.style.width = "unset";
        document.querySelectorAll(".carousel-cell")[i].style.cursor = "auto";
        document.querySelectorAll(".body")[0].style.display = "block";
        document.querySelector("body").style.position = "relative";
        document.getElementsByClassName("previous")[0].style.display = "none";
        document.getElementsByClassName("next")[0].style.display = "none";
        document.getElementsByClassName("flickity-page-dots")[0].style.display = "none";
        document.getElementsByClassName("carousel")[0].style.top = 0;
        document.getElementsByClassName("carousel")[0].style.left = 0;
        document.getElementsByClassName("carousel")[0].style.right = 0;
        document.getElementsByClassName("carousel")[0].style.zIndex = 1;
        document.querySelectorAll(".is-selected .container")[0].style.position = "relative"
        document.querySelectorAll(".carousel-cell")[0].style.cursor = "unset"
        document.querySelectorAll(".is-selected .container")[0].style.zIndex = "500"
        vid.style.position = "absolute";
        document.getElementById("navii").classList.remove("d-flex");
        document.getElementById("navii").style.display = "none";
        document.getElementById("back").style.display = "block"
        loadDoc();
    }, 1000);
}