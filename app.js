// console.dir(document);

//same for both
// alert();
// window.alert();

// DOM, Document Object Model

// let anchorElement = document.body.children[1].children[0]; // drilling into DOM
// anchorElement.href = "http://google.com";

// query funtion
let anchorElement = document.getElementById("external-link"); // return the element by id
anchorElement.href = "http://google.com";

anchorElement = document.querySelector("#external-link"); // return the element by CSS selector
anchorElement.href = "https://amazon.com";

// STEPS FOR ADDING NEW ELEMENT
// 1. creat the new ele
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://naver.com";
newAnchorElement.textContent = "Go to Naver";

// 2. get access to the parent ele that should hold the new ele
let firstParagraph = document.querySelector("p");

// 3. insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

// REMOVE ELEMENT
// 1. Select the element
// let head1 = document.querySelector("h1");

// 2. remove it!
// head1.remove(); 
// head1.parentElement.removeChild(head1); // for old version browser

// MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);

// innerHTML
console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = "This is <strong>important</strong>";