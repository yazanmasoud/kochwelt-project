function changeAmoutOfIndgredients() {
       let inputValue = document.getElementById("input-field").value;
       let amounts = document.querySelectorAll(".amount");

    for (let i = 0; i < amounts.length; i++) {
        let element = amounts[i];
        let base = element.getAttribute("data-base");
        element.innerHTML = base * inputValue;
        
    }
}
