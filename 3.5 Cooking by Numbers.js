/*

Write a program that receives a number and a list of five operations.
Perform the operations in sequence by starting with the input number
and using the result of every operation as starting point for the next.
Print the result of every operation in order.

The operations can be one of the following:
•	chop – divide the number by two
•	dice – square root of number
•	spice – add 1 to number
•	bake – multiply number by 3
•	fillet – subtract 20% from number
The input comes in 2 lines.
	On the first line you will receive your starting point
	and must be parsed to a number.
	On the second line you will receive 5 commands separated by “, “
	each one will be the name of the operation to be performed.

The output should be printed on the console.


*/

function main() {

	function cook(n, opr) {
		switch (opr){
			case "chop":
			n = n/2;
			break;

			case "dice":
			n = Math.sqrt(n);
			break;

			case "spice":
			n = n + 1;
			break;

			case "bake":
			n = n*3;
			break;

			case "fillet":
			n = n/2;
		}
		return n;
	}



	var n = parseInt(prompt("Enter number: ",100));
	var operations = ["dice", "bake", "chop", "spice", "fillet"];
//	for (i = 0; i < 5; i++) {
//		var x = prompt("Enter operation:");
//		operations.push(x);
//	}

	for (k in operations) {
		console.log(n + " -> " + operations[k] + " -> " + (n = cook(n,operations[k])));
	}
  console.log(n);
}
main();
