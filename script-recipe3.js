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
function changeAmoutOfIndgredients() {
       let inputValue = document.getElementById("input-field").value;
       let amounts = document.querySelectorAll(".amount");

    for (let i = 0; i < amounts.length; i++) {
        let element = amounts[i];
        let base = element.getAttribute("data-base");
        element.innerHTML = base * inputValue;
    }
}