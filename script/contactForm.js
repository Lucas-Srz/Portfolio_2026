(function () {
        emailjs.init({
            publicKey: "seIYWsjFGYzWlwO5v",
        });
    }
)();

const contactFormMessage = document.getElementById("contactFormMessage");
const titre = document.getElementById("contactFormMessageTitre");
const text = document.getElementById("contactFormMessageText");
const img = document.getElementById("contactFormMessageImg");

window.onload = function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_s6jpwn4', 'template_csbjisr', this)
            .then(() => {
                console.log('SUCCESS!');
                contactFormMessage.classList.remove("none");
                contactFormMessage.classList.add("flex");
                contactFormMessage.classList.add("success");
                titre.textContent = "Message envoyé avec succès.";
                text.textContent = "Nous vous répondrons dans les plus brefs délais.";
                img.src = "media/icons/success.svg";
            }, (error) => {
                console.log('FAILED...', error);
                contactFormMessage.classList.remove("none");
                contactFormMessage.classList.add("flex");
                contactFormMessage.classList.add("danger");
                titre.textContent = "Échec de l’envoi du message.";
                text.textContent = "Merci de vérifier les champs ou de réessayer dans quelques instants.";
                img.src = "media/icons/danger.svg";
            });
    });
};