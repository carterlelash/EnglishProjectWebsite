let button1948 = document.getElementById("button1948");
let button1950 = document.getElementById("button1950");
let button1960 = document.getElementById("button1960");
let button1970 = document.getElementById("button1970");
let button1980 = document.getElementById("button1980");
let button1990 = document.getElementById("button1990");
let resetButton = document.getElementById("resetButton")


let text1948 = document.getElementById("text1948");
let text1950 = document.getElementById("text1950");
let text1960 = document.getElementById("text1960");
let text1970 = document.getElementById("text1970");
let text1980 = document.getElementById("text1980");
let text1990 = document.getElementById("text1990");

let image1990One = document.getElementById("nelsonMandelaImage1");
let caption1990One = document.getElementById("nelsonMandelaCaption1")

let image1990Two = document.getElementById("FWdeKlerkImage2");
let caption1990Two = document.getElementById("FWdeKlerkCaptionTwo")

let image1960Three = document.getElementById("apartheidImage3");
let caption1960Three = document.getElementById("apartheidImageCaption3");

let image1960Four = document.getElementById("apartheidImage4");
let caption1960Four = document.getElementById("apartheidImageCaption4");

let image1980Five = document.getElementById("apartheidImage5");
let caption1980Five = document.getElementById("apartheidImageCaption5");

let image1980Six = document.getElementById("apartheidImage6");
let caption1980Six = document.getElementById("apartheidImageCaption6");
function revealText (event) {
    if (event.target == button1948) {
    text1948.style.visibility = "visible";
    text1950.style.visibility = "hidden";
    text1960.style.visibility = "hidden";
    text1970.style.visibility = "hidden";
    text1980.style.visibility = "hidden";
    text1990.style.visibility = "hidden";
    image1990One.style.visibility = "hidden";
    caption1990One.style.visibility = "hidden";
    image1990Two.style.visibility = "hidden";
    caption1990Two.style.visibility = "hidden";
    image1960Three.style.visibility = "hidden";
    caption1960Three.style.visibility = "hidden";
    image1960Four.style.visibility = "hidden";
    caption1960Four.style.visibility = "hidden";
    image1980Five.style.visibility = "hidden";
    caption1980Five.style.visibility = "hidden";
    image1980Six.style.visibility = "hidden";
    caption1980Six.style.visibility = "hidden";
    }
    if (event.target == button1950) {
    text1948.style.visibility = "hidden";
    text1950.style.visibility = "visible";
    text1960.style.visibility = "hidden";
    text1970.style.visibility = "hidden";
    text1980.style.visibility = "hidden";
    text1990.style.visibility = "hidden";
    image1990One.style.visibility = "hidden";
    caption1990One.style.visibility = "hidden";
    image1990Two.style.visibility = "hidden";
    caption1990Two.style.visibility = "hidden";
    image1960Three.style.visibility = "hidden";
    caption1960Three.style.visibility = "hidden";
    image1960Four.style.visibility = "hidden";
    caption1960Four.style.visibility = "hidden";
    image1980Five.style.visibility = "hidden";
    caption1980Five.style.visibility = "hidden";
    image1980Six.style.visibility = "hidden";
    caption1980Six.style.visibility = "hidden";
    }
    if (event.target == button1960) {
    text1948.style.visibility = "hidden";
    text1950.style.visibility = "hidden";
    text1960.style.visibility = "visible";
    text1970.style.visibility = "hidden";
    text1980.style.visibility = "hidden";
    text1990.style.visibility = "hidden";
    image1990One.style.visibility = "hidden";
    caption1990One.style.visibility = "hidden";
    image1990Two.style.visibility = "hidden";
    caption1990Two.style.visibility = "hidden";
    image1960Three.style.visibility = "visible";
    caption1960Three.style.visibility = "visible";
    image1960Four.style.visibility = "visible";
    caption1960Four.style.visibility = "visible";
    image1980Five.style.visibility = "hidden";
    caption1980Five.style.visibility = "hidden";
    image1980Six.style.visibility = "hidden";
    caption1980Six.style.visibility = "hidden";
    }
    if (event.target == button1970) {
    text1948.style.visibility = "hidden";
    text1950.style.visibility = "hidden";
    text1960.style.visibility = "hidden";
    text1970.style.visibility = "visible";
    text1980.style.visibility = "hidden";
    text1990.style.visibility = "hidden";
    image1990One.style.visibility = "hidden";
    caption1990One.style.visibility = "hidden";
    image1990Two.style.visibility = "hidden";
    caption1990Two.style.visibility = "hidden";
    image1960Three.style.visibility = "hidden";
    caption1960Three.style.visibility = "hidden";
    image1960Four.style.visibility = "hidden";
    caption1960Four.style.visibility = "hidden";
    image1980Five.style.visibility = "hidden";
    caption1980Five.style.visibility = "hidden";
    image1980Six.style.visibility = "hidden";
    caption1980Six.style.visibility = "hidden";
    }
    if (event.target == button1980) {
    text1948.style.visibility = "hidden";
    text1950.style.visibility = "hidden";
    text1960.style.visibility = "hidden";
    text1970.style.visibility = "hidden";
    text1980.style.visibility = "visible";
    text1990.style.visibility = "hidden";
    image1990One.style.visibility = "hidden";
    caption1990One.style.visibility = "hidden";
    image1990Two.style.visibility = "hidden";
    caption1990Two.style.visibility = "hidden";
    image1960Three.style.visibility = "hidden";
    caption1960Three.style.visibility = "hidden";
    image1960Four.style.visibility = "hidden";
    caption1960Four.style.visibility = "hidden";
    image1980Five.style.visibility = "visible";
    caption1980Five.style.visibility = "visible";
    image1980Six.style.visibility = "visible";
    caption1980Six.style.visibility = "visible";
    }
    if (event.target == button1990) {
    text1948.style.visibility = "hidden";
    text1950.style.visibility = "hidden";
    text1960.style.visibility = "hidden";
    text1970.style.visibility = "hidden";
    text1980.style.visibility = "hidden";
    text1990.style.visibility = "visible";
    image1990One.style.visibility = "visible";
    caption1990One.style.visibility = "visible";
    image1990Two.style.visibility = "visible";
    caption1990Two.style.visibility = "visible";
    image1960Three.style.visibility = "hidden";
    caption1960Three.style.visibility = "hidden";
    image1960Four.style.visibility = "hidden";
    caption1960Four.style.visibility = "hidden";
    image1980Five.style.visibility = "hidden";
    caption1980Five.style.visibility = "hidden";
    image1980Six.style.visibility = "hidden";
    caption1980Six.style.visibility = "hidden";
    }
}

function clearAll () {
    text1948.style.visibility = "hidden";
    text1950.style.visibility = "hidden";
    text1960.style.visibility = "hidden";
    text1970.style.visibility = "hidden";
    text1980.style.visibility = "hidden";
    text1990.style.visibility = "hidden";
    image1990One.style.visibility = "hidden";
    caption1990One.style.visibility = "hidden";
    image1990Two.style.visibility = "hidden";
    caption1990Two.style.visibility = "hidden";
    image1960Three.style.visibility = "hidden";
    caption1960Three.style.visibility = "hidden";
    image1960Four.style.visibility = "hidden";
    caption1960Four.style.visibility = "hidden";
    image1980Five.style.visibility = "hidden";
    caption1980Five.style.visibility = "hidden";
    image1980Six.style.visibility = "hidden";
    caption1980Six.style.visibility = "hidden";
}

button1948.addEventListener("click",revealText);
button1950.addEventListener("click",revealText);
button1960.addEventListener("click",revealText);
button1970.addEventListener("click",revealText);
button1980.addEventListener("click",revealText);
button1990.addEventListener("click",revealText);
resetButton.addEventListener("click",clearAll);
