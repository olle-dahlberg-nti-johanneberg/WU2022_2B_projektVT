
const header = document.getElementById("header");
const img = document.getElementById('img');

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (scrolled >= ((scrollable * 40) / (620 - 100))) {
        header.classList.add('scrolled');
        img.style.filter = `blur(${scrolled / 100}px)`
    } else {
        header.classList.remove('scrolled');
        img.style.filter = `blur(${0}px)`
    }
});