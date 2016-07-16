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


