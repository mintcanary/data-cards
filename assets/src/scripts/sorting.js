// define draggable parent
var dcs = document.getElementsByClassName("data-cards");

[].forEach.call(dcs, function (dc) {
	dc.className += " sortable";

	var sortable = new Sortable(dc, {
		draggable: ".draggable",
	  handle: ".drag",
	  animation: 200
	});
});
