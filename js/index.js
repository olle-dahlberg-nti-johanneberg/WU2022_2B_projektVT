
const header = document.getElementById("header");
const img = document.getElementById('img');
const burgerbutton = document.querySelector('#svg-bag')
const nav = document.querySelector('.pop-down-menu')
const btt = document.querySelector('.backtotop')

const c1 = document.querySelector('#card1')
const c2 = document.querySelector('#card2')
const c3 = document.querySelector('#card3')



const airpodsmax = document.querySelector('#airpodsmax')
const airpodscase = document.querySelector('#airpods-case')
const airpodsleft = document.querySelector('#airpods-left')
const airpodsright = document.querySelector('#airpods-right')

var scrolled2 = 0
    var lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    scrolled2 = scrolled 
    
    

       

    nav.classList.remove('nav-active')
    burgerbutton.classList.remove('toggle')

    if (scrolled >= ((scrollable * 40) / (820 - 100))) {
        header.classList.add('scrolled');
        img.style.filter = `blur(${scrolled / 100}px)`
    } 
    else {
        header.classList.remove('scrolled');
        img.style.filter = `blur(${0}px)`

        nav.classList.remove('nav-active')
        burgerbutton.classList.remove('toggle')
    }


    // airpodsmax in
    if  (scrolled >= ((scrollable * 140) / (820 - 100)) && scrolled <= ((scrollable * 350) / (820 - 100))) {
        airpodsmax.classList.add('visible')
        c1.classList.add('visible')
    }
    else {
        c1.classList.remove('visible')
        airpodsmax.classList.remove('visible')
    }


    // airpods in, svart bakgrund
    if  (scrolled >= ((scrollable * 340) / (820 - 100)) && scrolled <= ((scrollable * 550) / (820 - 100))) {
        airpodscase.classList.add('visible')
        airpodsleft.classList.add('visible')
        airpodsright.classList.add('visible')
        c2.classList.add('visible')
      
    }
    else {
        c2.classList.remove('visible')
        airpodscase.classList.remove('visible')
        airpodsleft.classList.remove('visible')
        airpodsright.classList.remove('visible')
    }


    // scroll up button in 
    if (scrolled >= ((scrollable * 720) / (820 - 100))) {
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