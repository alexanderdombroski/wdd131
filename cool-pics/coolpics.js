function toggleMenu() {
    const nav = document.getElementById("nav")
    nav.hidden = !nav.hidden
}

let now = new Date()
document.getElementById("year").innerText = now.getFullYear()
