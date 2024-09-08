function firstNonRepeatedChar(str) {
 // Write your code here
	let check = new Map();

	for (let key of str) {
		if (check.has(key)) {
		check.key++;
	}
		check.add(key);
	
	}
		return null;
}
// const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
