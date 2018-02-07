// JavaScript source code

var order = function() {
	// if age < 21, no ALCOHOL!
	var birthdate = document.querySelector("#birthdate").value;
	if((Number(document.querySelector("#beverage option:checked").value) > 2) && moment().diff(birthdate, "years") < 21) {
		document.querySelector("#output").innerHTML = "<h5>Can't order alcohol</h5>" +
		"<div>Must have been born before " +
		moment().subtract(21, "year").format("MM-DD-YYYY") + "</div>";
	} else {
		var quantity = Number(document.querySelector("#quantity").value);
		var beverageVal = document.querySelector("#beverage").value;
		var size = document.querySelector("input[name=size]:checked").value;

		document.querySelector("#output").innerHTML = "<h5>Receipt</h5>" +
		"<div>" + document.querySelector("#name").value + " ordered " +
		quantity + " of " + sizes[Number(size)] + " " +
		document.querySelector("#beverage option:checked").innerText +
		" @  $" + beverages[Number(beverageVal)][Number(size)] + " apiece</div>" +
		"<div>Total price: $" +
		beverages[Number(beverageVal)][Number(size)] * Number(quantity) +
		"</div>";
	}
}

var checkAgeReq = function() {
	bdElement = document.querySelector("#birthdatediv");
	if(Number(document.querySelector("#beverage option:checked").value) > 2) {
		bdElement.innerHTML = "<label class=\"pr-2\">Birthdate:</label><input class=\"form-control\" type=\"date\" min=\"1900-01-01\" max=\"2017-01-01\" id=\"birthdate\" />";
	} else {
		bdElement.innerHTML = "";
	}
}

// BEVERAGES, in order:
// Water
// Coffee
// Tea
// Beer
// Wine
// Vodka
var beverages = [[1, 2, 3],
[2, 3.25, 4.50],
[1.50, 2.50, 3.50],
[3, 4.50, 6],
[5, 7, 9],
[5, 7.50, 10]];

var sizes = ["small", "medium", "large"];

window.onload = function() {
	document.querySelector("#submit").onclick = order;
	document.querySelector("#beverage").onchange = checkAgeReq;
}