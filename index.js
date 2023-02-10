// dark-mode

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#night');
let sauronDisplay = document.querySelector('.sauron')

// check if dark mode is enabled
// if it`s enabled, turn it off
//if it`s disabled, turn it on

const enableDarkMode = () => {
    //1. add the class darkmode to the body
    document.body.classList.add('darkmode');
    // 2. update darkMode in the localStorage
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    //1. remove the class darkmode to the body
    document.body.classList.remove('darkmode');
    // 2. update darkMode in the localStorage
    localStorage.setItem('darkMode', null);
};


const enableSauron = () => {
    //switch img display to block
    sauronDisplay.style.display = 'block';
};

const disableSauron = () => {
    //switch image display to none
    sauronDisplay.style.display = 'none';
};

    // check if status is already enable when load the page
if (darkMode === 'enabled') {
    enableDarkMode();
    enableSauron();
}


darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== 'enabled') {
        enableDarkMode();
        enableSauron();
    } else {
        disableDarkMode();
        disableSauron();
    }
});


// hamburger

const navBar = document.querySelector('#nav-bar');
const hamburgerToggle = document.querySelector('#toggle-mobile');

hamburgerToggle.addEventListener('click', () => {
    const currentState = hamburgerToggle.getAttribute("data-state");

    if (!currentState || currentState === "closed"){
        navBar.setAttribute("data-visible", true);
        hamburgerToggle.setAttribute("aria-expanded", true);
        hamburgerToggle.setAttribute("data-state", "opened");
    } else {
        navBar.setAttribute("data-visible", false);
        hamburgerToggle.setAttribute("aria-expanded", false);
        hamburgerToggle.setAttribute("data-state", "closed");
    }
});