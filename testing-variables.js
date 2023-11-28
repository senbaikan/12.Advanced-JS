let a = "New Message";
console.log(a);

let h1Element = document.getElementById("h1-element");
console.log(h1Element.textContent);

let h1TextContent = h1Element.textContent; 
console.log(h1TextContent);

h1TextContent = a; 
console.log(h1TextContent);
console.log(h1Element.textContent);

// h1TextContent = h1Element.textContent;
h1Element.textContent = h1TextContent;

// h1Element.textContent = a;
console.log(h1TextContent);