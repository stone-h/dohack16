function toggleLight(light)
{
    light = $(light);
    console.log(light.val());
    switch(light.val())
    {
        case "on":
            light.val("off");
            break;
        case "off":
            light.val("on");
            break;
    }

}

function dimLight(light)
{
    light = $(light);
    console.log(light.val());
}

function test()
{
    $.get( "http://localhost:8080/setlight/on/0");
}

