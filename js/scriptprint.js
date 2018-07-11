var writtentext;

writtentext = 'JS loaded!';

document.write(writtentext);

/*
function addition(){
	var num1 = document.getElementById("firstnumber").value;
	var num2 = document.getElementById("secondnumber").value;
	var result = Number(num1)+ Number(num2);
	document.getElementById("demo").innerHTML = result;
}

function multiply(){
	var num1 = document.getElementById("firstnumber").value;
	var num2 = document.getElementById("secondnumber").value;
	var result = Number(num1)* Number(num2);
	document.getElementById("demo").innerHTML = result;
}

function divide(){
	var num1 = document.getElementById("firstnumber").value;
	var num2 = document.getElementById("secondnumber").value;
	var result = Number(num1)/ Number(num2);
	document.getElementById("demo").innerHTML = result;
}
*/

function pacecalculate(){
	var targettime = document.getElementById("targettime").value;
	//var racedistance = document.getElementById("racedistance").value;

	var divider = 0;
	var km = document.getElementById("km").checked;
	var miles = document.getElementById("miles").checked;

	if (km) {
		divider = 1000;
		document.getElementById("pace text").innerHTML = 'Pace (s/km)';
	}
	else{
		divider = 1608;
		document.getElementById("pace text").innerHTML = 'Pace (s/mile)';
	}
	//document.getElementById("demo").innerHTML = km;
	var calculatedpace = Number(targettime)*60*Number(divider)/passdistance();
	document.getElementById("pace value").innerHTML = calculatedpace;
}

function passdistance(){
	var e = document.getElementById("distanceID");
	var distanceval = e.options[e.selectedIndex].value;
	//document.getElementById("testtext").innerHTML = distanceval;
	return Number(distanceval);
}