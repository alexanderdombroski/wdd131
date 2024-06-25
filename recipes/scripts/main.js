import recipes from "./recipes.mjs";

// -------------------- Page Loading IIFEs --------------------

(function randomRecipe() {
    const index = Math.floor(Math.random() * recipes.length);
    loadRecipe([recipes[index]]);
})();

// -------------------- Events --------------------

(function initListeners() {
    const searchBar = document.getElementById("search-input");
    searchBar.addEventListener('change', queryRecipe);
    searchBar.addEventListener('click', (event) => event.target.value = "");
    searchBar.addEventListener('input', populateDatalist);
})();

function queryRecipe(event) {
    const value = event.target.value.toLowerCase()
    let recipeObjects = recipes.filter(recipe => {
        return recipe.name.contains(value) ||
        recipe.description.contains(value) ||
        recipe.tags.some(tag => tag.contains(value))
    });
    recipeObjects.sort((r1, r2) => r1.name.localeCompare(r2.name));
    loadRecipe(recipeObjects);
}

let searchDelay;

function populateDatalist(event) {
    clearTimeout(searchDelay);
    searchDelay = setTimeout(function() {
        const datalist = event.target.list;
        const value = event.target.value.toLowerCase();
        datalist.innerHTML = recipes
            .filter(recipe => recipe.name.contains(value))
            .slice(0, 5)
            .map(recipe => `<option value="${recipe.name}">`)
            .join("");
    }, 300);
}

// -------------------- Load Recipes --------------------

function loadRecipe(recipeObjects) {
    // Clear current recipe(s)
    const space = document.querySelector("main");
    space.innerHTML = "";
    
    // Handle incorrect input
    if (recipeObjects.length == 0) {
        space.innerHTML = "<span>no recipe match</span>"
        return;
    }

    // Populate current recipe
    recipeObjects.forEach(recipe => space.innerHTML += recipeTemplate(recipe));
}

function recipeTemplate(recipeObject) {
    const rating = (req) => (recipeObject.rating >= req) ? '⭐' : '☆';
    return `
    <article class="recipe">
        <img src="${recipeObject.image}" alt="${recipeObject.name}">
        <div class="recipe-details">
            <ul class="tags">
                ${recipeObject.tags.map(tag => `<li>${tag}</li>`).join("")}
            </ul>
            <h2>${recipeObject.name}</h2>
            <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">   
	            <span aria-hidden="true" class="icon-star">${rating(1)}</span>
	            <span aria-hidden="true" class="icon-star">${rating(2)}</span>
	            <span aria-hidden="true" class="icon-star">${rating(3)}</span>
	            <span aria-hidden="true" class="icon-star-empty">${rating(4)}</span>
	            <span aria-hidden="true" class="icon-star-empty">${rating(5)}</span>
            </span>
            <p>${recipeObject.description}</p>
        <div>
    </article>`
}

// -------------------- Extensions --------------------

String.prototype.contains = function(word) {
    return this.toLowerCase().includes(word);
};