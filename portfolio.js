const head = document.querySelector('head');

// Link to the  FontAwesome stylesheet
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css';
head.appendChild(fontAwesomeLink);

// Link to the style inside <head>
const style = document.createElement('style');
style.innerHTML = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    :root {
        --body-color: rgba(250,250,250);
        --first-color: rgba(110,87,224);
        --box-color: #fff;
        --nav-color: #fff;
        --nav-icon: #000;
        --logo-color: #000;
        --text-color: #444444;
        --icon-color: #242526;
    }
    .container {
        width: 100%;
        position: relative;
        background: #aaa1c8;
    }
    nav {
        position: fixed;
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        height: 90px;
        background:#192a51;
        padding-inline: 10vw;
        z-index: 100; 
    }
    .nav-logo {
        font-size: 30px;
        font-weight: 600;
        color: var(--logo-color);
    }
    .nav-menu {
        display: flex;
    }
    .nav-link {
        text-decoration: none;
        color: #f4f4f4;
        padding-inline: 15px;
        margin-inline: 20px;
    }
    .active-link {
        color: var(--first-color);
    }
    .wrapper {
        padding-inline: 10vw;
    }
    .featured-box {
        display: flex;
        height: 100vh;
    }
    .featured-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 50%;
    }
    .featured-name {
        font-size: 50px;
        font-weight: 600;
        color: #192a51;
    }
    .social_icons {
        display: flex;
        gap: 32px;
    }
    /* Add other styles */
`;
head.appendChild(style);

// body content
const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');

// navigation menu
const nav = document.createElement('nav');
const navLogo = document.createElement('div');
navLogo.classList.add('nav-logo');
navLogo.innerText = 'Logo';
nav.appendChild(navLogo);

const navMenu = document.createElement('div');
navMenu.classList.add('nav-menu');

const navLinks = ['Home', 'About', 'Projects', 'Contact'];
navLinks.forEach(linkText => {
    const navLink = document.createElement('a');
    navLink.href = `#${linkText.toLowerCase()}`;
    navLink.innerText = linkText;
    navLink.classList.add('nav-link');
    navMenu.appendChild(navLink);
});

nav.appendChild(navMenu);
container.appendChild(nav);

// Main content (Featured Box)
const wrapper = document.createElement('main');
wrapper.classList.add('wrapper');

const featuredBox = document.createElement('section');
featuredBox.classList.add('featured-box');
featuredBox.id = 'home';

const featuredText = document.createElement('div');
featuredText.classList.add('featured-text');

const helloText = document.createElement('p');
helloText.innerText = "Hello, I'm ";
featuredText.appendChild(helloText);

const nameText = document.createElement('span');
nameText.classList.add('featured-name');
nameText.innerText = "Ashnoor Singh";  // Dynamic name
featuredText.appendChild(nameText);

// Social Icons
const socialIcons = document.createElement('div');
socialIcons.classList.add('social_icons');

const icons = ['fa-instagram', 'fa-linkedin', 'fa-github', 'fa-envelope'];
icons.forEach(iconClass => {
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('icon');
    const iconElement = document.createElement('i');
    iconElement.classList.add('fa-brands', iconClass);
    iconDiv.appendChild(iconElement);
    socialIcons.appendChild(iconDiv);
});

featuredText.appendChild(socialIcons);
featuredBox.appendChild(featuredText);
wrapper.appendChild(featuredBox);
container.appendChild(wrapper);
body.appendChild(container);

//  button and link elements
const downloadBtn = document.getElementById('download-btn');
const pdfLink = document.getElementById('resume-pdf-link');

// Set the PDF file path and name
const pdfFilePath = "https://drive.google.com/drive/folders/11JjybCDAW6-9yWoyfDLGn3UC0SpNIkn5?usp=drive_lin";
const pdfFileName = 'Resume';

// Add an event listener to the button
downloadBtn.addEventListener('click', () => {
  // Create a new link element with the PDF file path and name
  const link = document.createElement('a');
  link.href = pdfFilePath;
  link.download = pdfFileName;
  link.target = '_blank';

  // Append the link to the hidden link element
  pdfLink.href = link.href;
  pdfLink.download = link.download;
  pdfLink.target = link.target;

  // Simulate a click on the hidden link to download the PDF
  pdfLink.click();
});

// Typing effect
new Typed(".featured-name", {
    strings: ["Designer", "Coder", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});

// ScrollReveal animations
ScrollReveal().reveal('.featured-name', { delay: 100 });
ScrollReveal().reveal('.social_icons', { delay: 200 });

