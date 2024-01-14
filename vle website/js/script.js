const header = document.querySelector("header");

window.addEventListener("scroll, function"(){
    header.classList.toggle ("sticky", window.scrollY > 0)});

/*===========typing=========*/
var typed = new Typed(".typing",{
    String:["SHAYNE","MACHIM","ACHIE"],
typespeed:100,
backspeed:60,
loop:true
})
 