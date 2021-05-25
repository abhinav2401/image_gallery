// HAMBURGER MENU

document.querySelector(".hamburger").addEventListener("click", function(){
    document.querySelector(".nav-menu").classList.toggle("responsive");
    document.querySelector(".nav-menu").classList.toggle("flex-row");
    document.querySelector(".nav-menu").classList.toggle("flex-col");
    document.querySelector(".nav-bar").classList.toggle("flex-col");
    document.querySelector(".nav-bar").classList.toggle("flex-row");
    for(var i=0; i<4; i++)
        document.querySelectorAll(".nav-item")[i].classList.toggle("margin-vertical");
});