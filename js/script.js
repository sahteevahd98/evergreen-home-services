const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;

    formMessage.textContent =
        `Thanks, ${name}! We recieved your request for ${service}.`;

    contactForm.reset();
});