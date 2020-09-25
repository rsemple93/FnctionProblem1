// Find the longest word in the string.

function findLongestWord (str) {
	let words = str.split(' ');
	let long = '';

	for(let word of words) {
		if (word.length > long.length) long = word;
	}
	return 'The longest word in the string is: ' + long;
}

console.log(findLongestWord("The animals are the in backyard"));