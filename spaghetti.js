function ingredientcalc() {
    let inputValue = document.getElementById("inputnum").value;
    let amounts = document.querySelectorAll(".soloIngredient");

    if (inputValue === "" || inputValue < "0") {
        return alert("Ungültige Eingabe!");
    }

    else {
        for (let i = 0; i < amounts.length; i++) {
            let element = amounts[i];
            let base = element.getAttribute("data-base");
            element.innerHTML = base * inputValue;
        }
    }
}

