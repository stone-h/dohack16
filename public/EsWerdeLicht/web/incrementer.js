/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function increment () { 
                
    for(var i = 0; i < 4; i++)
    {
        if(getLightStatus(i))
        {
            setLightStatus(i, true);
            break;
        }
        else
        {
            setLightStatus(i, false);
        }
    }
    
    console.log(getLightStatus(0));
}
            
function setValues() {
    var valueDec;
    var valueBin;
    
    for(var i = 0; i < 4; i++)
    {
        if(getLightStatus(i))
        {
            valueDec = valueDec + Math.pow(2, i);
            valueBin = "1" + valueBin;
        }
    }
    //get values of the lights and set values
    $("#binaryValue").html("Binary: " + value);
    $("#decimalValue").html("Decimal: " + value);
}

function getLightStatus(id) {
    $.get("http://localhost:8081/getlight/" + id);
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

