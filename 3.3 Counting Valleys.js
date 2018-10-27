/*
    https://www.hackerrank.com/challenges/counting-valleys/problem
*/


function main() {

	var steps = parseInt(prompt("Enter Steps:", 8));
	var path = prompt("Enter path ([U|D]):", "UDDDUDUUUDDDUDUUUDDDUDUU").toUpperCase();
	console.log(path);
	var elevation = 0;
	var valey = 0;
	for (var x in path) {
		if (path[x] == "U") {
			elevation += 1;
		} else if (path[x] == "D") {
			elevation -= 1;
		}

		if (elevation == 0) {
			valey += 1;
		}
	}

	console.log(valey / 2);

}
main();
