// DARK MODE SCRIPT 
const toggleButton = document.getElementById("theme-toggle");
//FUNCTION TO SET THE THEME
const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
};
//CHECKS FOR USER PREFERENCE FOR THEME
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (savedTheme) {
    setTheme(savedTheme);
} else if (systemPrefersDark) {
    setTheme("dark");
} else {
    setTheme("light");
}
//ADD EVENT LISTENER TO THE TOGGLE BUTTON FOR DARK MODE
toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

//WELCOME MESSAGE NOTIFICATION SCRIPT
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes("index.html")) {
const userName = prompt("Hi there! What's your name?");
//BUILD WELCOME MSG
const welcomeMessage = userName && userName.trim() !== ""
? 'Welcome to my website, ' + userName + '!'
    : 'Welcome to my website, guest!';
//DELAY BY 2 SECONDS
setTimeout(function () {
    //CREATE NOTIFICATION ELEMENT
    const notification = document.createElement("div");
    notification.textContent = welcomeMessage;
    //STYLE
    notification.style.backgroundColor = "purple";
    notification.style.color = "white";
    notification.style.padding = "15px";
    notification.style.fontSize = "18px";
    //APPEND TO TOP OF PAGE
    const area = document.getElementById("welcome-message");
    area.appendChild(notification);
}, 2000); //2 SEC DELAY
    } //END IF INDEX.HTML
});
    
//COUNT THE NUMBER OF PROJECTS & DYNAMICALLY SHOW/HIDESECTIONS BASED ON COUNT
window.onload = function () {
    const projectCount = document.querySelectorAll(".projects a").length;
    const uniDiv = document.querySelector(".UniversityResources");
    const personalProjectsDiv = document.querySelector(".PersonalProjects");
    //BEGIN IF-ELSE LOGIC
    personalProjectsDiv.style.display = "block"; //ALWAYS SHOWN
    //IF THERE ARE LESS THAN 3 PROJECTS, SHOW UNIVERSITY RESOURCES AND PERSONAL PROJECTS
    //OTHERWISE HIDE UNIVERSITY RESOURCES AND SHOW PERSONAL PROJECTS
    if (projectCount < 3) {
        uniDiv.style.display = "block";
    } else {
        uniDiv.style.display = "none";
    }
};

//LIST 5 SKILLS AND DISPLAY ON THE INDEX PAGE
const skillsList = document.getElementById("skillsList");
const skills = ["HTML", "CSS", "React", "Next.js", "Node.js"];
skills.forEach(skill => {
    const li = document.createElement("li")
    li.textContent = skill;
    skillsList.appendChild(li);
});

//ADD A TIMED CONFIRMATION FOR CONTACT FORM SUBMISSION
const contactForm = document.querySelector("form.contact-form");
const sendingMessage = document.getElementById("sendingMessage");
const messageSent = document.getElementById("messageSent");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        sendingMessage.style.display = "block";
        setTimeout(() => {
            sendingMessage.style.display = "none";
            messageSent.style.display = "block";
        }, 2000); // 2-second delay
    });
}
