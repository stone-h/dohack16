/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function increment () { 
                
    for(var i = 0; i < 4; i++)
    {
                    // wenn licht an stelle i false dann true setzen und break
                    // sonst false setzen und weiter in schleife
    }
    
    test();
}
            
function setValues() {
    var value = 15;
    //get values of the lights and set values
    $("#binaryValue").html("Binary: " + value);
    $("#decimalValue").html("Decimal: " + value);
    $("#hexValue").html("Hexadecimal: " + value);
}

function test() {
    $.get("http://localhost:8081/setlight/off/1");
}

function test2() {
    $().get("http://localhost:8081/setlight/on/1");
}

function getLightStatus(id) {
    $.get("http://localhost:8081/getLight/" + id);
}

