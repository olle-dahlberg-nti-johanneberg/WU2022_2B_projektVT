
const header = document.getElementById("header");
const img = document.getElementById('img');
const burgerbutton = document.querySelector('#hamburgermenu')
const nav = document.querySelector('.pop-down-menu')
const btt = document.querySelector('.backtotop')
var scrolled2 = 0
    var lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    scrolled2 = scrolled 
    
    

       

    nav.classList.remove('nav-active')
    burgerbutton.classList.remove('toggle')

    if (scrolled >= ((scrollable * 40) / (620 - 100))) {
        header.classList.add('scrolled');
        img.style.filter = `blur(${scrolled / 100}px)`
    } 
    else {
        header.classList.remove('scrolled');
        img.style.filter = `blur(${0}px)`

        nav.classList.remove('nav-active')
        burgerbutton.classList.remove('toggle')
    }


    if (scrolled >= ((scrollable * 420) / (620 - 100))) {
        btt.classList.add('show');
    } 
    else {
        btt.classList.remove('show');
    }
});


window.addEventListener("scroll", function(){ 
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > lastScrollTop){
        console.log("ner")
    } else {
       console.log("upp")
    }
    lastScrollTop = st <= 0 ? 0 : st; 
 }, false)


function toggleMenu() {
    nav.classList.toggle('nav-active')
    burgerbutton.classList.toggle('toggle')
}

burgerbutton.addEventListener('click', toggleMenu)