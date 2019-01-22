let mainNav=document.querySelector('.main-nav');
let navbarToggle=document.querySelector('#navbar-toggle');

navbarToggle.addEventListener('click', function() {

    if(this.classList.contains('active')){
        mainNav.style.display="none";
        this.classList.remove('active');
    }
    else{
        mainNav.style.display="flex";
        this.classList.add('active');

    }
});


// Desktop Sticky Navbar


// window.onscroll = function (e) {
//     let nav = document.querySelector('.navbar');
//     nav.style.position = "fixed";
//     nav.style.backgroundColor = "black";
// }

// function stickyNav(media) {
//     if (window.pageYOffset > sticky && media.matches) {
//         navigation.classList.add('sticky');
//     } else {
//         navigation.classList.remove('sticky');
//     }
// };


