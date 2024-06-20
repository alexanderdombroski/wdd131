import recipes from "./recipes.mjs"

(function populateDatalist() {
    const datalist = document.getElementById("recipe-list");
    recipes.forEach(recipe => datalist.innerHTML += `<option value="${recipe.name}">`);
})();

(function initListeners() {
    const searchBar = document.getElementById("search-input");
    searchBar.addEventListener('change', queryRecipe);
    searchBar.addEventListener('click', (event) => event.target.value = "");
})();

function queryRecipe(event) {
    const recipeObject = recipes.filter(recipe => recipe.name == event.target.value)[0];
    loadRecipe(recipeObject);
}


/* 
Recipes
1. Author
2. URL
3. isBasedOn
4. cookTime
5. datePublished
6. tags (list)
7. description
8. image
9. recipeIngredient (lsit)
10. name
11. prepTime
12. recipeInstructions
13. recipeYield
14. rating
*/

function loadRecipe(recipeObject) {
    // Clear current recipe
    const space = document.querySelector("main");
    space.innerHTML = "";
    
    // Handle incorrect input
    if (recipeObject == undefined) {
        space.innerHTML = "<span>no recipe match</span>"
        return;
    }

    // Populate current recipe
    const rating = (req) => (recipeObject.rating >= req) ? '⭐' : '☆';
    console.log(recipeObject.rating)
    space.innerHTML += `
    

    
    <span
	    class="rating"
	    role="img"
	    aria-label="Rating: 4 out of 5 stars"
    >   
	    <span aria-hidden="true" class="icon-star">${rating(1)}</span>
	    <span aria-hidden="true" class="icon-star">${rating(2)}</span>
	    <span aria-hidden="true" class="icon-star">${rating(3)}</span>
	    <span aria-hidden="true" class="icon-star-empty">${rating(4)}</span>
	    <span aria-hidden="true" class="icon-star-empty">${rating(5)}</span>
    </span>
    `
}

