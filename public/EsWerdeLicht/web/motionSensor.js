setTimeout(function() {
    setModus(2);
},1);

window.setInterval(function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/getmotiondetected", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null); 
    var response = JSON.parse(xhr.responseText);
    var motionDetected = response.detected;
    console.log(motionDetected);
    if(motionDetected)
    {
          $('body').css('background-color', 'white');
        for(var i=0; i<4; i++)
        {

            
            var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8081/setvalue/" + i + "/254", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(null);
            
           var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8081/setlight/on/" + i, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(null);
        } 
    }
    else
    {
         $('body').css('background-color', 'black');
        for(var i = 0; i < 4; i++)
        {
            setLightStatus(i, false);
             
        }  
    }
}, 3000);
