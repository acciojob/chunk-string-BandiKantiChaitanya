function stringChop(str, size) {
  // your code here
	if (!str) {
        return [];
    }
	let result = [];
    for (let i = 0; i < str.length; i += size) {
        // Slice the string from index i to index i + size
        result.push(str.slice(i, i + size));
    }

    return result;
}

// Do not change the code below
const str = prompt("Enter String."); 
const size = prompt("Enter Chunk Size.");
// size = parseInt(size); 
alert(stringChop(str, size));
