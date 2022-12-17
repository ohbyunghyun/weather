var guuix = 62,
    guuiy = 126,
    daejeonx = 68,
    daejeony = 101;

var dae = document.querySelector("#dae");
var daeicon = document.querySelector("#daeicon");
var guii = document.querySelector("#guii");
var guiiicon = document.querySelector("#guiiicon");

let today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
let hour = 0100;

let date = `${year}${month}${day}`;

(function guiii() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",
        "http://localhost:3000/proxy2?base_date=" + date +
        "&nx=" + guuix + "&ny=" + guuiy, false);
    xhr.send();
    var arr = JSON.parse(xhr.responseText);

    let guiisky = arr.response.body.items.item[18].fcstValue;
    let guiitmp = arr.response.body.items.item[24].fcstValue;
    let guiirain = arr.response.body.items.item[6].fcstValue;

    guii.innerHTML = guiitmp + "℃";

    if (guiirain == 0) {
        if (guiisky == 3) {
            guiiicon.innerHTML = "<img src='semicloud.JPG' width='50px' height='50px'>";
        } else if (guiisky == 1) {
            guiiicon.innerHTML = "<img src='sun.JPG' width='50px' height='50px'>";
        } else if (guiisky == 4) {
            guiiicon.innerHTML = "<img src='cloud.JPG' width='50px' height='50px'>";
        }
    } else if (guiirain == 1 || guiirain == 2 || guiirain == 5 || guiirain == 6) {
        guiiicon.innerHTML = "<img src='rain.JPG' width='50px' height='50px'>";
    } else {
        guiiicon.innerHTML = "<img src='snow.JPG' width='50px' height='50px'>";
    }
}());

(function daejeonn() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",
        "http://localhost:3000/proxy2?base_date=" + date +
        "&nx=" + daejeonx + "&ny=" + daejeony, false);
    xhr.send();
    var arr = JSON.parse(xhr.responseText);
    let daejeonsky = arr.response.body.items.item[18].fcstValue;
    let daejeontmp = arr.response.body.items.item[24].fcstValue;
    let daejeonrain = arr.response.body.items.item[6].fcstValue;

    dae.innerHTML = daejeontmp + "℃";


    if (daejeonrain == 0) {
        if (daejeonsky == 3) {
            daeicon.innerHTML = "<img src='semicloud.JPG' width='50px' height='50px'>";
        } else if (daejeonsky == 1) {
            daeicon.innerHTML = "<img src='sun.JPG' width='50px' height='50px'>";
        } else if (daejeonsky == 4) {
            daeicon.innerHTML = "<img src='cloud.JPG' width='50px' height='50px'>";
        }
    } else if (daejeonrain == 1 || daejeonrain == 2 || daejeonrain == 5 || daejeonrain == 6) {
        daeicon.innerHTML = "<img src='rain.JPG' width='50px' height='50px'>";
    } else {
        daeicon.innerHTML = "<img src='snow.JPG' width='50px' height='50px'>";
    }
}());

