
function AmoutOfIndgredients() {

    let inputValue = document.getElementById("input-field").value;
    let amounts = document.querySelectorAll(".Portionen");

   if (inputValue === "" || inputValue < "0" || inputValue === "0") {
        return alert("Ungültige Eingabe!");
    }

    else {
        for (let i = 0; i < amounts.length; i++) {
            let element = amounts[i];
            let base = element.getAttribute("data-bases");
            let result = base * inputValue;
            element.innerHTML = result.toFixed(2); // Format to 2 decimal places
        }
    }
}

