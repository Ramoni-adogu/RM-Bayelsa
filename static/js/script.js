const mobileBtn = document.getElementById('mobile');
const navLinks = document.getElementById('mob-navlinks');
const headerText = document.getElementById('header-text');
const header = document.getElementById('navbar');


mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('change');
    navLinks.classList.toggle('act');
    headerText.classList.toggle('header-textchange');
});

//Preloader
/*window.addEventListener('load', function() {
    if (!localStorage.getItem('preloaderShown')) {
        const preloader = document.querySelector('#preloader');
        preloader.style.display = 'block';
        localStorage.setItem('preloaderShown', true);
    } else {
        const preloader = document.querySelector('#preloader');
        preloader.style.display = 'none';
    }
});*/
// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('#preloader');

    if (!localStorage.getItem('preloaderShown')) {
        preloader.style.display = 'block';

        // Set a timer to hide the preloader after 2 seconds (adjust the time as needed)
        setTimeout(function() {
            preloader.style.display = 'none';
            localStorage.setItem('preloaderShown', true);
        }, 2000); // Adjust the time in milliseconds (e.g., 2000 = 2 seconds)
    } else {
        preloader.style.display = 'none';
    }
});


//Web worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../../sw.js').then(function() {
        console.log('Service Worker registered successfully.');
    }).catch(function(error) {
        console.log('Service Worker registration failed:', error);
    });
}

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
const icon = document.getElementById("chat-icon");
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
        icon.classList.remove("fa-comment");
        icon.classList.add("fa-times");

    } else {
        scrollToTopBtn.classList.remove('show-chat-text');
        chatText.classList.remove('show-chat-text');
        icon.classList.add("fa-comment");
        icon.classList.remove("fa-times");
    }

    onlineChat.addEventListener('click', () => {
        modalLoader.style.display = 'block';
        setTimeout(function() {
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

const offlineModal = document.getElementById('offline-modal');
const offlineClose = document.getElementById('off-close');

function handleOffline() {
    if (!navigator.onLine) {
        offlineModal.style.display = "block";
    }
}

function handleOnline() {
    offlineModal.style.display = "none";
}

window.addEventListener('offline', handleOffline);
window.addEventListener('online', handleOnline);

if (!navigator.onLine) {
    handleOffline();
}
