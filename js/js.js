var guuix = 62,
    guuiy = 126,
    daejeonx = 68,
    daejeony = 101;

let today = new Date();

let year = today.getFullYear();
let month = today.getMonth()+1;
let day = today.getDate();
let hour = 0100;

let date = `${year}${month}${day}`;

(function guiii() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + date +
    "&nx=" + guuix + "&ny=" + guuiy, false);
    xhr.send();
    guii.value = xhr.responseText;
    var arr = JSON.parse(xhr.responseText);

    let guiisky = arr.response.body.items.item[18].category + ":" + arr.response.body.items.item[18].fcstValue;
    let guiitmp = arr.response.body.items.item[24].category + ":" + arr.response.body.items.item[24].fcstValue;
    let guiirain = arr.response.body.items.item[6].category + ":" + arr.response.body.items.item[6].fcstValue;

    guii.value = guiisky + "," + guiitmp + "," + guiirain;
}());

(function daejeonn() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",
    "http://localhost:3000/proxy2?base_date=" + date +
    "&nx=" + daejeonx + "&ny=" + daejeony, false);
    xhr.send();
    var arr = JSON.parse(xhr.responseText);
        
    let daejeonsky = arr.response.body.items.item[18].category + ":" + arr.response.body.items.item[18].fcstValue;
    let daejeontmp = arr.response.body.items.item[24].category + ":" + arr.response.body.items.item[24].fcstValue;
    let daejeonrain = arr.response.body.items.item[6].category + ":" + arr.response.body.items.item[6].fcstValue;

    daejeon.value = daejeonsky + "," + daejeontmp + "," + daejeonrain;
}());
