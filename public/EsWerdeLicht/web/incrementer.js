// value of the lights as a decimal number
var valueDec = 0;
setInterval(function() {
    checkButtonPressed();
}, 3000);

function chechButtonPressed()
{
     var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/getbuttonpress/0", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null); 
    console.log(xhr.responseText);
}
    
// increments the lights value
function increment () {         
    // change the lights based on their status
    for(var i = 0; i < 4; i++)
    {
        if(getLightStatus(i))
        {
            setLightStatus(i, false);
        }
        else
        {
            setLightStatus(i, true);
            break;
        }
    }
    
    // change the value displays
    valueDec++;
    if(valueDec > 15)
    {
        valueDec = 0;
    }
    var valueBin = valueDec.toString(2);
    $("#binaryValue").html("Binary: " + valueBin);
    $("#decimalValue").html("Decimal: " + valueDec);
}
            
// gets the current status of the lights and changes the value displays to
// the value
function initValues() {
    
    for(var i = 0; i < 4; i++)
    {
        if(getLightStatus(i))
        {
            valueDec = valueDec + Math.pow(2, i);
        }
    }
    var valueBin = valueDec.toString(2);
    $("#binaryValue").html("Binary: " + valueBin);
    $("#decimalValue").html("Decimal: " + valueDec);
}

// gets the status of a light with the given id
function getLightStatus(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/getlight/"+id, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null); 
    var response = JSON.parse(xhr.responseText);
    return response.on;
}

// setes the status of a light with the given id to the given status
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

