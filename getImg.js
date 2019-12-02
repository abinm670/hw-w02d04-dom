// window.onload = function () {
// /* get the element*/

var newImg = document.createElement("img");
var src = document.createAttribute("src");
var id = document.createAttribute("id");
var width = document.createAttribute("width");
var hight = document.createAttribute("hight");

//select address and create a dom for this address
var img = document.querySelector(".image1")
//place the new element in the node address
img.appendChild(newImg);

//set Attributes to the new img node
ewImg.setAttribute("id", "changeSize");




//sect the area for the button
var myButton = document.querySelector("#randomize");

//create add listener
myButton.addEventListener("click", function () {
  //select the the location and create a dom for this location
  var hight = document.querySelector(".height")
  var width = document.querySelector(".width")

  //assign a vlaue to this location to the value that we get form the input
  document.querySelector("#changeSize").width = width.value;
  document.querySelector("#changeSize").height = hight.value;
  newImg.setAttribute("src", "https://source.unsplash.com/1600x900");

});

  //happyCoding 