setTimeout(function() {
    setModus(3);
},1);
var r;
var g;
var b;
function randomize()
{
   $('body').css('background-color', 'darkgrey');
    r=getRandomInt(50,254);
    g=getRandomInt(50,254);
    b=getRandomInt(50,254);

          var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8081/setvalue/" + 0 + "/"+r, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(null);
            
           var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8081/setlight/on/" + 0, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(null);
        
            var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8081/setvalue/" + 1 + "/"+g, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(null);
            
           var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8081/setlight/on/" + 1, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(null);
        
            var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8081/setvalue/" + 2 + "/"+b, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(null);
            
           var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8081/setlight/on/" + 2, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(null);
        
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8081/setlight/off/" + 3, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(null);

}

function showColor()
{
    $('body').css('background-color', 'rgb('+r+','+g+','+b+')');
}

function getRandomInt(min,max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

