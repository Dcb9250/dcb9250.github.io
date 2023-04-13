let theBody = document.querySelector('body');
let theMain = document.querySelector('main')
let theHeading = document.querySelector('h1')
let theHP = document.getElementById('heading')
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let p3 = document.getElementById('p3')
let p4 = document.getElementById('p4')
const theButt = document.querySelector('button')



//body//
theBody.style.backgroundColor ="black"

//heading//
theHeading.style.backgroundColor = "white";
theHeading.style.backgroundImage = "url('https://img1.picmix.com/output/stamp/normal/9/5/1/5/1915159_0d6f6.gif')"
theHeading.textContent= "A"
theHeading.style.fontWeight= "100"//
theHeading.style.color= "black"
theHeading.style.fontSize= "500pt"
theHeading.style.marginTop = "-5%"
theHP.textContent = "rt"
theHP.style.color= "black"
theHP.style.fontSize= "40pt"

//sub heading//
//p1//
p1.textContent= "is anything"
p1.style.fontSize= "20pt"
p1.style.padding= "5%"
p1.style.color= "black"
p1.style.backgroundColor = "white"
p1.style.backgroundImage = "url('data:image/png;base64,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')"

p1.style.paddingBottom = "300pt"
p1.style.border = "5pt black double"
 
//p2// 
p2.textContent= "YOU"
p2.style.rotate = "45deg"
p2.style.fontSize= "40pt"
p2.style.textAlign = "right"
p2.style.marginTop = "-45%"
p2.style.marginRight = "75%"
p2.style.color= "black"

//p3//
p3.textContent= "can get "
p3.style.rotate = "20deg"
p3.style.fontSize= "40pt"
p3.style.textAlign = "right"
p3.style.marginTop = "-25%"
p3.style.marginRight = "50%"
p3.style.color= "black"

//p4//
p4.textContent= "Away with... "
p4.style.rotate = "330deg"
p4.style.fontSize= "55pt"
p4.style.textAlign = "right"
p4.style.marginTop = "-5%"
p4.style.marginRight ="10%"
p4.style.color= "black"


//image//
theMain.style.paddingBottom = "200pt"
theMain.style.backgroundColor = "white"
theMain.style.backgroundImage = "url('https://www.fionnbreen.com/assets/_1200x630_crop_center-center_none/FionnBreenOG20220524b.jpg')"
theMain.style.backgroundSize = "200%"
theMain.style.backgroundRepeat = "no-repeat"
theMain.style.backgroundPosition = "center"
theMain.style.border = "10pt white double"

//button//
theButt.style.color = "white"
theButt.style.backgroundColor = "white"
theButt.style.border = "25pt white solid"
theButt.style.borderRadius = "100%"
theButt.style.padding = "30vh"
theButt.style.marginLeft = "35%"
theButt.style.marginTop = "15%"

// button hover//
theButt.addEventListener('mouseover', buttHov)

function buttHov(){
    theButt.style.backgroundColor = "black"  
    theButt.textContent= "'The new electronic interdependence recreates the world in the image of a global village.'"
    theButt.style.textAlign = "justify"
    theButt.style.marginLeft = "7%"
    theButt.style.fontFamily = "TimesNewRoman"
    theButt.style.paddingLeft = "-5vh"
    theButt.style.paddingRight = "-5vh"
    theButt.style.fontSize= "15pt"
}