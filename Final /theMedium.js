console.log("theMessage");
console.log("hellow?")

const theButton = document.querySelector('button');
//var --> dont use//
let theBody = document.querySelector('body');
let theThesis = document.getElementById("theMainPoint");

let clicked = false;
//backgroundImage
theButton.addEventListener('click', beTheChange);

function beTheChange(){
    if (clicked=== false){
    console.log("you Clicked");
    theBody.style.backgroundColor = "indigo";
    theBody.style.backgroundImage = "url('https://66.media.tumblr.com/840faa6c70c33871a45a90d3cfe574ab/tumblr_mfu88zva3i1rfjowdo1_500.gif')"
    theThesis.textContent = "PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY PARTY";
    theThesis.style.color= "white";
    theThesis.style.fontSize= "25pt";
    clicked = true;
    }
    else{
        theBody.style.backgroundColor = "lavenderblush";
        theBody.style.backgroundImage = "url()";
        theThesis.textContent = "Hello";
        theThesis.style.color= "black";
        theThesis.style.fontSize= "15pt";
        clicked = false;
    }
}

