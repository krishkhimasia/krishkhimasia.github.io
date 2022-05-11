function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
}

var typed = new Typed(".auto-type", {
    strings: ["Welcome To My Portfolio!"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: false
})