var writtentext;

writtentext = 'JS loaded!';

document.write(writtentext);

function addition(){
	var num1 = document.getElementById("firstnumber").value;
	var num2 = document.getElementById("secondnumber").value;
	var result = Number(num1)+ Number(num2);
	document.getElementById("demo").innerHTML = result;
	
	//document.getElementById("firstnumber").value=3;
	//document.getElementById("secondnumber").value=4;
	//document.getElementById("demo").innerHTML = 77;
}

function multiply(){
	var num1 = document.getElementById("firstnumber").value;
	var num2 = document.getElementById("secondnumber").value;
	var result = Number(num1)* Number(num2);
	document.getElementById("demo").innerHTML = result;
	
	//document.getElementById("firstnumber").value=3;
	//document.getElementById("secondnumber").value=4;
	//document.getElementById("demo").innerHTML = 77;
}