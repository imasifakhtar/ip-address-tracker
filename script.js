const inputIP = document.querySelector(".input-ip");
const buttonSubmit = document.querySelector(".btn");
const userIP = document.querySelector(".user-ip");
const userLocation = document.querySelector(".user-location");
const userTimezone = document.querySelector(".user-timezone");
const userISP = document.querySelector(".user-isp");
const leafMap = document.querySelector("#map");



// var map = L.map('map').setView([51.505, -0.09], 13);

async function getData(ip) {
    // API KEY LINE
    let data = await response.json();
    console.log(data);
    // console.log(data.as.name);
    userIP.textContent = inputIP.value;
}

function getIP(data) {
    console.log(data)
}

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    getIP(inputIP.value);
    getData(inputIP.value);
})