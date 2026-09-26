/*******************
 DARK MODE THEME &
 TOGGLE LOGIC
 ******************/
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
//DARK MODE TOGGLE EVENT LISTENER
toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});
    
/**********************
 PROJECT COUNT LOGIC
 **********************/
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes("projects.html")) {
        const projectCount = document.querySelectorAll(".projects a").length;
        const uniDiv = document.querySelector(".UniversityResources");
        const personalProjectsDiv = document.querySelector(".PersonalProjects");
        //BEGIN IF-ELSE LOGIC
        if (personalProjectsDiv) {
            personalProjectsDiv.style.display = "block";
        }
        if (projectCount < 3) {
            if (uniDiv) uniDiv.style.display = "block";
        } else {
            if (uniDiv) uniDiv.style.display = "none";
        }
    }
});

/*************************************
 LIST 5 SKILLS LOGIC (INDEX PAGE ONLY)
 ************************************/
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes("index.html")) {
        const skillsList = document.getElementById("skillsList");
        const skills = ["HTML", "CSS", "React", "Next.js", "Node.js"];
        skills.forEach(skill => {
        const li = document.createElement("li")
            li.textContent = skill;
            skillsList.appendChild(li);
        });
    }
});

/*******************************
 CONTACT FORM SUBMISSION HANDLER
 TIMED CONFIRMATION NOTIFICATION
 (CONTACT FORM ONLY)
 *******************************/
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes("contact.html")) {
        const contactForm = document.getElementById("contactForm");
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); //PREVENT DEFAULT FORM SUBMISSION
            const area = document.getElementById("contact-notification-area");
            area.innerHTML = ""; //CLEARS PREV NOTIFICATIONS
            //CREATE "SENDING" MESSAGE
            const sendingMsg = document.createElement("div");
            sendingMsg.textContent = "Sending...";
            //STYLES
            sendingMsg.style.backgroundColor = "purple";
            sendingMsg.style.color = "white";
            sendingMsg.style.padding = "15px";
            sendingMsg.style.fontSize = "18px";
            sendingMsg.style.border = "2px solid white";
            area.appendChild(sendingMsg);
            //REPLACE W/ CONFIRMATION AFTER DELAY
            setTimeout(function () {
                area.innerHTML = ""; //CLEARS "SENDING" MESSAGE
                const confirmationMsg = document.createElement("div");
                confirmationMsg.textContent = "Message sent successfully!";
                confirmationMsg.style.backgroundColor = "purple";
                confirmationMsg.style.color = "white";
                confirmationMsg.style.padding = "15px";
                confirmationMsg.style.fontSize = "18px";
                confirmationMsg.style.border = "2px solid white";
                area.appendChild(confirmationMsg);
            }, 2000); //2 SEC DELAY
        });
    }
});


/***********************************
 WELCOME MESSAGE HANDLER(INDEX ONLY)
 **********************************/
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.includes("index.html")) {

        const userName = prompt("Hi there! What's your name?");
        const welcomeMessage = userName && userName.trim() !== ""
            ? `Welcome to my website, ${userName}!`
            : "Welcome to my website, guest!";

        setTimeout(function () {
            const notification = document.createElement("div");
            notification.textContent = welcomeMessage;

            notification.style.backgroundColor = "purple";
            notification.style.color = "white";
            notification.style.padding = "15px";
            notification.style.fontSize = "18px";
            notification.style.textAlign = "center";

            const area = document.getElementById("welcome-message");
            area.appendChild(notification);
        }, 2000);
    }
});