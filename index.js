function delay() {
	return new Promise((resolve) => setTimeout(resolve, 3000));
}
async function test() {
	let elements = document.getElementsByClassName('curtein');
	elements = Array.from(elements);
	for (let index = 0; index < elements.length; index++) {
		elements[index].classList.add(`visible${index}`);

		await delay();
		if (index === elements.length - 1) {
			const button = document.querySelector('button');
			button.classList.add('visible-button');
		}
	}
}
test();
