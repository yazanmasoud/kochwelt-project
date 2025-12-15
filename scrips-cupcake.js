
function AmoutOfIndgredients() {

let inputValue = document.getElementById("cupcakeinput-field").value;
let amounts = document.querySelectorAll(".Portionen");

    for (let i = 0; i < amounts.length; i++) {
        let element = amounts[i];
        let base = element.getAttribute("data-bases");
        let result = base * inputValue; 
        element.innerHTML = result.toFixed(2); // Format to 2 decimal places
    
    }

}


