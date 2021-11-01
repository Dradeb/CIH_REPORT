var el = "<div class='animate__animated animate__pulse animate__infinite' style='position: relative;background-color: white; border-radius: 200px;  display:flex; justify-content: center; align-items:center; width:100px; height:100px'><img src='./images/next.svg' class='animate__animated animate__pulse animate__infinite' height='60%' /></div>"
var el2 = "<div class='animate__animated animate__pulse animate__infinite' style='position: relative;background-color: white; border-radius: 200px; display:flex; justify-content: center; align-items:center; width:100px; height:100px'><img src='./images/next.svg' class='animate__animated animate__pulse animate__infinite' height='60%' />";
var next = document.getElementsByClassName("next")[0];
var prev = document.getElementsByClassName("previous")[0];
next.innerHTML = el;
prev.innerHTML = el2;
