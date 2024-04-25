(function activity1() {
    const apples = 5;
    const oranges = 3;
    let total = apples + oranges;
    console.log(`total: ${total}`);
})();

(function activity2() {
    const myApples = 4;
    const friendApples = 2;
    document.getElementById("myApples").textContent = myApples;
    document.getElementById("friendApples").textContent = friendApples;
    document.getElementById("total").textContent = myApples + friendApples;
})();


