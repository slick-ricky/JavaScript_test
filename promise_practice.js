const insertCoin = () => {
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`coin inserted`);
		}, 1000);
	});
}

const selectCoffee = step1 => 
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`${step1} => coffee selected`);
		}, 1000);
	});


const getCoffee = step2 => 
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`${step2} => coffee is ready!!!`);
		}, 1000);
	});


insertCoin()
	.then(result1 => selectCoffee(result1))
	.then(result2 => getCoffee(result2))
	.then(result3 => console.log(result3));