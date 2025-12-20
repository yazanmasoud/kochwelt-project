function AmoutOfIndgredients() {
    let inputValue = Number(document.getElementById("input-field").value);
    let amounts = document.querySelectorAll(".Portionen");

    if (isNaN(inputValue) || inputValue <= 0|| inputValue > 20) {
        alert("Ungültige Eingabe!, Zahl muss zwischen 1 und 20 liegen.");
        return;
    }

    for (let i = 0; i < amounts.length; i++) {
        let element = amounts[i];
        let base = Number(element.getAttribute("data-bases"));
        let result = base * inputValue;
        element.innerHTML = result.toFixed(2);
    }
}


