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
            <a class="menu__link" data-scroll = "${section.id}">${section.dataset.nav}</a>
        `;

        navFragment.appendChild(li);
    });

    

    navList.appendChild(navFragment);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

function addScrollEvent() {
    
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {

            // Get the target section position

            const section = document.getElementById(`${this.dataset.scroll}`)
            
            window.scrollTo({
                top: section.offsetTop,
                left: 0,
                behavior: 'smooth'
            });
            
        })
    })
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

addNavs();

// Scroll to section on link click

addScrollEvent();

// Set sections as active


