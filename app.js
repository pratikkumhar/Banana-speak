var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var output = document.querySelector("#output")


console.log(txtInput)

function clickHandler(){
    output.innerText = "abcd " + txtInput.value;
};


btnTranslate.addEventListener("click", clickHandler)

// txtInput.addEventListener("input",)