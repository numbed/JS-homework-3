/*

	Write a function that determines whether a driver is within the speed limit.
	You will receive his speed and the area where he’s driving.

	Each area has a different limit:
		on the motorway the limit is 130 km/h,
		on the interstate the limit is 90,
		inside a city the limit is 50 and
		within a residential area the limit is 20 km/h.

	If the driver is within the limits, your function prints nothing.
	If he’s over the limit however, your function prints the severity of the infraction.
		For speeds up to 20 km/h over the limit, he’s speeding;
		for speeds up to 40 over the limit, the infraction is excessive speeding and
		for anything else, reckless driving.

  The input comes in two rows.
		On the first row you will receive the current speed as a string and needs to be parsed as a number.
		On the second row you will be given the second element which is  the area.

  The output should be printed to the console. Note in certain cases there will be no output.

*/


function main() {

	function speedLimit (a) {
		var s = 0;
		switch(a) {

			case "city":
				s = 40;
				break;

			case "residential":
				s = 30;
				break;

			case "interstate":
				s = 90;
				break;

			case "motorway":
				s = 120;

		}
		return s;
	}


	function infraction(x) {
		if (x > 0 && x <= 20) {
			result = x +": speeding";
		} else if (x > 20 && x <= 40){
			result = x +": excessive speeding";
		} else {
			result = x +": reckless driving";
		}

		return result;
	}


	var speed = parseInt(prompt("Enter speed:", 40));
	var drivingArea = prompt("Enter drive area:", "city");
	var infraction;
	var speedDIff = speed - speedLimit(drivingArea);
	var output;
	if (speedDIff <=0) {
		output = true;
	}
	console.log(output ? "" : infraction(speedDIff));


}
main();
