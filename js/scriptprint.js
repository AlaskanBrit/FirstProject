var writtentext;

writtentext = 'JS loaded!';

document.write(writtentext);


function pacecalculate(){
	var targettime = returntime();
	//document.getElementById("testtext").innerHTML = targettime;
	//var targettime = document.getElementById("targettime").value;
	//var racedistance = document.getElementById("racedistance").value;

	var divider = 0;
	var km = document.getElementById("km").checked;
	var miles = document.getElementById("miles").checked;

	if (km) {
		divider = 1000;
		document.getElementById("pace text").innerHTML = 'Pace (mm:ss/km)';
	}
	else{
		divider = 1608;
		document.getElementById("pace text").innerHTML = 'Pace (mm:ss/mile)';
	}
	//document.getElementById("demo").innerHTML = km;
	var calculatedpace = Number(targettime)*Number(divider)/passdistance();
	
	
	var mins = Math.floor(calculatedpace/60);
	if(mins < 10){
	mins = `0${mins}`;
	}
	var seconds = Math.floor(calculatedpace%60);
	//seconds = Math.floor(seconds);
	//seconds = math.round(Number(seconds));
	if(seconds < 10){
	seconds = `0${seconds}`;
	}
	var timestring = `${mins}:${seconds}`;
	document.getElementById("pace value").innerHTML = timestring;
}

function passdistance(){
	var e = document.getElementById("distanceID");
	var distanceval = e.options[e.selectedIndex].value;
	//document.getElementById("testtext").innerHTML = distanceval;
	return Number(distanceval);
}

function returntime(){
	var racetime = document.getElementById("targettime2").value;
		//document.getElementById("testtext").innerHTML = racetime;
	var timearray = racetime.split(":");
	
	var gethours = timearray[0];
	var getmins  = timearray[1];
	var getsecs;

	if (timearray.length==2) {
	getsecs=0;
	}
	else
	{
	getsecs =timearray[2];	
	}
	
	var totalseconds = 3600*Number(gethours) + 60*Number(getmins) + 1*Number(getsecs);
	//document.getElementById("testtext").innerHTML = timearray.length;
	return totalseconds;
}