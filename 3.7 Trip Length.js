/*

You will be given the coordinates of 3 points on a 2D plane.
Write a program that finds the two shortest segments that connect them (without going back to the starting point).
When determining the listing order, use the order with the lowest numerical value
(see the figure in the hints for more information).
The input comes as a string with 6 elements separated by “, “ that must be parsed to numbers.
The order is x1, y1, x2, y2, x3, y3.
The output is the return value of your program as a string,
representing the order in which the three points must be visited and the final distance between them.
See the examples for more info.


*/


function main() {

	var pointA = prompt("Enter point A coodinates (x,y):","5,1").split(",");
	var pointB = prompt("Enter point B coodinates (x,y):","1,1").split(",");
	var pointC = prompt("Enter point C coodinates (x,y):","5,4").split(",");

	var countDistance = function (a,b) {
		var ax = parseFloat(a[0]);
		var ay = parseFloat(a[1]);
		var bx = parseFloat(b[0]);
		var by = parseFloat(b[1]);

		var dist = Math.sqrt(
			Math.pow((bx-ax),2)  +  Math.pow((by-ay),2)
		);

		return dist;
	}

	var pointsDistArr = [];
	pointsDistArr.push(countDistance(pointA,pointB));
	pointsDistArr.push(countDistance(pointB,pointC));
	pointsDistArr.push(countDistance(pointA,pointC));
	pointsDistArr.sort(function(a, b){return a-b});
	console.log(pointsDistArr[0] + pointsDistArr[1]);

}
main();
