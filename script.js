function firstNonRepeatedChar(str) {
 // Write your code here
	let check = new Map();
	for (let key of str) {
		if (check.has(key)) {
		check.set(key, check.get(key) + 1);
	}else{
		check.set(key , 1);
	}
	}

	for (let key of str) {
		if (check.get(key) === 1) {
			return key;
		}
	}
		return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
