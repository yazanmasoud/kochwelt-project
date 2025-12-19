function changeAmoutOfIndgredients() {
       let inputValue = document.getElementById("input-field").value;
       let amounts = document.querySelectorAll(".amount");

   if (inputValue === "" || inputValue < "0" || inputValue === "0") {
        return alert("Ungültige Eingabe! Zahl muss zwischen 1 und 20 liegen.");
    }

    else {
        for (let i = 0; i < amounts.length; i++) {
            let element = amounts[i];
            let base = element.getAttribute("data-base");
            element.innerHTML = base * inputValue;
        }
    }
}
