///// Responsive Navbar /////
const nav = document.querySelector('#test');

function responavBar() {
    nav.classList.toggle("responavBar");
}
const inputEmail = document.getElementById('nom');
const error = document.getElementById('error');

function emailValidate() {
    if (!inputEmail.value || inputEmail.value.indexOf('@') === -1) {
        inputEmail.value = "";
        error.style.color = "red"
        error.innerText = 'Please enter your Email !';
    } else {
        inputEmail.value = "";
    }
}
const carousel = document.querySelector('.your-selector-for-carousel');
const slides = document.querySelector('.your-selector-for-carousel-slide')
//////////////////
var yourVariable = new PureJSCarousel({
    carousel: '.carousel',
    slide: '.slides',
    // display next / prev buttons
    btnNext: false,
    btnPrev: false,
    // infinite loop
    infinite: true,
    // scroll elements one by one
    oneByOne: false,
    // animation speed
    speed: 400,
    // transition effect
    effect: 'linear',
    // transition delay
    delay: 0,
    // autoplay options
    autoplay: false,
    autoplayDelay: 400,
    autoplayDirection: 'next'

});