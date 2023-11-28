// ADD EVENT LISTENER
let paragraphElement = document.body.firstElementChild;

function changeParagraphText() {
  paragraphElement.textContent = "Clicked!";
  console.log("paragraph clicked!");
  // console.log(event);
}

// changeParagraphText is a "callback function", passed as a parameter value to another function or method, no "()" needed in the method
paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
    let inputText = inputElement.value; // total input value
  // let inputText = event.target.value; // total input value
  console.log(inputText);
  
  // let inputText = event.data; // last input data, different
  // console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);
