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

	form.onsubmit = function(e) {
		// alert(e)
		console.log(e)
		return false;
	}
})