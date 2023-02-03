document.addEventListener('DOMContentLoaded', () => {
	const doc = document;
	// const ps = doc.getElementsByTagName('p')
	const h2 = doc.querySelector('#query_title')
	const ps = doc.querySelectorAll('p')
	console.log("getElementsByTagName('p')", ps)

	h2.style.color = 'gray'
	h2.style.fontSize = '10px'

	for (let i = 0; ps[i]; i++) {
		let ele = ps[i];
		// ele.style.border = '2px solid red';
		ele.style.padding = '4px';
		ele.classList.add('text-danger');
		ele.style.fontWeight = '500';
		ele.style.cursor = 'pointer';
		ele.onclick = (evt) => {
			evt.target.classList.remove('text-danger');
		};
	}

	const tds = doc.getElementsByTagName('td');
	const arrTds = Array.from(tds);
	console.log("Array.from(tds)", arrTds);
	arrTds.forEach(td => td.parentNode.removeChild(td))

	// add css class to h1
	const h1 = doc.getElementById('title');
	h1.classList.add('header1');
});