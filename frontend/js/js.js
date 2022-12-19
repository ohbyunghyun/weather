var dae = document.querySelector("#dae");
var daeicon = document.querySelector("#daeicon");
var daejeonwind = document.querySelector("#daejeonwind");
var daejeonwindicon = document.querySelector("#daejeonwindicon");

var guii = document.querySelector("#guii");
var guiiicon = document.querySelector("#guiiicon");
var guiiwind = document.querySelector("#guiiwind");
var guiiwindicon = document.querySelector("#guiiwindicon");

var busan = document.querySelector("#busan");
var busanicon = document.querySelector("#busanicon");
var busanwind = document.querySelector("#busanwind");
var busanwindicon = document.querySelector("#busanwindicon");

var gwangju = document.querySelector("#gwangju");
var gwangjuicon = document.querySelector("#gwangjuicon");
var gwangjuwind = document.querySelector("#gwangjuwind");
var gwangjuwindicon = document.querySelector("#gwangjuwindicon");

var gangwon = document.querySelector("#gangwon");
var gangwonicon = document.querySelector("#gangwonicon");
var gangwonwind = document.querySelector("#gangwonwind");
var gangwonwindicon = document.querySelector("#gangwonwindicon");

var dokdo = document.querySelector("#dokdo");
var dokdoicon = document.querySelector("#dokdoicon");
var dokdowind = document.querySelector("#dokdowind");
var dokdowindicon = document.querySelector("#dokdowindicon");

let windicon = document.querySelector("#wind");
let temp = document.querySelector("#temp");

let today = new Date();
var time = document.querySelector("#time");

let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
let hour = today.getHours();
let hours = `${hour}00`;
let date = `${year}${month}${day}`;
let date2 = `${year}-${month}-${day}`;

time.innerHTML = `${date2} / ${hour-1}:00  기준`;

windicon.onclick = function() {
    guiiwind.style.display = 'block';
    guiiwindicon.style.display = 'block';
    guii.style.display = 'none';
    guiiicon.style.display = 'none';

    daejeonwind.style.display = 'block';
    daejeonwindicon.style.display = 'block';
    dae.style.display = 'none';
    daeicon.style.display = 'none';

    busanwind.style.display = 'block';
    busanwindicon.style.display = 'block';
    busan.style.display = 'none';
    busanicon.style.display = 'none';

    gwangjuwind.style.display = 'block';
    gwangjuwindicon.style.display = 'block';
    gwangju.style.display = 'none';
    gwangjuicon.style.display = 'none';

    gangwonwind.style.display = 'block';
    gangwonwindicon.style.display = 'block';
    gangwon.style.display = 'none';
    gangwonicon.style.display = 'none';
    
    dokdowind.style.display = 'block';
    dokdowindicon.style.display = 'block';
    dokdo.style.display = 'none';
    dokdoicon.style.display = 'none';

    jejuwind.style.display = 'block';
    jejuwindicon.style.display = 'block';
    jeju.style.display = 'none';
    jejuicon.style.display = 'none';
};

temp.onclick = function() {
    guiiwind.style.display = 'none';
    guiiwindicon.style.display = 'none';
    guii.style.display = 'block';
    guiiicon.style.display = 'block';

    daejeonwind.style.display = 'none';
    daejeonwindicon.style.display = 'none';
    dae.style.display = 'block';
    daeicon.style.display = 'block';

    busanwind.style.display = 'none';
    busanwindicon.style.display = 'none';
    busan.style.display = 'block';
    busanicon.style.display = 'block';
    
    gwangjuwind.style.display = 'none';
    gwangjuwindicon.style.display = 'none';
    gwangju.style.display = 'block';
    gwangjuicon.style.display = 'block';
    
    gangwonwind.style.display = 'none';
    gangwonwindicon.style.display = 'none';
    gangwon.style.display = 'block';
    gangwonicon.style.display = 'block';

    dokdowind.style.display = 'none';
    dokdowindicon.style.display = 'none';
    dokdo.style.display = 'block';
    dokdoicon.style.display = 'block';

    jejuwind.style.display = 'none';
    jejuwindicon.style.display = 'none';
    jeju.style.display = 'block';
    jejuicon.style.display = 'block';
};

function weather(x, y, area, areawind, areaicon, areawindicon) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET",
        "http://localhost:3000/proxy2?base_date=" + date +
        "&nx=" + x + "&ny=" + y, false);
    xhr.send();
    var arr = JSON.parse(xhr.responseText);

    let sky = arr.response.body.items.item[18].fcstValue;
    let tmp = arr.response.body.items.item[24].fcstValue;
    let rain = arr.response.body.items.item[6].fcstValue;
    let winds = arr.response.body.items.item[48].fcstValue;
    let windspeed = arr.response.body.items.item[54].fcstValue;

    area.innerHTML = tmp + "℃";
    areawind.innerHTML = windspeed + "㎳";

    if (rain == 0) {
        if (sky == 3) {
            areaicon.innerHTML = "<img src='image/semicloud.JPG' width='50px' height='50px'>";
        } else if (sky == 1) {
            areaicon.innerHTML = "<img src='image/sun.JPG' width='50px' height='50px'>";
        } else if (sky == 4) {
            areaicon.innerHTML = "<img src='image/cloud.JPG' width='50px' height='50px'>";
        };
    } else if (rain == 1 || rain == 2 || rain == 5 || rain == 6) {
        areaicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    } else {
        areaicon.innerHTML = "<img src='image/rain.JPG' width='50px' height='50px'>";
    };

    if (winds < 30) {
        areawindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    } else if (winds < 75) {
        areawindicon.innerHTML = "<img src='image/northeast.JPG' width='50px' height='50px'>";
    } else if (winds < 120) {
        areawindicon.innerHTML = "<img src='image/east.JPG' width='50px' height='50px'>";
    } else if (winds < 165) {
        areawindicon.innerHTML = "<img src='image/southeast.JPG' width='50px' height='50px'>";
    } else if (winds < 210) {
        areawindicon.innerHTML = "<img src='image/south.JPG' width='50px' height='50px'>";
    } else if (winds < 255) {
        areawindicon.innerHTML = "<img src='image/southwest.JPG' width='50px' height='50px'>";
    } else if (winds < 300) {
        areawindicon.innerHTML = "<img src='image/west.JPG' width='50px' height='50px'>";
    } else if (winds < 345) {
        areawindicon.innerHTML = "<img src='image/northwest.JPG' width='50px' height='50px'>";
    } else {
       areawindicon.innerHTML = "<img src='image/north.JPG' width='50px' height='50px'>";
    };
};       

weather(55, 38, jeju, jejuwind, jejuicon, jejuwindicon); // 제주
weather(144, 123, dokdo, dokdowind, dokdoicon, dokdowindicon); // 독도
weather(87, 141, gangwon, gangwonwind, gangwonicon, gangwonwindicon); // 강원
weather(59, 74, gwangju, gwangjuwind, gwangjuicon, gwangjuwindicon); // 광주
weather(100, 76, busan, busanwind, busanicon, busanwindicon); // 부산
weather(68, 101, dae, daejeonwind, daeicon, daejeonwindicon); // 대전
weather(62, 126, guii, guiiwind, guiiicon, guiiwindicon); // 구의