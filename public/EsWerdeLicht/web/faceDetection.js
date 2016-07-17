function enableLightsByLocation(coords)
{
    var vHeight = parseInt($("#localVideo").height());
    var vWidth = parseInt($("#localVideo").width());
    var offsetTop = parseInt($("#localVideo").offset().top);
    var offsetLeft = 0;
    var x = (coords.x/2);
    var y = (coords.y/2);
    console.log(x);
    console.log(y);
    console.log(offsetLeft);
    console.log((vWidth+offsetLeft) / 2);
    console.log("   ");
    
    if(x <= (vWidth+offsetLeft) / 2 && y <= (vWidth+offsetLeft))
    {
       $("#quarterLabel").text("FIRST");
         var xhr = new XMLHttpRequest();
         xhr.open("GET", "http://localhost:8081/setlight/on/"+0, false);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(null); 
          xhr.open("GET", "http://localhost:8081/setlight/off/"+1, false);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(null); 
         xhr.open("GET", "http://localhost:8081/setlight/off/"+2, false);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(null); 
         xhr.open("GET", "http://localhost:8081/setlight/off/"+3, false);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(null); 
    }
    if(x > (vWidth+offsetLeft) / 2 && y <= (vHeight+offsetTop) / 2)
    {
        $("#quarterLabel").text("SECOND");
         var xhr = new XMLHttpRequest();
         xhr.open("GET", "http://localhost:8081/setlight/on/"+1, false);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(null); 
         xhr.open("GET", "http://localhost:8081/setlight/off/"+0, false);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(null); 
         xhr.open("GET", "http://localhost:8081/setlight/off/"+2, false);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(null); 
         xhr.open("GET", "http://localhost:8081/setlight/off/"+3, false);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(null); 
    }
    if(x <= (vWidth+offsetLeft) / 2 && y > (vHeight+offsetTop) / 2) 
    {
        $("#quarterLabel").text("THIRD");
         var xhr = new XMLHttpRequest();
         xhr.open("GET", "http://localhost:8081/setlight/on/"+2, false);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(null); 
                  xhr.open("GET", "http://localhost:8081/setlight/off/"+0, false);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(null); 
         xhr.open("GET", "http://localhost:8081/setlight/off/"+1, false);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(null); 
         xhr.open("GET", "http://localhost:8081/setlight/off/"+3, false);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(null); 
    }
    
    if(x > (vWidth+offsetLeft) / 2 && y > (vHeight+offsetTop) / 2)
    {
        $("#quarterLabel").text("FOURTH");
         var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://localhost:8081/setlight/on/"+3, false);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(null);      
            xhr.open("GET", "http://localhost:8081/setlight/off/"+0, false);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(null); 
         xhr.open("GET", "http://localhost:8081/setlight/off/"+2, false);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(null); 
         xhr.open("GET", "http://localhost:8081/setlight/off/"+1, false);
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(null); 
            
    }
}
