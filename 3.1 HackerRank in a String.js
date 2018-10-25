/*
    https://www.hackerrank.com/challenges/hackerrank-in-a-string/
*/

function run(){
	
	function hasString(s, ss){
		var ssIndex = 0;
		for (var i=0; i<s.length; i++){
			if (s[i] == ss[ssIndex]){
				ssIndex += 1;
			}
		}
		return ssIndex == ss.length;
	}
		
	var q = prompt("enter number of queries:",2);
	for (var x=0; x<q; x++){
		var s = prompt("Enter string:","haacckkerrannkk");
		var output = hasString(s, "hackerrank");
		console.log(output ? "yes" : "no");
	} 
			
}
run();
