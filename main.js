var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
	var inputs = document.getElementsByTagName("input");

	var obj = {};

	for (var i = 0; inputs.length > i; i++) {
		obj["name"+i]= inputs[i].value;
	}

	console.log(obj);
}, false)