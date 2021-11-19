var el = "<div class='animate__animated animate__pulse animate__infinite nxt' style='position: relative;background-color: white; border-radius: 200px;  display:flex; justify-content: center; align-items:center; width:70px; height:70px'><img src='../images/next.svg' class='animate__animated animate__pulse animate__infinite' height='60%' /></div>"
var el2 = "<div class='animate__animated animate__pulse animate__infinite prv' style='position: relative;background-color: white; border-radius: 200px; display:flex; justify-content: center; align-items:center; width:70px; height:70px'><img src='../images/next.svg' class='animate__animated animate__pulse animate__infinite' height='60%' />";
var next = document.getElementsByClassName("next")[0];
var prev = document.getElementsByClassName("previous")[0];
next.innerHTML = el;
prev.innerHTML = el2;
var el3 = "<div class='animate__animated animate__pulse animate__infinite' style='position: relative; border-radius: 200px;  display:flex; justify-content: center; flex-direction: column; align-items:center;color:white; font-weight:700; width:100px; height:100px'><img src='../images/next.svg' class='animate__animated animate__pulse animate__infinite nxt' height='60%' /></div>"
var nxt = document.getElementsByClassName("nxt")[0];
var prv = document.getElementsByClassName("prv")[0];
var div = document.createElement("div")
div.classList.add("animate__pulse")
div.style.position = "absolute"
div.style.right = "50px"
div.style.top = "50%"
div.style.height = "100px"
div.style.width = "100px"
div.style.transform ="translateY(-50%)"
div.innerHTML = el3
var next_ar = document.getElementById("next-ar").href
var a = document.createElement("a")
a.href = next_ar
a.appendChild(div)
var length = document.getElementsByClassName("carousel-cell").length;

prv.addEventListener("click", ()=>{
    length+=1;
    document.body.removeChild(a)
})
nxt.addEventListener("click", ()=>{
    length-=1
    if (length == 1) {
        document.body.appendChild(a)
    }
})