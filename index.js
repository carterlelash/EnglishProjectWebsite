let button1948 = document.getElementById("button1948");
let button1950 = document.getElementById("button1950");
let button1960 = document.getElementById("button1960");
let button1970 = document.getElementById("button1970");
let button1980 = document.getElementById("button1980");
let button1990 = document.getElementById("button1990");
let resetButton = document.getElementById("resetButton")

let testButton = document.getElementById("testButton");


let text1948 = document.getElementById("text1948");
let text1950 = document.getElementById("text1950");
let text1960 = document.getElementById("text1960");
let text1970 = document.getElementById("text1970");
let text1980 = document.getElementById("text1980");
let text1990 = document.getElementById("text1990");



let image1990One = document.getElementById("nelsonMandelaImage1");
let image1990Two = document.getElementById("FWdeKlerkImage2");

let image1960Three = document.getElementById("apartheidImage3");
let image1960Four = document.getElementById("apartheidImage4");

let image1980Five = document.getElementById("apartheidImage5");
let image1980Six= document.getElementById("apartheidImage6");

let image1950Seven = document.getElementById("apartheidImage7");
let image1950Eight =  document.getElementById("apartheidImage8");

let image1948Nine = document.getElementById("apartheidImage9");
let image1948Eleven = document.getElementById("apartheidImage11");

let image1970Twelve = document.getElementById("apartheidImage12");
let image1970Ten = document.getElementById("apartheidImage10");

// move this line to show progress - items above are completed

let image1980Thirteen = document.getElementById("apartheidImage13");
let image1980Fourteen = document.getElementById("apartheidImage14");

let image1990Fifteen = document.getElementById("apartheidImage15");
let image1990Sixteen = document.getElementById("apartheidImage16");

let image1970Seventeen = document.getElementById("apartheidImage17");
let image1970Eighteen = document.getElementById("apartheidImage18");

let image1960Nineteen = document.getElementById("apartheidImage19");
let image1960Twenty = document.getElementById("apartheidImage20");

let image1950TwentyOne = document.getElementById("apartheidImage21");
let image1950TwentyTwo = document.getElementById("apartheidImage22");

let image1948TwentyThree = document.getElementById("apartheidImage23");
let image1948TwentyFour = document.getElementById("apartheidImage24");


function flipPicture(event) {
   
    let item = event.target;
    console.log(item);
    let itemclass = item.className;
    let itemname = item.name;
    console.log(itemname)
    let itemid = item.id;
    console.log(itemid);
    let combo = `url(${itemname})`;
    //console.log(combo);
   
        if (item.style.background != "lightgrey") {
            console.log("image is now grey")
            item.style.background = "lightgrey";
            item.innerHTML = itemclass;
        }
        else {
            console.log("image is back to normal");
            item.innerHTML = "";
            item.style.backgroundImage = combo;
            item.style.backgroundSize = "450px 300px";
            item.style.backgroundRepeat = "no-repeat";
        }
}

function revealText (event) {
    if (event.target == button1948) {
    text1948.style.visibility = "visible";
    text1950.style.visibility = "hidden";
    text1960.style.visibility = "hidden";
    text1970.style.visibility = "hidden";
    text1980.style.visibility = "hidden";
    text1990.style.visibility = "hidden";
    button1948.style.backgroundColor = "lightgrey";
    button1950.style.backgroundColor = "";
    button1960.style.backgroundColor = "";
    button1970.style.backgroundColor = "";
    button1980.style.backgroundColor = "";
    button1990.style.backgroundColor = "";
    image1990One.style.visibility = "hidden";
    image1990Two.style.visibility = "hidden";
    image1960Three.style.visibility = "hidden";
    image1960Four.style.visibility = "hidden";
    image1980Five.style.visibility = "hidden";
    image1980Six.style.visibility = "hidden";
    image1950Seven.style.visibility = "hidden";
    image1950Eight.style.visibility = "hidden";
    image1948Nine.style.visibility = "visible";
    image1970Ten.style.visibility = "hidden";
    image1948Eleven.style.visibility = "visible";
    image1970Twelve.style.visibility = "hidden";
    image1980Thirteen.style.visibility = "hidden";
    image1980Fourteen.style.visibility = "hidden";
    image1990Fifteen.style.visibility = "hidden";
    image1990Sixteen.style.visibility = "hidden";
    image1970Seventeen.style.visibility = "hidden";
    image1970Eighteen.style.visibility = "hidden";
    image1960Nineteen.style.visibility = "hidden";
    image1960Twenty.style.visibility = "hidden";
    image1950TwentyOne.style.visibility = "hidden";
    image1950TwentyTwo.style.visibility = "hidden";
    image1948TwentyThree.style.visibility = "visible";
    image1948TwentyFour.style.visibility = "visible";
    }
    if (event.target == button1950) {
    text1948.style.visibility = "hidden";
    text1950.style.visibility = "visible";
    text1960.style.visibility = "hidden";
    text1970.style.visibility = "hidden";
    text1980.style.visibility = "hidden";
    text1990.style.visibility = "hidden";
    button1948.style.backgroundColor = "";
    button1950.style.backgroundColor = "lightgrey";
    button1960.style.backgroundColor = "";
    button1970.style.backgroundColor = "";
    button1980.style.backgroundColor = "";
    button1990.style.backgroundColor = "";
    image1990One.style.visibility = "hidden";
    image1990Two.style.visibility = "hidden";
    image1960Three.style.visibility = "hidden";
    image1960Four.style.visibility = "hidden";
    image1980Five.style.visibility = "hidden";
    image1980Six.style.visibility = "hidden";
    image1950Seven.style.visibility = "visible";
    image1950Eight.style.visibility = "visible";
    image1948Nine.style.visibility = "hidden";
    image1970Ten.style.visibility = "hidden";
    image1948Eleven.style.visibility = "hidden";
    image1970Twelve.style.visibility = "hidden";
    image1980Thirteen.style.visibility = "hidden";
    image1980Fourteen.style.visibility = "hidden";
    image1990Fifteen.style.visibility = "hidden";
    image1990Sixteen.style.visibility = "hidden";
    image1970Seventeen.style.visibility = "hidden";
    image1970Eighteen.style.visibility = "hidden";
    image1960Nineteen.style.visibility = "hidden";
    image1960Twenty.style.visibility = "hidden";
    image1950TwentyOne.style.visibility = "visible";
    image1950TwentyTwo.style.visibility = "visible";
    image1948TwentyThree.style.visibility = "hidden";
    image1948TwentyFour.style.visibility = "hidden";
    }
    if (event.target == button1960) {
    text1948.style.visibility = "hidden";
    text1950.style.visibility = "hidden";
    text1960.style.visibility = "visible";
    text1970.style.visibility = "hidden";
    text1980.style.visibility = "hidden";
    text1990.style.visibility = "hidden";
    button1948.style.backgroundColor = "";
    button1950.style.backgroundColor = "";
    button1960.style.backgroundColor = "lightgrey";
    button1970.style.backgroundColor = "";
    button1980.style.backgroundColor = "";
    button1990.style.backgroundColor = "";
    image1990One.style.visibility = "hidden";
    image1990Two.style.visibility = "hidden";
    image1960Three.style.visibility = "visible";
    image1960Four.style.visibility = "visible";
    image1980Five.style.visibility = "hidden";
    image1980Six.style.visibility = "hidden";
    image1950Seven.style.visibility = "hidden";
    image1950Eight.style.visibility = "hidden";
    image1948Nine.style.visibility = "hidden";
    image1970Ten.style.visibility = "hidden";
    image1948Eleven.style.visibility = "hidden";
    image1970Twelve.style.visibility = "hidden";
    image1980Thirteen.style.visibility = "hidden";
    image1980Fourteen.style.visibility = "hidden";
    image1990Fifteen.style.visibility = "hidden";
    image1990Sixteen.style.visibility = "hidden";
    image1970Seventeen.style.visibility = "hidden";
    image1970Eighteen.style.visibility = "hidden";
    image1960Nineteen.style.visibility = "visible";
    image1960Twenty.style.visibility = "visible";
    image1950TwentyOne.style.visibility = "hidden";
    image1950TwentyTwo.style.visibility = "hidden";
    image1948TwentyThree.style.visibility = "hidden";
    image1948TwentyFour.style.visibility = "hidden";
    }
    if (event.target == button1970) {
    text1948.style.visibility = "hidden";
    text1950.style.visibility = "hidden";
    text1960.style.visibility = "hidden";
    text1970.style.visibility = "visible";
    text1980.style.visibility = "hidden";
    text1990.style.visibility = "hidden";
    button1948.style.backgroundColor = "";
    button1950.style.backgroundColor = "";
    button1960.style.backgroundColor = "";
    button1970.style.backgroundColor = "lightgrey";
    button1980.style.backgroundColor = "";
    button1990.style.backgroundColor = "";
    image1990One.style.visibility = "hidden";
    image1990Two.style.visibility = "hidden";
    image1960Three.style.visibility = "hidden";
    image1960Four.style.visibility = "hidden";
    image1980Five.style.visibility = "hidden";
    image1980Six.style.visibility = "hidden";
    image1950Seven.style.visibility = "hidden";
    image1950Eight.style.visibility = "hidden";
    image1948Nine.style.visibility = "hidden";
    image1970Ten.style.visibility = "visible";
    image1948Eleven.style.visibility = "hidden";
    image1970Twelve.style.visibility = "visible";
    image1980Thirteen.style.visibility = "hidden";
    image1980Fourteen.style.visibility = "hidden";
    image1990Fifteen.style.visibility = "hidden";
    image1990Sixteen.style.visibility = "hidden";
    image1970Seventeen.style.visibility = "visible";
    image1970Eighteen.style.visibility = "visible";
    image1960Nineteen.style.visibility = "hidden";
    image1960Twenty.style.visibility = "hidden";
    image1950TwentyOne.style.visibility = "hidden";
    image1950TwentyTwo.style.visibility = "hidden";
    image1948TwentyThree.style.visibility = "hidden";
    image1948TwentyFour.style.visibility = "hidden";
    }
    if (event.target == button1980) {
    text1948.style.visibility = "hidden";
    text1950.style.visibility = "hidden";
    text1960.style.visibility = "hidden";
    text1970.style.visibility = "hidden";
    text1980.style.visibility = "visible";
    text1990.style.visibility = "hidden";
    button1948.style.backgroundColor = "";
    button1950.style.backgroundColor = "";
    button1960.style.backgroundColor = "";
    button1970.style.backgroundColor = "";
    button1980.style.backgroundColor = "lightgrey";
    button1990.style.backgroundColor = "";
    image1990One.style.visibility = "visible";
    image1990Two.style.visibility = "visible";
    image1960Three.style.visibility = "hidden";
    image1960Four.style.visibility = "hidden";
    image1980Five.style.visibility = "hidden";
    image1980Six.style.visibility = "hidden";
    image1950Seven.style.visibility = "hidden";
    image1950Eight.style.visibility = "hidden";
    image1948Nine.style.visibility = "hidden";
    image1970Ten.style.visibility = "hidden";
    image1948Eleven.style.visibility = "hidden";
    image1970Twelve.style.visibility = "hidden";
    image1980Thirteen.style.visibility = "visible";
    image1980Fourteen.style.visibility = "visible";
    image1990Fifteen.style.visibility = "hidden";
    image1990Sixteen.style.visibility = "hidden";
    image1970Seventeen.style.visibility = "hidden";
    image1970Eighteen.style.visibility = "hidden";
    image1960Nineteen.style.visibility = "hidden";
    image1960Twenty.style.visibility = "hidden";
    image1950TwentyOne.style.visibility = "hidden";
    image1950TwentyTwo.style.visibility = "hidden";
    image1948TwentyThree.style.visibility = "hidden";
    image1948TwentyFour.style.visibility = "hidden";
    }
    if (event.target == button1990) {
    text1948.style.visibility = "hidden";
    text1950.style.visibility = "hidden";
    text1960.style.visibility = "hidden";
    text1970.style.visibility = "hidden";
    text1980.style.visibility = "hidden";
    text1990.style.visibility = "visible";
    button1948.style.backgroundColor = "";
    button1950.style.backgroundColor = "";
    button1960.style.backgroundColor = "";
    button1970.style.backgroundColor = "";
    button1980.style.backgroundColor = "";
    button1990.style.backgroundColor = "lightgrey";
    image1990One.style.visibility = "hidden";
    image1990Two.style.visibility = "hidden";
    image1960Three.style.visibility = "hidden";
    image1960Four.style.visibility = "hidden";
    image1980Five.style.visibility = "visible";
    image1980Six.style.visibility = "visible";
    image1950Seven.style.visibility = "hidden";
    image1950Eight.style.visibility = "hidden";
    image1948Nine.style.visibility = "hidden";
    image1970Ten.style.visibility = "hidden";
    image1948Eleven.style.visibility = "hidden";
    image1970Twelve.style.visibility = "hidden";
    image1980Thirteen.style.visibility = "hidden";
    image1980Fourteen.style.visibility = "hidden";
    image1990Fifteen.style.visibility = "visible";
    image1990Sixteen.style.visibility = "visible";
    image1970Seventeen.style.visibility = "hidden";
    image1970Eighteen.style.visibility = "hidden";
    image1960Nineteen.style.visibility = "hidden";
    image1960Twenty.style.visibility = "hidden";
    image1950TwentyOne.style.visibility = "hidden";
    image1950TwentyTwo.style.visibility = "hidden";
    image1948TwentyThree.style.visibility = "hidden";
    image1948TwentyFour.style.visibility = "hidden";
    }
}

function clearAll () {
    text1948.style.visibility = "hidden";
    text1950.style.visibility = "hidden";
    text1960.style.visibility = "hidden";
    text1970.style.visibility = "hidden";
    text1980.style.visibility = "hidden";
    text1990.style.visibility = "hidden";
    button1948.style.backgroundColor = "";
    button1950.style.backgroundColor = "";
    button1960.style.backgroundColor = "";
    button1970.style.backgroundColor = "";
    button1980.style.backgroundColor = "";
    button1990.style.backgroundColor = "";
    image1990One.style.visibility = "hidden";
    image1990Two.style.visibility = "hidden";
    image1960Three.style.visibility = "hidden";
    image1960Four.style.visibility = "hidden";
    image1980Five.style.visibility = "hidden";
    image1980Six.style.visibility = "hidden";
    image1950Seven.style.visibility = "hidden";
    image1950Eight.style.visibility = "hidden";
    image1948Nine.style.visibility = "hidden";
    image1970Ten.style.visibility = "hidden";
    image1948Eleven.style.visibility = "hidden";
    image1970Twelve.style.visibility = "hidden";
    image1980Thirteen.style.visibility = "hidden";
    image1980Fourteen.style.visibility = "hidden";
    image1990Fifteen.style.visibility = "hidden";
    image1990Sixteen.style.visibility = "hidden";
    image1970Seventeen.style.visibility = "hidden";
    image1970Eighteen.style.visibility = "hidden";
    image1960Nineteen.style.visibility = "hidden";
    image1960Twenty.style.visibility = "hidden";
    image1950TwentyOne.style.visibility = "hidden";
    image1950TwentyTwo.style.visibility = "hidden";
    image1948TwentyThree.style.visibility = "hidden";
    image1948TwentyFour.style.visibility = "hidden";

}

button1948.addEventListener("click",revealText);
button1950.addEventListener("click",revealText);
button1960.addEventListener("click",revealText);
button1970.addEventListener("click",revealText);
button1980.addEventListener("click",revealText);
button1990.addEventListener("click",revealText);
resetButton.addEventListener("click",clearAll);

image1990One.addEventListener("click",flipPicture);
image1990Two.addEventListener("click",flipPicture);
image1960Three.addEventListener("click",flipPicture);
image1960Four.addEventListener("click",flipPicture);
image1980Five.addEventListener("click",flipPicture);
image1980Six.addEventListener("click",flipPicture);
image1950Seven.addEventListener("click",flipPicture);
image1950Eight.addEventListener("click",flipPicture);
image1948Nine.addEventListener("click",flipPicture);
image1970Ten.addEventListener("click",flipPicture);
image1948Eleven.addEventListener("click",flipPicture);
image1970Twelve.addEventListener("click",flipPicture);
image1980Thirteen.addEventListener("click",flipPicture);
image1980Fourteen.addEventListener("click",flipPicture);
image1990Fifteen.addEventListener("click",flipPicture);
image1990Sixteen.addEventListener("click",flipPicture);
image1970Seventeen.addEventListener("click",flipPicture);
image1970Eighteen.addEventListener("click",flipPicture);
image1960Nineteen.addEventListener("click",flipPicture);
image1960Twenty.addEventListener("click",flipPicture);
image1950TwentyOne.addEventListener("click",flipPicture);
image1950TwentyTwo.addEventListener("click",flipPicture);
image1948TwentyThree.addEventListener("click",flipPicture);
image1948TwentyFour.addEventListener("click",flipPicture);
