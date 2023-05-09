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
        // const isClickbuttonMenu = buttonMenu.contains(e.target);
        if (!isScrollInsideMenu && !menuItems.classList.contains('hidden')) {
            buttonMenu.click();
        }
    });

    const menuATags = document.querySelectorAll('.menu-item');
    menuATags.forEach(aTag => {
        aTag.addEventListener('click', (e) => {
            // aTag.classList.toggle('bg-[#00a6ed]');
            buttonMenu.click();
        });
    });

    btnContact.addEventListener('click', () => {
        const section = document.getElementById('contact');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });


    // to show and hide buttons on the card - projects section 
    const projectsCard = document.querySelectorAll('.card-projects');
    projectsCard.forEach(card => {
        card.addEventListener('mouseover', (e) => {
            card.children[1].style.display = 'flex';
            console.log(card.children[1])
        });
        card.addEventListener('mouseout', () => {
            card.children[1].style.display = 'none';

        });

    });

    // to open a modal window with information about the current project 
    const btnOpenModal = document.querySelectorAll('.open-details-modal');
    btnOpenModal.forEach(btn => {
        btn.addEventListener('click', () => {
           document.querySelector('#modal-window-portfolio').classList.toggle('invisible');
        //    modal-window-movies
        });
    });



    // to control the modal window in the projects area 
    const btnCloseModal = document.querySelectorAll('.btn-close-modal');
    btnCloseModal.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('#modal-window-portfolio').classList.toggle('invisible');
        });
    } );

    btnCloseModal.addEventListener("click", () => {
        document.querySelector('#modal-window-portfolio').classList.toggle('invisible');

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

// photo profile
// https://www.youtube.com/watch?v=MJQwe2PUzAo&t=406s
// https://www.youtube.com/watch?v=LBPtQ7JiLTY