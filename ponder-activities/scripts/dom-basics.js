const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with JavaScript";
document.body.appendChild(newParagraph);

const newPicture = document.createElement("img")
newPicture.setAttribute("src", "https://picsum.photos/200");
newPicture.setAttribute("alt", "randomly generated 200px picture");
newPicture.style.border = "solid 5px black";
document.body.appendChild(newPicture);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>one</li><li>two</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2>";
const newP = document.createElement("p");
newSection.appendChild(newP).innerText = "This was added through JavaScript";
document.body.appendChild(newSection);