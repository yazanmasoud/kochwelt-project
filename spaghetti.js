function ingredientcalc() {
       let inputValue = document.getElementById("inputnum").value;
       let amounts = document.querySelectorAll(".soloIngredient");

    for (let i = 0; i < amounts.length; i++) {
        let element = amounts[i];
        let base = element.getAttribute("data-base");
        element.innerHTML = base * inputValue;
    }
}
