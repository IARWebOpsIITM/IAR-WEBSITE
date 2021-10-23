const navOpen = () => {
    const hamburger = document.querySelector('.hamburger');
    const links = document.querySelector('.links');
    const eachLink = document.querySelectorAll('.links li');


    hamburger.addEventListener('click', () => {
        
        //Toggle the hamburger menu
        links.classList.toggle('nav-open');

        //Animating the links
        eachLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `linksFade 0.5s ease forwards ${index / 6 + 0.5}s`;
            }
        });

        //Hamburger Animation
        hamburger.classList.toggle('toggle');

    });


}

navOpen();