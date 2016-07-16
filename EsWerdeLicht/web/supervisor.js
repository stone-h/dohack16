function toggleLight(light, lightNo)
{
    console.log(lightNo);
    switch(light.val())
    {
        case "off":
 
             $.ajax({
                type: "GET",
                url: "http://localhost:8081/setlight/on/"+lightNo,
                dataType: "text"
            }).done(function (res) {
                // Your `success` code
                console.log("success");
            }).fail(function (jqXHR, textStatus, errorThrown) {
                alert("AJAX call failed: " + textStatus + ", " + errorThrown);
            });
                        light.val("on");
            break;
        case "on":
           
            $.ajax({
                type: "GET",
                url: "http://localhost:8081/setlight/off/"+lightNo,
                dataType: "text"
            }).done(function (res) {
                // Your `success` code
                console.log("success");
            }).fail(function (jqXHR, textStatus, errorThrown) {
                alert("AJAX call failed: " + textStatus + ", " + errorThrown);
            });
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

