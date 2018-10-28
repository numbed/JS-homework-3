/*

You will be given a series of coordinates, leading to a buried treasure.
 Use the map to the right to write a program that locates on which island it is.
 After you find where all the treasure chests are, compose a list and print it on the console.
 If a chest is not on any of the islands,
 print “On the bottom of the ocean” to inform your treasure-hunting team to bring diving gear.
 If the location is on the shore (border) of the island, it’s still considered to lie inside.
The input comes as a string of variable number of elements separated by “, “ that must be parsed to numbers.
Each pair is the coordinates to a buried treasure chest.
The output is a list of the locations of every treasure chest,
either the name of an island or “On the bottom of the ocean”, printed on the console.

*/




function main() {


	var chestLocationsInput = prompt("Enter chest coordinates:", "4, 2, 1.5, 6.5, 1, 3").split(",");


	for (var x in chestLocationsInput) {
			chestLocationsInput[x] = parseFloat(chestLocationsInput[x]);
	}

	var chestLocations = [];
	while(chestLocationsInput.length) {
		chestLocations.push(chestLocationsInput.splice(0,2));
	}


	var islands =  {
		Tuvalu : [1, 1, 2, 2],
		Tonga : [0, 6, 2, 2],
		Samoa : [5, 3, 2, 3],
		Cook : [4, 7, 5, 1],
		Tokelau : [8, 0, 1, 1]
	};


	var digOrSwim = function(A) {
		for (var i in islands) {
			var x = islands[i][0];
			var xx = x + islands[i][2];
			var y = islands[i][1];
			var yy = y + islands[i][3];
			if ((A[0] >= x && A[0] <= xx) && (A[1] >= y && A[1] <= yy)) {
				var output = console.log(A + " -> " + i);
				return output;
			}
		}
		return console.log(A + " -> bottom of the sea!\nDive! Dive! Dive!");
	}

	for (var chest in chestLocations) {
		digOrSwim(chestLocations[chest]);
	}


}
main();
