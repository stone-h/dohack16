setInterval(function() {
    checkButton();
}, 3000);

var modus = 0;
var list = [
    "index.html",
    "incrementer.html",
    "Sonnenbank.html",
    "GuessTheColor.html"
];

function checkButton()
{
     var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/getbuttonpress/0", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null); 
    var stateButton1 = (JSON.parse(xhr.responseText)).pressed;
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/getbuttonpress/1", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null); 
    var stateButton2 = (JSON.parse(xhr.responseText)).pressed;
    
    if(stateButton1 === "LongPressed" && stateButton2 === "LongPressed")
    {
        console.log("both pressed");
        console.log(modus);
        window.location.href = list[modus+1];
    }
}

function setModus(modus)
{
    this.modus = modus;
}