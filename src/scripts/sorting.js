// define draggable parent
var dc = document.getElementsByClassName("data-cards");
dc[0].className += " sortable";

var sortable = new Sortable(dc[0], {
	draggable: ".draggable",
  handle: ".drag",
  animation: 200
});
