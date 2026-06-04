// ==========================
// Scroll Progress Bar
// ==========================

window.addEventListener("scroll", () => {

let scrollTop = document.documentElement.scrollTop;

let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

let progress = (scrollTop / scrollHeight) * 100;

document.getElementById("progress-bar").style.width =
    progress + "%";

});

// ==========================
// Reveal Animation
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

reveals.forEach((section) => {

    const windowHeight = window.innerHeight;

    const sectionTop =
        section.getBoundingClientRect().top;

    const visiblePoint = 120;

    if (sectionTop < windowHeight - visiblePoint) {
        section.classList.add("active");
    }

});

}

window.addEventListener("scroll", revealSections);

revealSections();

// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

if(navLinks.style.display === "flex"){

    navLinks.style.display = "none";

}else{

    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "80px";
    navLinks.style.right = "20px";
    navLinks.style.padding = "20px";
    navLinks.style.gap = "15px";
    navLinks.style.borderRadius = "15px";
    navLinks.style.background = "#0f172a";
    navLinks.style.boxShadow =
        "0 0 20px rgba(0,0,0,.4)";

}

});

// ==========================
// Typing Effect
// ==========================

const typingText =
document.getElementById("typing-text");

const roles = [

"Informatics Student",
"Python Learner",
"Web Development Enthusiast",
"Tech Enthusiast"

];

let currentRole = 0;

setInterval(() => {

typingText.style.opacity = "0";

setTimeout(() => {

    currentRole++;

    if(currentRole >= roles.length){
        currentRole = 0;
    }

    typingText.textContent =
    roles[currentRole];

    typingText.style.opacity = "1";

},300);

},2500);

// ==========================
// Active Navbar Link
// ==========================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach((section) => {

    const sectionTop =
        section.offsetTop - 150;

    const sectionHeight =
        section.clientHeight;

    if(pageYOffset >= sectionTop){

        current =
        section.getAttribute("id");

    }

});

navItems.forEach((link) => {

    link.classList.remove("active");

    if(
        link.getAttribute("href") ===
        "#" + current
    ){

        link.classList.add("active");

    }

});

});

// ==========================
// Smooth Hover Effect
// ==========================

const cards =
document.querySelectorAll(
".skill-card, .project-card"
);

cards.forEach((card) => {

card.addEventListener("mouseenter", () => {

    card.style.boxShadow =
    "0 0 25px rgba(6,182,212,.25)";

});

card.addEventListener("mouseleave", () => {

    card.style.boxShadow = "none";

});

});

// ==========================
// Console Signature 😎
// ==========================

console.log(
"%cPortfolio Muhammad Farhan Loaded Successfully 🚀",
"color:#06b6d4;font-size:16px;font-weight:bold;"
);