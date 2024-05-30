let main = document.querySelector('main');

let div = "";

for (let i = 0; i < 252; i++) {
    div += `<div>${" "}</div>`;
}

main.innerHTML = div;

var reset = document.getElementById('reset');


let divElements = document.querySelectorAll('main div');

divElements.forEach(function(div) {
    reset.addEventListener("click", function() {
        div.style.backgroundColor = "red";
    });
});