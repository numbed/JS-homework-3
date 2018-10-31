/*

Write a program that prints a DNA helix with length, specified by the user.
The helix has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG.
See the examples for more information.
The input comes as a single string element that must be parsed to a number.
It represents the length of the required helix.
The output is the completed structure, printed on the console.

Input			Output
    4	              	**AT**
                    	*C--G*
                   	T----T
                    	*A--G*


10	                **AT**
                      	*C--G*
                      	T----T
                      	*A--G*
                      	**GG**
                     	*A--T*
                      	C----G
                      	*T--T*
                      	**AG**
                      	*G--G*


*/


function main() {

	var helixSize = parseInt(prompt("Enter length of the helix:", 10));
	console.log(helixSize);
	var dna = "ATCGTTAGGG";
	var x = 0;

	for (var i = 0; i < helixSize; i++) {
		if (i % 4 == 0) {
			console.log("**" + dna.slice(x % 10, x % 10 + 1) + "**");
		} else if (i % 4 == 1) {
			console.log("*" + dna.slice(x % 10) + "--" + dna.slice(x % 10 + 1) + "*");
		} else if (i % 4 == 2) {
			console.log(dna.slice(x % 10) + "----" + dna.slice(x % 10 + 1));
		} else if (i % 4 == 3) {
			console.log("*" + dna.slice(x % 10) + "--" + dna.slice(x % 10 + 1) + "*");
		}
		x += 2;
		//		console.log(i + " -> " + x + " -> " + x%10);
	}


}
main();
