let navSlide = () => {
    let navIcon = document.querySelector('.nav-icon');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');

    navIcon.addEventListener('click', () => {

        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.5}s`;
            }
        });

        //nav-icon animation 
        navIcon.classList.toggle('toggle')
    });


}

navSlide();