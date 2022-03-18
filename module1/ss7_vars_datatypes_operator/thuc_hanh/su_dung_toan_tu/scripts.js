var inputWidth = prompt('Enter the width');
var inputHeight = prompt('Enter the height');
var width = parseInt(inputWidth);
var height = parseInt(inputHeight);
var area = width * height;
do {
    alert('Please enter again width and height !');
    var inputWidth = prompt('Enter the width');
    var inputHeight = prompt('Enter the height');
    var width = parseInt(inputWidth);
    var height = parseInt(inputHeight);
    var area = width * height;
} while (width <= 0 || height <= 0 || width <= height);
document.write("The area is: " + area);
