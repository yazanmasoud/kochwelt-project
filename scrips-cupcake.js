
function AmoutOfIndgredients() {

let inputValue = document.getElementById("cupcakeinput-field").value;
let amounts = document.querySelectorAll(".Portionen");´

    for (let i = 0; i < amounts.length; i++) {
        let element = amounts[i];
        let base = element.getAttribute("data-bases");
        element.innerHTML = base * inputValue; 
    }
}
