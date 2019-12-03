/** 
 * Change the font-family of the page to "Arial, sans-serif"
Replace each of the span tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
Give each li the class of "listitem"
Change each li's text color to "rebeccapurple"
Create a new img element and set its src attribute to a picture of you. Put that new img element in the div with the class of "profilePicture"
*/

var body = document.querySelector("body");

//-1
body.setAttribute("font-family", "Arial, sans-serif")
console.dir(body)
//-2
var span = document.querySelectorAll("span")


var fav = document.querySelector("#favorite")
var home = document.querySelector("#hometown")
var nick = document.querySelector("#nickname")
fav.innerHTML = "Dog"
home.innerHTML = "Jeddah"
nick.innerHTML = "Abdullah"

// var ul = document.querySelector("ul")
var liCh = document.querySelectorAll("li")

for (let x = 0; x < liCh.length; x++) {

    liCh[x].setAttribute("class", "listitem")
}


console.log(liCh)

var img = document.createElement("img")
var src = document.createAttribute("src")

img.setAttribute("src", "my_pic.jpg")


var div1 = document.querySelector(".profilePicture")

div1.appendChild(img)


// ----------- The Book List 

var books = [
    {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true
    },
    {
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        alreadyRead: true
    },
    {
        title: "Ulysses",
        author: "James Joyce",
        alreadyRead: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        alreadyRead: true
    }
];

// $(document).read(function () {
//     $(".avoriteBooks").append("<h1> My Book List </h1>")

// });

var h1 = document.createElement('h1');
h1.innerHTML = "My Book List";

var divFav = document.querySelector(".favoriteBooks")

divFav.appendChild(h1)
var p = []

for (let x = 0; x < books.length; x++) {
    // Array p = new Array[]; 

    p[x] = document.createElement("p")
    p[x].innerHTML = "Title: " + books[x].title + " ----- " + "Author:" + books[x].author

    document.body.appendChild(p[x])

}

// bonus:

var p = document.querySelectorAll("p")

console.dir(p)




