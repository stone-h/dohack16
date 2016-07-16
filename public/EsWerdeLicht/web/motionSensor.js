window.setInterval(function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8081/getmotiondetected", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null); 
    var response = JSON.parse(xhr.responseText);
    var motionDetected = response.detected;
    console.log(motionDetected);
    if(motionDetected)
        alert("Hallo!");
}, 3000);
