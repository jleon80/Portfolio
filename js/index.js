'use strict';

window.document.addEventListener("DOMContentLoaded", function () {

    const buttonMenu = document.querySelector('#menu-button');
    const menuItems = document.querySelector('#menu-container');
    const btnContact = document.querySelector('#btn-contact');

    buttonMenu.addEventListener('click', () => {

        menuItems.classList.toggle('hidden');

        buttonMenu
            .querySelector("svg > path:nth-of-type(1)")
            .classList.toggle("invisible")
        buttonMenu
            .querySelector("svg > path:nth-of-type(2)")
            .classList.toggle("invisible");

    });

    document.addEventListener('click', (e) => {
        const isClickInsideMenu = menuItems.contains(e.target);
        const isClickbuttonMenu = buttonMenu.contains(e.target);
        if (!isClickInsideMenu && !isClickbuttonMenu && !menuItems.classList.contains('hidden')) {
            buttonMenu.click();
        }
    })

    document.addEventListener('scroll', (e) => {
        const isScrollInsideMenu = menuItems.contains(e.target);
        if (!isScrollInsideMenu && !menuItems.classList.contains('hidden')) {
            buttonMenu.click();
        }
    });

    const menuATags = document.querySelectorAll('.menu-item');
    menuATags.forEach(aTag => {
        aTag.addEventListener('click', (e) => {
            buttonMenu.click();
        });
    });

    btnContact.addEventListener('click', () => {
        const section = document.getElementById('contact');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });



    // to open a modal window with information about the current project 
    const btnOpenModal = document.querySelectorAll('.open-details-modal');
    btnOpenModal.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let card = e.target.parentNode.parentNode.parentNode.id

            switch (card) {
                case 'card-portfolio':
                    document.querySelector('#modal-window-portfolio').classList.toggle('invisible');
                    break;
                case 'card-movie-time':
                    document.querySelector('#modal-window-movies').classList.toggle('invisible')
                    break;
                case 'card-tech-shop':
                    document.querySelector('#modal-window-techshop').classList.toggle('invisible');
                    break;
                default:
                    break;
            }
        });
    });

    // to control the modal window in the projects area 
    const btnCloseModal = document.querySelectorAll('.btn-close-modal');
    btnCloseModal.forEach(btn => {
        btn.addEventListener('click', () => {

            let modalWindowPortfolio = document.querySelector('#modal-window-portfolio')
            if (!modalWindowPortfolio.classList.contains('invisible')){
                                document.querySelector('#modal-window-portfolio').classList.toggle('invisible');
            }

            let modalWindowMovies = document.querySelector('#modal-window-movies')
            if (!modalWindowMovies.classList.contains('invisible')){
                                document.querySelector('#modal-window-movies').classList.toggle('invisible');
            }

            let modalWindwTechshop = document.querySelector('#modal-window-techshop')
            if (!modalWindwTechshop.classList.contains('invisible')){
                                document.querySelector('#modal-window-techshop').classList.toggle('invisible');
            }

        });
    });

    //-----button  to go to top on scroll-----
    const mybutton = document.getElementById("btn-goToTop");
    mybutton.addEventListener("click", () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = () => {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

});
