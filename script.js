const navSlide = () => {
    const burger = document.querySelector('[data-burger]');
    const menu = document.querySelector('[data-menu]');
    const menuLinks = document.querySelectorAll('.menu-links li');
    const submenuLinks = document.querySelectorAll('.submenu-links li');

    burger.addEventListener('click', () => {
        menu.classList.toggle('menu-links-active');
    menuLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation=''
        }
        else{
        link.style.animation = 'navLinkFade 0.5s ease forwards '+ (index/300)+'s' ;
        }
    });

    burger.classList.toggle('toggle');
    });
}

navSlide();