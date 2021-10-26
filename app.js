
    function scro(name){
        document.getElementsByClassName(name)[0].scrollTo(2500, 0);
      }
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

    var lang = localStorage.getItem("language") == "ar" ? "ar" : "fr";
    var nav = $(".sticky-top");
    //console.log( window.innerHeight + " " + window.scrollY)
    if (window.scrollY >= window.innerHeight && btn.style.color == "white") {
        //console.log("offset out if")
        nav.css("background", "white");
        btn.style.color = "black";
        var path = "./images/"+lang+"/logo-dark.png";
        
        $("#logo").attr("src", path);
        // logo.setAttribute("src", path);

        icon.setAttribute("src", "./images/black.svg");
        bar.setAttribute("src", "./images/bar2.png");
    } else if (window.scrollY < window.innerHeight && btn.style.color == "black") {
        nav.css("background", "#1b599400");
        //console.log("offset out else if")
        var path2 = "./images/"+lang+"/Asset 3.png";
        btn.style.color = "white";
        icon.setAttribute("src", "./images/white.svg");
        $("#logo").attr("src", path2);
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
    $("#particles-js canvas").css("display", "none");
    if(window.innerWidth <= 476) {
        $(".is-selected .slider-item").removeClass("justify-content-between").addClass("justify-content-center").css("margin-top", "-100px");
    }

    $('script').each(function() {

        if (this.src === 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js') {
          this.parentNode.removeChild( this );
        }
    });


    document.getElementById("carro").style.pointerEvents = "none";

    document.getElementsByClassName("carousel")[0].classList.remove("is-draggable");

    document.querySelectorAll(".is-selected h1")[0].classList.add("padd");
    var image = document.createElement("img");
    image.src ="./images/scroll.svg";
    image.style.width = "80px"
    image.style.position = "absolute"
    image.style.bottom = "100px"
    image.classList.add("animate__animated")
    image.classList.add("animate__shakeY")
    image.classList.add("animate__slower")
    image.classList.add("animate__infinite")
    image.classList.add("down");
    var cel = document.querySelectorAll(".carousel-cell.is-selected")[0];
    setTimeout(()=>{
        cel.appendChild(image);
    }, 1000)
    cel.style.animationName = "scal" + i;
    cel.style.top = "0px";
    cel.style.animationDuration = ".5s";
    cel.style.animationFillMode = "forwards";
    cel.style.animationTimingFunction = "ease-in-out";
    cel.style.animationDelay = ".5s";
    cel.style.zIndex = "500";
    cel.previousSibling.style.animationName = "run" + (i + 2);
    cel.previousSibling.style.animationDuration = ".5s";
    cel.previousSibling.style.animationFillMode = "forwards";
    cel.previousSibling.style.animationTimingFunction = "ease-in-out";

    if (cel.nextSibling != null) {

        cel.nextSibling.style.animationName = "run" + i;
        cel.nextSibling.style.animationDuration = ".5s";
        cel.nextSibling.style.animationFillMode = "forwards";
        cel.nextSibling.style.animationTimingFunction = "ease-in-out";
    }


    var read = document.querySelectorAll(".is-selected .read")[0];
    read.style.display = "none";


    var vid = document.getElementById("myVideo" + i);
    //var caro = document.getElementsByClassName("carousel")[0];
    vid.classList.add("bgvid");


    vid.play();
    function loadDoc() {
        //console.log(vid.play());
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                document.querySelectorAll(".body")[0].innerHTML = this.responseText;

                $('.carousel').css({
                    "position" : "fixed",
                    "height" : "100vh",
                    "width" : "100vw",
                    "zIndex" : "1"
                });

                getLanguage();
               
                AOS.init({
                    // Global settings:
                    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
                    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
                    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
                    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
                    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
                    delay: 0, // values from 0 to 3000, with step 50ms
                    duration: 400, // values from 0 to 3000, with step 50ms
                    easing: 'ease', // default easing for AOS animations
                    once: false, // whether animation should happen only once - while scrolling down
                    mirror: true, // whether elements should animate out while scrolling past them
                    anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
                  
                  });
            
                  var k = 0;
                  while (k <= 5) {
                  
                      if(filePath == "./rapp" + k + ".html"){
                           $("body").append("<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj\" crossorigin=\"anonymous\"></script>");
                            if($("#carouselExampleIndicators") != null)
                            {   
                                $("#carouselExampleIndicators").attr("style","position: relative !important; height: 100vh; width: 100vw; z-index: 1;");
                            }
                           break;
                      }
                      
                      k++;
                  }
                
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

        
        $('.carousel').css({
            'top' : '0',
            'left' : '0',
            'right' : '0',
            'zIndex' : '1' 
        });
        $(".is-selected .container").css({
            "position" : "relative",
            "zIndex" : "500"
        }); 
        
        document.querySelectorAll(".is-selected .container")[0].style.position = "relative";
        document.querySelectorAll(".is-selected .container")[0].style.zIndex = "500";

        document.querySelectorAll(".carousel-cell")[0].style.cursor = "unset";
        
        vid.style.position = "absolute";


        document.getElementById("navii").classList.remove("d-flex");
        document.getElementById("navii").style.display = "none";

        document.getElementById("back").style.display = "block";

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
        $(".is-selected video").css("display","none");
        
    } else {
        // console.log("byyee")
        $(".nextarticle").hide();
        $(".is-selected video").show();
    }


});


