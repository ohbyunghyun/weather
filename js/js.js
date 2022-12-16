"use strict"

var ta = document.querySelector("#ta"),
    base_date = document.querySelector("#base_date"),
    ny = document.querySelector("#ny"),
    nx = document.querySelector("#nx");


document.querySelector("#btn1").onclick = () => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 
    "http://localhost:3000/proxy2?base_date=" + base_date.value +
    "&nx=" + nx.value + "&ny=" + ny.value, false);
    xhr.send();
    ta.value = xhr.responseText;
};
