/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
   
var valueDec = 0;
    
    
function increment () {         
    for(var i = 0; i < 4; i++)
    {
        if(getLightStatus(i))
        {
            console.log("true");
            setLightStatus(i, false);
        }
        else
        {
            console.log("false");
            setLightStatus(i, true);
            break;
        }
    }
    valueDec++;
    if(valueDec > 15)
    {
        valueDec = 0;
        valueBin = "0000";
    }
    else
    {
        var valueBin = valueDec.toString(2);
    }
    $("#binaryValue").html("Binary: " + valueBin);
    $("#decimalValue").html("Decimal: " + valueDec);
}
            
function initValues() {
    var valueBin = "";
    
    for(var i = 0; i < 4; i++)
    {
        if(getLightStatus(i))
        {
            valueDec = valueDec + Math.pow(2, i);
            valueBin = "1" + valueBin;
        }
        else
        {
            valueBin = "0" + valueBin;
        }
    }
    //get values of the lights and set values
    $("#binaryValue").html("Binary: " + valueBin);
    $("#decimalValue").html("Decimal: " + valueDec);
}

function getLightStatus(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/getlight/"+id, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null); 
    var response = JSON.parse(xhr.responseText);
    return response.on;
}

function setLightStatus(id, on) {
    if(on)
    {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8081/setlight/on/"+id, false);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(null); 
    }
    else
    {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8081/setlight/off/"+id, false);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(null); 
    }
}

