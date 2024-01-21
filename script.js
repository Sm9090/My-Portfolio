// Toggle icon navbar 

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbar.classList.add('transform')
}


// scroll section active link

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all navigation links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            // Add 'active' class to the navigation link for the current section
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            // Break out of the loop since we found the matching section
            return;
        }
    });

    // ----------------sticky  navbar -------------

    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100)

    // Toggle icon navbar  and navbar when click navbar link {scroll}

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}


// scroll reveal 

ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading' , { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box , .contact form' , { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img' , { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content' , { origin: 'right' });

function linkdIn(){
    location.href = 'https://www.linkedin.com/in/sameer-memon-0078002a4/'
}

function gitHub(){
    location.href = 'https://github.com/Sm9090'
}


$('.dev').on('click', function(){
    $('.part').toggleClass('devmode');
    return false;
  });