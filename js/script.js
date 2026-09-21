console.log("SCRIPT.JS IS WORKING");


/* ------------------------------
   Contact Form - jQuery
------------------------------ */

if (typeof $ !== "undefined") {

    const contactForm = $("#contact-form");

    if (contactForm.length) {

        const formMessage = $("#form-message");

        contactForm.on("submit", function (event) {

            event.preventDefault();

            const name = $("#name").val();
            const service = $("#service option:selected").text();

            formMessage
                .hide()
                .text(`Thanks, ${name}! We received your request for ${service}.`)
                .fadeIn(500);

            contactForm[0].reset();

        });

    }

}


/* ------------------------------
   Services API
------------------------------ */

const serviceList = document.getElementById("service-list");

if (serviceList) {

    fetch("api/services.json")

        .then(response => {

            if (!response.ok) {
                throw new Error("Unable to load services.");
            }

            return response.json();

        })

        .then(data => {

            console.log("Services loaded:", data);

            serviceList.innerHTML = "";

            data.forEach(service => {

                const serviceCard = document.createElement("article");

                serviceCard.classList.add("service-card");

                serviceCard.innerHTML = `
                    <h2>${service.name}</h2>

                    <p>
                        ${service.description}
                    </p>

                    <a href="contact.html?service=${service.id}" class="button">
                        Request Service
                    </a>
                `;

                serviceList.appendChild(serviceCard);

            });

        })

        .catch(error => {

            console.error("Error loading services:", error);

            serviceList.innerHTML = `
                <p>
                    We're unable to load our services right now.
                    Please try again later.
                </p>
            `;

        });

}


/* ------------------------------
   Preselect Service
------------------------------ */

const serviceSelect = document.getElementById("service");

if (serviceSelect) {

    const urlParams = new URLSearchParams(window.location.search);

    const selectedService = urlParams.get("service");

    if (selectedService) {

        serviceSelect.value = selectedService;

    }

}