(function init() {
    document.getElementById("display-selector").addEventListener('change', changeTheme);
})();

function changeTheme(event) {
    const value = event.target.value;
    document.body.className = value;
    document.getElementById("logo").setAttribute("src", value == "light" ? "byui-logo_blue.webp" : "byui-logo_white.png");
}