function temperature(){
    // convert celcius to farenheit
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f;
    return false;
}


function weight(){
    // convert KGs to Pounds
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.205;
    document.getElementById("pounds").value = p;
    return false;
}


function distance(){
    // convert KMs to Miles
    var km = document.getElementById("km").value;
    var m = km * 0.62137;
    document.getElementById("miles").value = m;
    return false;
}