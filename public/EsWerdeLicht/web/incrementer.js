/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function increment () { 
                
    for(var i = 0; i < 4; i++)
    {
   /*     if(getLightStatus(i))
        {
            setLightStatus(i, true);
            break;
        }
        else
        {
            setLightStatus(i, false);
        } */
    }
    
    console.log(getLightStatus(0));
}
            
function setValues() {
/*    var valueDec;
    var valueBin;
    
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
    $("#binaryValue").html("Binary: " + valueDec);
    $("#decimalValue").html("Decimal: " + valueBin); */
}

function getLightStatus(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/getlight/" + id, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null);
    var status = JSON.parse(xhr.responseText);
    return status.on;
}

function setLightStatus(id, on) {
    if(on)
    {
        $.get("http://localhost:8081/setlight/on/" + id);
    }
    else
    {
        $.get("http://localhost:8081/setlight/off/" + id);
    }
}

