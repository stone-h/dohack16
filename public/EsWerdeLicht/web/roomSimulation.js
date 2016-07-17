setInterval(function(){checkButtonPressed();}, 3000);
setInterval(function(){checkMotion();}, 3000);

function setAllLightsOff()
{
    for(var i = 0; i < 4; i++)
    {
        setLightStatus(i, false);
    }
}

function getAllOff()
{
    var off2 = $("#div2").css("fill");
    var off3 = $("#div3").css("fill");
    var off4 = $("#div4").css("fill");
    return off2 === "rgb(68, 68, 68)" && off3 === "rgb(68, 68, 68)" && off4 === "rgb(68, 68, 68)";
}

function checkButtonPressed(){
    console.log("called checkbutton");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/getbuttonpress/0", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null); 
    var stateButton1 = (JSON.parse(xhr.responseText)).pressed;
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/getbuttonpress/1", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null); 
    var stateButton2 = (JSON.parse(xhr.responseText)).pressed;
    
    console.log(stateButton1);
    console.log(stateButton2);
    if(stateButton1 === "LongPressed" && stateButton2 === "LongPressed")
    {
            lightOnFRoom(false);
            lightOnSRoom(false);
            lightOnTRoom(false);
    }
    else if(stateButton1 === "LongPressed")
    {
        lightOnFRoom(true);
    }
    else if(stateButton2 === "LongPressed")
    {
        lightOnSRoom(true);
        lightOnTRoom(true);
    }
}

function checkMotion(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/getmotiondetected", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null); 
    var response = JSON.parse(xhr.responseText);
    var motionDetected = response.detected;
    console.log("Motion: " + motionDetected);
    if(motionDetected)
        lightOnEntrance(true);
    else if(getAllOff())
    {
        lightOnEntrance(false);
        setLightStatus(0, false);
    }
}

function lightOnEntrance(on){
    if(on){
        $("#door").css({"fill": "brown"});
        $("#carpet").css({"fill": "red"});
        $("#div1").css({"fill": "rgb(255,165,79)"});
        setLightStatus(0, true);
    }
    else
    {
        $("#door").css({"fill": "rgb(68,68,68"});
        $("#div1").css({"fill": "rgb(68,68,68)"});
        $("#carpet").css({"fill": "rgb(68,68,68)"});
        setLightStatus(0, false);
    }
}

function lightOnFRoom(on){
    if(on){
        $("#carpetFRoom1").css({"fill": "red"});
        $("#carpetFRoom2").css({"fill": "red"});
        $("#div2").css({"fill": "rgb(255,165,79)"});
        setLightStatus(1, true);
    }
    else
    {
        $("#carpetFRoom1").css({"fill": "rgb(68,68,68"});
        $("#carpetFRoom2").css({"fill": "rgb(68,68,68)"});
        $("#div2").css({"fill": "rgb(68,68,68)"});
        setLightStatus(1, false);
    }
}

function lightOnSRoom(on){
    if(on){
        $("#carpetSRoom1").css({"fill": "red"});
        $("#carpetSRoom2").css({"fill": "red"});
        $("#div3").css({"fill": "rgb(255,165,79)"});
        setLightStatus(2, true);
    }
    else
    {
        $("#carpetSRoom1").css({"fill": "rgb(68,68,68"});
        $("#carpetSRoom2").css({"fill": "rgb(68,68,68)"});
        $("#div3").css({"fill": "rgb(68,68,68)"});
        setLightStatus(2, false);
    }
}

function lightOnTRoom(on) {
    if(on){
        $("#carpetTRoom").css({"fill": "red"});
        $("#div4").css({"fill": "rgb(255,165,79)"});
        setLightStatus(3, true);
    }
    else
    {
        $("#carpetTRoom").css({"fill": "rgb(68,68,68"});
        $("#div4").css({"fill": "rgb(68,68,68)"});
        setLightStatus(3, false);
    }
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

