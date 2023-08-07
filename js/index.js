'use strict';

window.document.addEventListener("DOMContentLoaded", function () {

    // to open en close menu 
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


    // to show language menu 
    const menuLang = document.getElementById('language-menu');
    const languageBtn = document.getElementById('language-button')
    languageBtn.addEventListener('click', () => {
        menuLang.classList.toggle('hidden');
    })

    // to close the menu when clicked outside of it. 
    window.document.addEventListener('click', (e) => {
        // menu items 
        const isClickInsideMenu = menuItems.contains(e.target);
        const isClickbuttonMenu = buttonMenu.contains(e.target);
        if (!isClickInsideMenu && !isClickbuttonMenu && !menuItems.classList.contains('hidden')) {
            buttonMenu.click();
        }
        // menu language 
        const isclickedLanguageBtn = languageBtn.contains(e.target); 
        if (!isclickedLanguageBtn && !menuLang.classList.contains('hidden')) {
            menuLang.classList.toggle('hidden');

        }
    })

    // to hide the menu on scroll 
    window.document.addEventListener('scroll', (e) => {
        // const isScrollInsideMenu = menuItems.contains(e.target);
        // if (!isScrollInsideMenu && !menuItems.classList.contains('hidden')) {
        //     buttonMenu.click();
        // }
    });

    // to close the menu on click on a menu item 
    const menuATags = document.querySelectorAll('.menu-item');
    menuATags.forEach(aTag => {
        aTag.addEventListener('click', (e) => {
            buttonMenu.click();
        });
    });

    // move to contact section 
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
            let card = e.target.parentNode.parentNode.parentNode.parentNode.id

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
            if (!modalWindowPortfolio.classList.contains('invisible')) {
                document.querySelector('#modal-window-portfolio').classList.toggle('invisible');
            }

            let modalWindowMovies = document.querySelector('#modal-window-movies')
            if (!modalWindowMovies.classList.contains('invisible')) {
                document.querySelector('#modal-window-movies').classList.toggle('invisible');
            }

            let modalWindwTechshop = document.querySelector('#modal-window-techshop')
            if (!modalWindwTechshop.classList.contains('invisible')) {
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


    // send email from javascript 
    const sendEmail = (callbackCheckForm) => {
        let params = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        //if you are reading this, please use your own Id´s :)
        const serviceID = '';
        const templateID = '';

        if (callbackCheckForm(params.name, params.email, params.message)) {
            emailjs
                .send(serviceID, templateID, params)
                .then((res) => {
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('message').value = '';
                    console.log(res);
                    alert('Your message was sent successfully')
                })
                .catch((err) => console.log(err));
        }


    }

    // check email 
    const checkEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email)
    }

    // to check the form fields 
    function checkForm(name, email, message) {

        // check name 
        if (name === "") {
            document.getElementById('name').classList.replace('border-neutral-600', 'border-red-600');
            document.getElementById('error-name').style.display = 'inline';
            return false; // prevent to send 
        } else {
            document.getElementById('error-name').style.display = 'none';
            document.getElementById('name').classList.replace('border-red-600', 'border-neutral-600');
        }

        // check email 
        if (!checkEmail(email)) {
            document.getElementById('email').classList.replace('border-neutral-600', 'border-red-600');
            document.getElementById('error-email').style.display = 'inline';
            return false; // prevent to send 
        } else {
            document.getElementById('error-email').style.display = 'none';
            document.getElementById('email').classList.replace('border-red-600', 'border-neutral-600');
        }

        // check message 
        if (message === "") {
            document.getElementById('message').classList.replace('border-neutral-600', 'border-red-600');
            document.getElementById('error-message').style.display = 'inline';
            return false; // prevent to send 
        } else {
            document.getElementById('error-message').style.display = 'none';
            document.getElementById('message').classList.replace('border-red-600', 'border-neutral-600');
        }
        // if everything is OK
        return true;
    }

    // when the inputs change update border color en hide error message 
    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const inputMessage = document.getElementById('message');

    inputName.addEventListener('input', () => {
        document.getElementById('error-name').style.display = 'none';
        classList.replace('border-red-600', 'border-neutral-600');
    });

    inputEmail.addEventListener('input', () => {
        if (checkEmail(inputEmail.value)) {
            document.getElementById('error-email').style.display = 'none';
            inputEmail.classList.replace('border-red-600', 'border-neutral-600');
        }
    });

    inputMessage.addEventListener('input', () => {
        document.getElementById('error-message').style.display = 'none';
        inputMessage.classList.replace('border-red-600', 'border-neutral-600');
    });

    const btnSendEmail = document.getElementById('btn-email-submit');

    // send email 
    btnSendEmail.addEventListener('click', () => {
        sendEmail(checkForm);
    });

});
