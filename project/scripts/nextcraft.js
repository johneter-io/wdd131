let lastScrollY = 0;
const header = document.getElementById("top");

function handleHeaderScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scroll down → hide the header
        header.classList.add("hidden");
    } else {
        // Scroll up → show the header
        header.classList.remove("hidden");
    }

    lastScrollY = currentScrollY;
}

function displayFooterInfo() {
    const currentYear = document.querySelector("#currentYear");
    const lastModified = document.querySelector("#lastModified");

    currentYear.textContent = new Date().getFullYear();
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
}

window.addEventListener("scroll", handleHeaderScroll);
displayFooterInfo();


// ===========================================================

// ======================================= OBJET =======================================
const nextcraft = {
    name: "NextCraft",
    author: "John Peter Joseph",
    year: 2026,
    location: "Haïti"
};

// ======================================= ARRAY + ARRAY METHODS =======================================
const skills = [
    "Critical Thinking",
    "Emotional Intelligence",
    "Adaptability",
    "Communication",
    "Ethical Judgment",
    "Collaboration",
    "Data Literacy",
    "Tech Fluency",
    "AI Prompting & Evaluation",
    "Digital Security Awareness",
    "Learning Agility",
    "Systems Thinking"
];

// array method — forEach
skills.forEach((skill, index) => {
    console.log(`${index + 1}. ${skill}`);
});

// array method — filter
const softSkills = skills.filter((skill, index) => index < 6);
console.log("Soft Skills:", softSkills);

// array method — map
const skillsUpperCase = skills.map(skill => skill.toUpperCase());
console.log(skillsUpperCase);

// ======================================= LOCAL STORAGE =======================================
function saveEmail() {
    const emailInput = document.querySelector("#email");

    if (!emailInput) return;

    // loads the saved email when the page loads
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
        emailInput.value = savedEmail;
    }

    // saves the email address as the user types
    emailInput.addEventListener("input", () => {
        localStorage.setItem("userEmail", emailInput.value);
    });
}

saveEmail();


// hamburger button
function handleHamburger() {
    const hamburger = document.getElementById(`hamburger`);
    const navBar = document.getElementById(`nav-bar`);

    if (!hamburger) return;

    hamburger.addEventListener(`click`, () => {
        navBar.classList.toggle(`open`);
        hamburger.textContent = navBar.classList.contains(`open`) ? `✕` : `☰`;
    });
}

handleHamburger();