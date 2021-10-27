var el = "<a href='timeline.html'><img src='./images/next.png' class='animate__animated animate__pulse animate__infinite' height='200px' style='position: relative; top: -75px' ></a>";
var el2 = "<img src='./images/next.png' class='animate__animated animate__pulse animate__infinite' height='100px' style='position: relative; top: -55px' >";
var next = document.getElementsByClassName("next")[0];
var prev = document.getElementsByClassName("previous")[0];
next.innerHTML = el;
prev.innerHTML = el2;
prev.style.transform = "rotateY(180deg)";
prev.style.left = "100px";
