import recipes from "./recipes.mjs"

// -------------------- Page Loading IIFEs --------------------

(function populateDatalist() {
    const datalist = document.getElementById("recipe-list");
    recipes.forEach(recipe => datalist.innerHTML += `<option value="${recipe.name}">`);
})();

(function randomRecipe() {
    const index = Math.floor(Math.random() * recipes.length)
    loadRecipe([recipes[index]])
})();

// -------------------- Events --------------------

(function initListeners() {
    const searchBar = document.getElementById("search-input");
    searchBar.addEventListener('change', queryRecipe);
    searchBar.addEventListener('click', (event) => event.target.value = "");
})();

function queryRecipe(event) {
    const recipeObject = recipes.filter(recipe => recipe.name == event.target.value)[0];
    loadRecipe(recipeObject);
}

// -------------------- DOM Manipulation --------------------

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
    <div>`
}