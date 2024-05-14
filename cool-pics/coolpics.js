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
    const src = event.target.src;
    const imageName = `${src.slice(0, src.lastIndexOf('-'))}-full.jpeg`
    const image = viewer.querySelector("img");
    image.src = imageName;
    image.alt = "largeImage";
    viewer.hidden = false;
}
function hideViewer() {
    const viewer = document.querySelector(".viewer");
    viewer.hidden = true;
}

let now = new Date();
document.getElementById("year").innerText = now.getFullYear();