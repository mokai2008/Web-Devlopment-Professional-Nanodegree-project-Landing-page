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

const backTop = document.getElementById('backTop');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Showing the back to top button when scrolling

function showBackTop() {
    window.addEventListener('scroll', function () {
        if(this.scrollY > 400) {
            backTop.style.display = 'block';
            backTop.addEventListener('click', () => {
                this.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                });
            })
        } else {
            backTop.style.display = 'none';
        }
    })
}


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

function addCLassActive() {
    const links = document.querySelectorAll('a');

    

window.addEventListener('scroll', function() {
    sections.forEach(section => {
        links.forEach(link => {
            if(link.dataset.scroll === section.id) {
                if(this.scrollY >= section.offsetTop && this.scrollY < (section.offsetTop + section.offsetHeight)){
                        link.classList.add('active')
                        console.log(this.scrollY, section.offsetTop, section.offsetTop+section.offsetHeight)
    } else {
        link.classList.remove('active');
    }
}})})})}

// Scroll to anchor ID using scrollTO event

function addScrollEvent() {

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {

            e.preventDefault();
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

addCLassActive();

// Showing and listen to Back to Top Button

showBackTop();