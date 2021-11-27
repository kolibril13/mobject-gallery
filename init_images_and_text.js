

var version_number = "Manim v0.12.0"

document.getElementById('version_number').innerHTML = version_number;


var request1 = new XMLHttpRequest();
request1.open("GET", "imgs/Mobjects_Basics.json", false);
request1.send(null);
var jsonData1 = JSON.parse(request1.responseText);
document.writeln(' <h1>Basic Shapes</h1>')
for (let key of Object.keys(jsonData1)) {
    document.write(`<img src='imgs/${key}' alt= '${jsonData1[key]}' onclick='myFunction(this);' class='image'> `);
}
var request2 = new XMLHttpRequest();
request2.open("GET", "imgs/Mobjects_Text.json", false);
request2.send(null);
var jsonData2 = JSON.parse(request2.responseText);
document.writeln(' <h1>Text</h1>')
for (let key of Object.keys(jsonData2)) {
    document.write(`<img src='imgs/${key}' alt= '${jsonData2[key]}' onclick='myFunction(this);' class='image'> `);
}

var request3 = new XMLHttpRequest();
request3.open("GET", "imgs/Camera_and_Style.json", false);
request3.send(null);
var jsonData3 = JSON.parse(request3.responseText);
document.writeln(' <h1>Camera and Style</h1>')
for (let key of Object.keys(jsonData3)) {
    document.write(`<img src='imgs/${key}' alt= '${jsonData3[key]}' onclick='myFunction(this);' class='image'> `);
}

var request4 = new XMLHttpRequest();
request4.open("GET", "imgs/Plots.json", false);
request4.send(null);
var jsonData4 = JSON.parse(request4.responseText);
document.writeln(' <h1>Plots</h1>')
for (let key of Object.keys(jsonData4)) {
    document.write(`<img src='imgs/${key}' alt= '${jsonData4[key]}' onclick='myFunction(this);' class='imagebig'> `);
}

// add copy button to images
function myFunction(imgs) {
    var name = imgs.alt;
    navigator.clipboard.writeText(name);
    document.getElementById("info_field").innerHTML = name + " \n<b>is now copied to clipboard.</b>"
}
