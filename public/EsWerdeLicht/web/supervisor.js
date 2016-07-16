

function initSupervisor()
{
    for(var i=0; i<4; i++)
    {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8081/getlight/"+i, false);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(null); 
        var response = JSON.parse(xhr.responseText);
        console.log(response.on);
        switch(response.on)
        {
            case true:
                $("#buttonLight"+i).val("on")
                break;
            case false:
                $("#buttonLight"+i).val("off");
                break;
        }
        
        var xhr2 = new XMLHttpRequest();
        xhr2.open("GET", "http://localhost:8081/getvalue/"+i, false);
        xhr2.setRequestHeader("Content-Type", "application/json");
        xhr2.send(null); 
        var response2 = JSON.parse(xhr2.responseText);
        console.log(response2.value);
        $("#lightSlider"+i).val(response2.value);
    }
}
var tick = 0;
function blink()
{
   switch(tick)
    {
        case 0:
             var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://localhost:8081/setlight/on/"+0, false);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(null); 
            tick=1;
            break;
        case 1:
             var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://localhost:8081/setlight/off/"+0, false);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(null); 
            tick=0;
            break;
    }
    console.log("blink2");
}

function toggleLight(light, lightNo)
{
    console.log(lightNo);
    switch(light.val())
    {
        case "off":
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://localhost:8081/setlight/on/"+lightNo, false);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(null); 
            light.val("on");
            break;
        case "on":
             var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://localhost:8081/setlight/off/"+lightNo, false);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(null); 
             light.val("off");
            break;
    }

}

function dimLight(light, lightNo)
{
    console.log(light.val());
    
    $.ajax({
                type: "GET",
                url: "http://localhost:8081/setvalue/"+lightNo+"/"+light.val(),
                dataType: "text"
            }).done(function (res) {
                // Your `success` code
                console.log("success");
            }).fail(function (jqXHR, textStatus, errorThrown) {
                alert("AJAX call failed: " + textStatus + ", " + errorThrown);
            });
}

