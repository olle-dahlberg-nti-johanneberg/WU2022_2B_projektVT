
const header = document.getElementById("header");
const img1 = document.getElementById('img');
const burgerbutton = document.querySelector('#svg-bag')
const nav = document.querySelector('.pop-down-menu')
const btt = document.querySelector('.backtotop')
const img_article = document.querySelector('.image-article')




const sonycard = document.querySelector('#sony-card')
const airpodscard = document.querySelector('#airpods-card')



const sonyimgdesc = document.querySelector('#sony-img-desc')
const airpodsimgdesc = document.querySelector('#airpods-img-desc')

const sonybbc = document.querySelector('#sony-bbc')
const airpodsbbc = document.querySelector('#airpods-bbc')



const c1 = document.querySelector('#card1')
const c2 = document.querySelector('#card2')
const c3 = document.querySelector('#card3')



const airpodsmax = document.querySelector('#airpodsmax')
const airpodscase = document.querySelector('#airpods-case')
const airpodsleft = document.querySelector('#airpods-left')
const airpodsright = document.querySelector('#airpods-right')

const apt1 = document.querySelector('#apt1')
const apt2 = document.querySelector('#apt2')
const apt3 = document.querySelector('#apt3')
const apt4 = document.querySelector('#apt4')



var scrolled2 = 0
var lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    scrolled2 = scrolled 
    
    console.log(scrollable);

    img_article.style.transform = `translate(0px, ${scrolled * (-0.3)}px)`

    

    sonycard.style.transform = `translateY(${scrolled * (-0.05)}px)`
    airpodscard.style.transform = `translateY(${scrolled * (-0.05) + 50}px)`

    sonyimgdesc.style.transform = `translate(50px, ${scrolled * (-0.1)}px)`
    airpodsimgdesc.style.transform = `translate(50px, ${scrolled * (-0.1) + 50}px)`
    
    sonybbc.style.transform = `translate(100%, ${scrolled * (-0.1) - 50}px)`
    airpodsbbc.style.transform = `translate(100%, ${scrolled * (-0.05)}px)`


    nav.classList.remove('nav-active')
    burgerbutton.classList.remove('toggle')


    img1.style.filter = `blur(${scrolled / 100}px)`

    if (scrolled >= ((35 * scrollable) / (1120 - 100))) {
        header.classList.add('scrolled');
        
    } 
    else {
        header.classList.remove('scrolled');
        // img1.style.filter = `blur(${0}px)`

        nav.classList.remove('nav-active')
        burgerbutton.classList.remove('toggle')
    }

    // airpodsmax in
    if  (scrolled >= ((scrollable * 200) / (1220 - 100)) && scrolled <= ((scrollable * 740) / (1220 - 100))) {
        airpodsmax.classList.add('visible')
        c1.classList.add('visible')
    }
    else {
        c1.classList.remove('visible')
        airpodsmax.classList.remove('visible')
    }






    if  (scrolled >= ((scrollable * 600) / (1220 - 100)) && scrolled <= ((scrollable * 700) / (1220 - 100))) {
        apt1.classList.add('visible')
    }
    else {
        apt1.classList.remove('visible')
    }

    if  (scrolled >= ((scrollable * 650) / (1220 - 100)) && scrolled <= ((scrollable * 700) / (1220 - 100))) {
        apt2.classList.add('visible')
    }
    else {
        apt2.classList.remove('visible')
    }

    if  (scrolled >= ((scrollable * 700) / (1220 - 100)) && scrolled <= ((scrollable * 750) / (1220 - 100))) {
        apt3.classList.add('visible')
    }
    else {
        apt3.classList.remove('visible')
    }

    if  (scrolled >= ((scrollable * 750) / (1220 - 100)) && scrolled <= ((scrollable * 800) / (1220 - 100))) {
        apt4.classList.add('visible')
    }
    else {
        apt4.classList.remove('visible')
    }


    // airpods in, svart bakgrund
    if  (scrolled >= ((scrollable * 800) / (1220 - 100)) && scrolled <= ((scrollable * 900) / (1220 - 100))) {
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
    if (scrolled >= scrollable) {
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


