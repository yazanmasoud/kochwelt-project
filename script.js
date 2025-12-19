function sendMail(event){﻿
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/meoyoddr", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}
function sendMail(event) {
    event.preventDefault();

    document.getElementById("form-feedback").innerText =
        "Danke! Deine Nachricht wurde erfolgreich gesendet.";

    event.target.reset();
}