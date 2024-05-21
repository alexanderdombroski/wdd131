(function initEventListeners() {
    const images = document.querySelectorAll("figure > img");
    images.forEach(image => image.addEventListener('click', openViewer));
    document.querySelector(".close-viewer").addEventListener('click', hideViewer);

    document.getElementById("menuButton").addEventListener('click', toggleMenu);
})();

function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.hidden = !nav.hidden;
}


function openViewer(event) {
    const viewer = document.querySelector(".viewer");
    const imageName = event.target.getAttribute("src").split('-')[0];
    const image = viewer.querySelector("img");
    image.setAttribute("src", `${imageName}-full.jpeg`);
    image.alt = imageName;
    viewer.hidden = false;
}
function hideViewer() {
    const viewer = document.querySelector(".viewer");
    viewer.hidden = true;
}

let now = new Date();
document.getElementById("year").innerText = now.getFullYear();