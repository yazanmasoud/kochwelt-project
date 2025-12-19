function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/meoyoddr", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        document.getElementById("form-feedback").innerText =
            "Danke! Deine Nachricht wurde erfolgreich gesendet.";
    }).catch((error) => {
        console.log(error);
    });
    event.target.reset();
}
