// form-demo.js
function validateForm(event) {
	// get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
	const theForm = event.target;
	// the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page. This sometimes is not desirable behavior. One case when we might do this is if we think there is bad data in the form.
	// To keep it from happening we can can call e.preventDefault()
	e.preventDefault();
	// You should always give feedback to the user about what whet wrong so they can fix it. We will store the error messages here
	const errors = [];
	// start by assuming the form is valid.
	let isValid = true;
	// add our validations here

	// if we ran into any problems above valid will be false.
	if (!isValid) {
		//stop the form from being submitted
		event.preventDefault();
		// show the errors
		showErrors(errors);
		// return false to let the browser know the form was not submitted.
		return false;
	}
}
	
function togglePaymentDetails(e) {
	// get a reference to the form. We can access all the named form inputs through the form element.
	const theForm = document.getElementById("checkout-form");
	// we will also need the creditCardContainer and paypalUsernameContainer
	const creditCardContainer = theForm.querySelector("#card-number").parentElement;
	const paypalContainer = theForm.querySelector("#paypal").parentElement;

	const toggle = (bool, container) => container.querySelector("input").required = bool;

	// Hide all containers by adding the '.hide' class to each of them
	if (e.target.value === "paypal") {
		creditCardContainer.classList.add("hide");
		paypalContainer.classList.remove("hide");
		toggle(true, paypalContainer);
		toggle(false, creditCardContainer);
	} else {
		creditCardContainer.classList.remove("hide");
		paypalContainer.classList.add("hide");
		toggle(false, paypalContainer);
		toggle(true, creditCardContainer);
	}
}

// helper function to display our errors.
function showErrors(errors) {
	const errorEl = document.querySelector(".errors");
	const html = errors.map((error) => `<p>${error}</p>`);
	errorEl.innerHTML = html.join("");
}

// Add Event Listeners
(function addListeners() {
	document.getElementById("checkout-form").addEventListener("submit", validateForm)
	document.getElementById("payment-method").addEventListener("change", togglePaymentDetails)
	document.getElementById("waffles").addEventListener("change", async (event) => { await new Promise(resolve => setTimeout(resolve, 1000)); event.target.checked = true});
})();
