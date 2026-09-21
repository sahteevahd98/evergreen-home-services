console.log("SCRIPT.JS IS WORKING");


/* ------------------------------
   Contact Form
------------------------------ */

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const service = document.getElementById("service").value;

        formMessage.textContent =
            `Thanks, ${name}! We received your request for ${service}.`;

        contactForm.reset();

    });

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

            data.forEach(service=> {

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

/*------------------------------
    Preselect Service
------------------------------*/

const serviceSelect = document.getElementById("service");

if (serviceSelect) {

    const urlParams = new URLSearchParams(window.location.search);

    const selectedService = urlParams.get("service");

    if (selectedService) {

        serviceSelect.value = selectedService;

    }

}