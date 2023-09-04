const mobileBtn = document.getElementById('mobile');
const navLinks = document.getElementById('mob-navlinks');
const headerText = document.getElementById('header-text');
const header = document.getElementById('navbar');


mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('change');
    navLinks.classList.toggle('act');
    headerText.classList.toggle('header-textchange');
    // header.classList.toggle('mobile-header-color');

    /*if (header.classList.contains('nav-scroll')) {
        headerText.classList.remove('header-textchange');
    }*/

});



//Web preloader
/*window.addEventListener('load', function() {
    setTimeout(function() {
        const preloader = document.querySelector('#preloader');
        preloader.style.display = 'none';
    }, 1000); // 4000 milliseconds (4 seconds) delay
});*/

/*// Prenav nav
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("stick-header").style.top = "0";
    } else {
        document.getElementById("stick-header").style.top = "-150px";
    }
}*/

//Preloader 
window.addEventListener('load', function() {
    if (!localStorage.getItem('preloaderShown')) {
        // Preloader not yet shown in this session, display it and set flag in localStorage
        const preloader = document.querySelector('#preloader');
        preloader.style.display = 'block';
        localStorage.setItem('preloaderShown', true);
    } else {
        // Preloader already shown in this session, do not display it
        const preloader = document.querySelector('#preloader');
        preloader.style.display = 'none';
    }

    setTimeout(function() {
        const preloader = document.querySelector('#preloader');
        preloader.style.display = 'none';
    }, 200); // 1000 milliseconds (1 second) delay
});


// Trying Prenav

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        header.classList.add('nav-scroll');
        header.classList.add('mobile-header-color');
        headerText.classList.add('hidden');
        mobileBtn.classList.add('menu-end');
    } else {
        header.classList.remove('nav-scroll');
        header.classList.remove('mobile-header-color');
        headerText.classList.remove('hidden');
        mobileBtn.classList.remove('menu-end');
    }
}

// JavaScript for smooth scrolling to top
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollToTopBtn.classList.remove('show-scroller');
    } else {
        scrollToTopBtn.classList.add('show-scroller');
    }
});

/* Support Selector */
const supportSelect = document.getElementById('support-select');
const onlineChat = document.getElementById('online-chat-select');
/* Support */
const supportModal = document.getElementById('support-modal');
const supportMe = document.getElementById('support-btn');
const chatText = document.getElementById('chat-text');
const supportLoaderText = document.getElementById('modal-loader-info');
const closeSupport = document.getElementsByClassName('support-close')[0];
const modalLoader = document.querySelector('#modal-loader');

function supportSelector() {
    supportSelect.classList.toggle('support-select-show');
    if (supportSelect.classList.contains('support-select-show')) {
        scrollToTopBtn.classList.add('show-chat-text');
        chatText.classList.add('show-chat-text');
    } else {
        scrollToTopBtn.classList.remove('show-chat-text');
        chatText.classList.remove('show-chat-text');
    }

    onlineChat.addEventListener('click', () => {
        modalLoader.style.display = 'block';
        setTimeout(function() {
            //const preloader = document.querySelector('#preloader');
            modalLoader.style.display = 'none';
        }, 4000);
        supportModal.classList.add('reveal');
    })
    closeSupport.addEventListener('click', () => {
        supportModal.classList.remove('reveal');
        supportSelect.classList.remove('support-select-show');
        scrollToTopBtn.classList.remove('show-chat-text');
    })
    window.onclick = function(event) {
        if (event.target == supportSelect) {
            supportSelect.classList.remove('support-select-show');
        }
    }
}

supportMe.addEventListener('click', supportSelector);



/*supportMe.onclick = function() {
    //supportModal.style.display = 'block';
    //const preloader = document.querySelector('#modal-loader');
    supportLoaderText.innerHTML = "Loading Data <br> Please Wait";
    modalLoader.style.display = 'block';
    setTimeout(function() {
        //const preloader = document.querySelector('#preloader');
        modalLoader.style.display = 'none';
    }, 4000);
    supportModal.classList.add('reveal');
}

closeSupport.onclick = function() {
    //supportModal.style.display = 'none';
    //supportModal.classList.add('reveal');
    supportModal.classList.remove('reveal');
};*/

/* Search 
$(document).ready(function() {
    $('.search-icon').click(function() {
        setTimeout(function() {
            $('.menu').toggleClass('nav-expanded');
        }, 100);
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.search-icon').length) {
            $('.menu').removeClass('nav-expanded');
        }
    });
});*/

/*$(document).ready(function() {
    $('.search-icon').click(function() {
        $('.search-input').toggleClass('show hide');
        $('.search-icon').toggleClass('clicked');
        $('.nav-hide').toggleClass('hide');
        if ($('.search-input').hasClass('show')) {
            $('.search-input input').focus();
        } else {
            $('.search-input input').blur();
            $('.search-input').addClass('show-fade-out');
            $('.nav-hide').addClass('shown');
            setTimeout(function() {
                $('.search-input').removeClass('show-fade-out');
            }, 300);
            setTimeout(function() {
                $('.nav-hide').removeClass('shown');
            }, 300); // wait for the animation to finish before hiding the search input
        }
    });
});*/
/* Search Functionality */

/* Switch Registration Links */
