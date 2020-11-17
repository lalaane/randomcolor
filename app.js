const button = document.querySelector('#btn');
const h1 = document.querySelector('#text');

button.addEventListener('click', function () {
	const newColor = makeRandomColor();
	document.body.style.backgroundColor = newColor;
	h1.innerHTML = newColor;
	const justNumsString = newColor.slice(4, -1).split(', ');
	const summa = justNumsString.reduce((a, b) => parseInt(a) + parseInt(b), 0);
	if (summa < 79) {
		h1.style.color = 'white';
	} else {
		h1.style.color = 'black';
	}
});

const makeRandomColor = () => {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
};
