/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.getElementById('navbar__list');

const sections = Array.from(document.getElementsByTagName('section'));

const navFragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function addNavs() {

    sections.forEach(section => {
        
        const li = document.createElement('li');
        
        li.innerHTML = `
            <a class="menu__link" href="#${section.id}">${section.dataset.nav}</a>
        `;

        navFragment.appendChild(li);
    });

    

    navList.appendChild(navFragment);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
window.addEventListener('DOMContentLoaded', function() {
    addNavs();
})
// Scroll to section on link click

// Set sections as active


