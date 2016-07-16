function setLightSensorValue(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/getsensorvalue", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null); 
    var response = JSON.parse(xhr.responseText);
    var responseLightValue = response.value;
    //dim Lights
    var newLightValue = parseInt(responseLightValue/4);
    if(newLightValue > 150)
        newLightValue = 150;
    for(var i = 0; i < 4; i++) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8081/setvalue/" + i + "/" + newLightValue, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(null);     
    }
  initSupervisor();  
};


