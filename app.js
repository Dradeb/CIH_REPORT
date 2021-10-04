
$(document).ready(function(){
    // Must change script position in main files 
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('article'))
    {
      var art = searchParams.get('article');
      var progress = 0;

            var st = setInterval(() => {
            $(".flickity-prev-next-button.next").trigger("click");
            progress++;
            if(progress >= art)
            {
                
                
                setTimeout(() => {
                   $(".carousel-cell.is-selected  .read").trigger("click");
                }, 500);

                clearInterval(st);

            }     
          }, 400);
      

    }
    



});


var btn = document.querySelectorAll("nav form .btn")[0];
var icon = document.querySelectorAll("nav form img")[0];
var logo = document.querySelectorAll("nav a img")[0];
var bar = document.getElementById("bar");
var body = document.getElementsByTagName('body')[0];


document.addEventListener("scroll", function () {
    //console.log( window.innerHeight + " " + window.scrollY)
    if (window.scrollY >= window.innerHeight && btn.style.color == "white") {
        //console.log("offset out if")
        btn.style.color = "black";
        logo.setAttribute("src", "./images/logo-dark.png");
        icon.setAttribute("src", "./images/black.png");
        bar.setAttribute("src", "./images/bar2.png");
    } else if (window.scrollY < window.innerHeight && btn.style.color == "black") {
        //console.log("offset out else if")
        btn.style.color = "white";
        icon.setAttribute("src", "./images/white.png");
        logo.setAttribute("src", "./images/Asset 3.png");
        bar.setAttribute("src", "./images/bar.png");
    }
});
if($("#particles-js") != null)
{
    particlesJS.load('particles-js', './particles.json', function () {
        // console.log('callback - particles.js config loaded');
    });

}


function hello(i, filePath) {
  
    document.getElementById("carro").style.pointerEvents = "none";

    document.getElementsByClassName("carousel")[0].classList.remove("is-draggable");

    setTimeout(function () {
        
        document.querySelectorAll(".is-selected h1")[0].classList.add("padd");
    }, 1000);

    var cel = document.querySelectorAll(".carousel-cell.is-selected")[0];
    cel.style.animationName = "scal" + i;
    cel.style.top = "0px";
    cel.style.animationDuration = ".5s";
    cel.style.animationFillMode = "forwards";
    cel.style.animationTimingFunction = "ease-in-out"
    cel.style.animationDelay = ".5s"
    cel.style.zIndex = "500"
    cel.previousSibling.style.animationName = "run" + (i + 2)
    cel.previousSibling.style.animationDuration = ".5s";
    cel.previousSibling.style.animationFillMode = "forwards";
    cel.previousSibling.style.animationTimingFunction = "ease-in-out";

    if (cel.nextSibling != null) {

        cel.nextSibling.style.animationName = "run" + i;
        cel.nextSibling.style.animationDuration = ".5s";
        cel.nextSibling.style.animationFillMode = "forwards";
        cel.nextSibling.style.animationTimingFunction = "ease-in-out"
    }


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

                getLanguage();
                AOS.init({
                    // Global settings:
                    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
                    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
                    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
                    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
                    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
                    delay: 00, // values from 0 to 3000, with step 50ms
                    duration: 400, // values from 0 to 3000, with step 50ms
                    easing: 'ease', // default easing for AOS animations
                    once: false, // whether animation should happen only once - while scrolling down
                    mirror: true, // whether elements should animate out while scrolling past them
                    anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
                  
                  });
            
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
        document.querySelectorAll(".is-selected .container")[0].style.zIndex = "500"

        document.querySelectorAll(".carousel-cell")[0].style.cursor = "unset"
        
        vid.style.position = "absolute";


        document.getElementById("navii").classList.remove("d-flex");
        document.getElementById("navii").style.display = "none";

        document.getElementById("back").style.display = "block"

        loadDoc();
    }, 1000);
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};


var winH = $(window).height();
$(window).on('scroll', function() {

    
    if ($(this).scrollTop() > winH ) {
           
        $(".nextarticle").show();
        $("#myVideo1").css("display","none");
        
    } else {
        // console.log("byyee")
        $(".nextarticle").hide();
        $("#myVideo1").show();
    }


});


