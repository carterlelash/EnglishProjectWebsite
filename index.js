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

//let image1990One = document.getElementById("nelsonMandelaImage1");
//let caption1990One = document.getElementById("nelsonMandelaCaption1")
//let image1990Two = document.getElementById("FWdeKlerkImage2");
//let caption1990Two = document.getElementById("FWdeKlerkCaptionTwo")

function revealText (event) {
    if (event.target == button1948) {
        text1948.style.visibility = "visible";
        text1950.style.visibility = "hidden";
        text1960.style.visibility = "hidden";
        text1970.style.visibility = "hidden";
        text1980.style.visibility = "hidden";
        text1990.style.visibility = "hidden";
    }
    if (event.target == button1950) {
        text1948.style.visibility = "hidden";
        text1950.style.visibility = "visible";
        text1960.style.visibility = "hidden";
        text1970.style.visibility = "hidden";
        text1980.style.visibility = "hidden";
        text1990.style.visibility = "hidden";
    }
    if (event.target == button1960) {
        text1948.style.visibility = "hidden";
        text1950.style.visibility = "hidden";
        text1960.style.visibility = "visible";
        text1970.style.visibility = "hidden";
        text1980.style.visibility = "hidden";
        text1990.style.visibility = "hidden";
    }
    if (event.target == button1970) {
        text1948.style.visibility = "hidden";
        text1950.style.visibility = "hidden";
        text1960.style.visibility = "hidden";
        text1970.style.visibility = "visible";
        text1980.style.visibility = "hidden";
        text1990.style.visibility = "hidden";
    }
    if (event.target == button1980) {
        text1948.style.visibility = "hidden";
        text1950.style.visibility = "hidden";
        text1960.style.visibility = "hidden";
        text1970.style.visibility = "hidden";
        text1980.style.visibility = "visible";
        text1990.style.visibility = "hidden";
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
}

button1948.addEventListener("click",revealText);
button1950.addEventListener("click",revealText);
button1960.addEventListener("click",revealText);
button1970.addEventListener("click",revealText);
button1980.addEventListener("click",revealText);
button1990.addEventListener("click",revealText);
resetButton.addEventListener("click",clearAll);
