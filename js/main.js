import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';




const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })

}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })

}

// header.style.background = "red"

// Remove menu
const navLink = document.querySelectorAll('.navLink')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));




// swiper slide

const newswiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
})



// Background header

function scrollHeader(){

    const header = document.getElementById('header')
    if(this.scrollY >= 50 ) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');

}

window.addEventListener('scroll', scrollHeader)


// scroll section
const sections = document.querySelectorAll("section[id]")

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navM a[href*='+ sectionId +']').classList.add('active-link')

        }
        else{
            document.querySelector('.navM a[href*='+ sectionId +']').classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive);

// SCROLL UP

function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    if(this.scrollY >= 400) scrollup.classList.add('show-scroll');
    else scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollup)


// ANIMACIONES

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:300
})

sr.reveal('.home-swiper, .new-swiper, .newslc')
sr.reveal('.categorydata, .footercontent',{interval: 100})
sr.reveal('.aboutdata, .discountimg', {origin: 'left'})
sr.reveal('.aboutimg, .discountdata', {origin: 'left'})