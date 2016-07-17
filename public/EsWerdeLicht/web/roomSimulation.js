setInterval(function(){checkButtonPressed();}, 3000);
setInterval(function(){checkMotion();}, 3000);

function setLight(roomId, on){
    if(on)
        $("#div" + roomId).css({"fill": "rgb(255, 165, 79)"});
    else
        $("#div" + roomId).css({"fill": "rgb(68, 68, 68"});
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
        for(var i = 1; i < 5; i++) {
            setLight(i+1, false);
        }
    }
    else if(stateButton1 === "LongPressed")
    {
        setLight(2, true);
    }
    else if(stateButton2 === "LongPressed")
    {
        setLight(3, true);
        setLight(4, true);
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
        console.log("HUHU");
        lightOnEntrance(false);
    }
}

function lightOnEntrance(on){
    if(on){
        $("#door").css({"fill": "brown"});
        $("#carpet").css({"fill": "red"});
        $("#div1").css({"fill": "rgb(255,165,79)"});
    }
    else
    {
        $("#door").css({"fill": "rgb(68,68,68"});
        $("#div1").css({"fill": "rgb(68,68,68)"});
        $("#carpet").css({"fill": "rgb(68,68,68)"});
    }
}

