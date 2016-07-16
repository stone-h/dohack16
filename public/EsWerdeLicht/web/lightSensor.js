var lightValue = 0;

var enabled = false;

function switchEnabled()
{
    enabled = !enabled;
    if(enabled)
    {
        $("#switchAutoDim").val("Disable auto-dim");
    }
    else
    {
        $("#switchAutoDim").val("Enable auto-dim");
    }
}
window.setInterval(
    function getLightSensorValue(){
        if(enabled && lightValue !== 30) //sample value
        {
        console.log("called");
            //dim Lights
            for(var i = 0; i < 4; i++) {
                $.ajax({
                    type: "GET",
                    url: "http://localhost:8081/setvalue/"+i+"/"+250,
                    dataType: "text"
                }).done(function (res) {
                    // Your `success` code
                    console.log("success");
                }).fail(function (jqXHR, textStatus, errorThrown) {
                    alert("AJAX call failed: " + textStatus + ", " + errorThrown);
                });
            } 
        }
    }, 2000);


