/*
    https://www.hackerrank.com/challenges/sock-merchant/problem
*/


function run(){
	
	function socksPairCount(arr){
		var socksPairs = 0;
		var obj ={};
		for (var i=0; i<arr.length; i++){
			var key = arr[i];
			obj[key] = ((obj[key] || 0) + 1);
		}
		
		for(var x in obj){
			var p = parseInt(obj[x]/2);
			socksPairs += p;
			console.log(x + " -> " + obj[x] + " -> " + p);
		}
		return socksPairs;
	}
	
	var n = prompt("enter total number of socks:",7);
	var socksArr = [];
	
	for (var x=0; x<n; x++){
		var sockColor = prompt("Enter number representing sock color:");
		socksArr.push(sockColor);
	} 

	console.log(socksArr);
	console.log("Total pair of socks: " + socksPairCount(socksArr));		
}
run();
