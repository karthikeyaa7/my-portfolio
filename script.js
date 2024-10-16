document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const skillsList = document.getElementById("skills-list");
    const showMoreButton = document.getElementById("show-more");
    const moreSkills = document.getElementById("more-skills");
    const contactForm = document.getElementById("contact-form");
    const submitButton = document.getElementById("submit");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");

    // Smooth scrolling for navigation
    navbar.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href");
        const targetSection = document.getElementById(targetId.replace("#", ""));
        targetSection.scrollIntoView({ behavior: "smooth" });
    });

    // Toggle functionality for the "Show More" button
    showMoreButton.addEventListener("click", function() {
        moreSkills.classList.toggle("hidden");
        showMoreButton.textContent = moreSkills.classList.contains("hidden") ? "Show More" : "Show Less";
    });

    // Form validation for the contact form
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
            errorMessage.classList.remove("hidden");
            return;
        }

        if (!emailInput.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            errorMessage.classList.remove("hidden");
            return;
        }

        successMessage.classList.remove("hidden");
    });
});
