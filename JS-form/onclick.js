/* OLD METHOD
function handleForm(f) {
	if (f) {
		console.log("f.name.value", f.name.value)
		console.log("f.lastname.value", f.lastname.value)
		alert(f.name.value)
	}
}

function handleClick(ele) {
	console.log("handleClick ele", ele?.value)
	return false
}

handleClick()
handleForm()
*/

/* The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, 
without waiting for stylesheets, images, and subframes to finish loading. */
document.addEventListener('DOMContentLoaded', () => { 
	let doc = document
	let form = doc.querySelector('#form')

	console.log("form", form)

	/*
	form.onsubmit = function(e) {
		console.log(e);

		// The preventDefault() method of the Event interface tells the user agent that 
		// if the event does not get explicitly handled, its default action should not be taken as it normally would be.
		e.preventDefault();

		let t = e.target;
		t.style.border = '1px solid blue';
		alert(e.target.name.value);
	}
	*/

	function handleForm(e) {
		e.preventDefault();
		t.style.border = '2px solid green';
		console.log("handleForm event", e)
	}

	form.addEventListener('submit', handleForm)
	form.removeEventListener('submit', handleForm)
})