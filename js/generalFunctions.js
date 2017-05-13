'use strict';

function checkPlatform() {
    let mobile = new RegExp("iPhone|iPad|Android", "i");
    let desktop = new RegExp("macintosh|windows", "i")
    let isMobile = mobile.test(navigator.userAgent);
    let isDesktop = desktop.test(navigator.userAgent);
    let platform;
    console.log(navigator.platform);

    if(isDesktop) {
        let temp = navigator.userAgent.match(desktop).toString();
        platform = (temp === 'Windows') ? 'windows' : 'mac';
        return platform;
    } else if(isMobile) {
        let temp = navigator.userAgent.match(mobile).toString();
        platform = (temp === 'iPhone' || temp === 'iPad') ? 'ios' : 'android';
        return platform;
    }

    /*let platform = isMobile ? navigator.userAgent.match(mobile).toString() : navigator.userAgent.match(desktop).toString();
    platform = platform.toLowerCase();*/
    return false;
}

function fetchData() {

    const parameter = document.URL;
    let data = parameter.substring(parameter.lastIndexOf("?") + 1, parameter.length);
    data = parseInt(data);

    if(Number.isNaN(data)) {
        alert("different");
        return;
    }

    var myHeaders = new Headers({
        "Content-Type": "text/plain; charset=utf-8",
    });

    var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

    const urlWithParameter = 'php/try.php?id_design=' + data;

    let request = new Request(urlWithParameter, myInit);

    fetch(request).then(response => {
        if(response.status >= 400 && response.status < 500) {
            throw Error(response.status);
        }

        if(!response.ok) {
            throw Error(response.status);
        }
        return response;
    }).then(function(response) {
        if(response.headers.get('Content-Type') === "application/json") {
            response.json().then(function(json) {
                fillData(json, true);
            });
        } else {
            response.text().then(function(noValidResponse) {
                alert("No valid data " + noValidResponse);
            });
        }
    }).catch(function(error) {
        alert("problem " + error);
    });
}

let link_download;
let code_download;

function fillData(jsonData, useFetch) {
    if(!useFetch) {
        alert("Fetch has not been used");
        return;
    }

    if(!isAvailable(jsonData)) {
        alert("No available");
        return;
    }

    let title_element = document.querySelector("#title");
    let subTitle_element = document.querySelector("#subTitle");
    let body_element = document.querySelector("body");
    let leftPanel_element = document.querySelector(".cont-elements");
    let svgCloud_element = document.querySelector(".svgCloud");
    let input_element = document.querySelector("#inputPass");

    title_element.innerText = jsonData.data_1;
    subTitle_element.innerText = jsonData.data_2;
    body_element.style.background = jsonData.data_4;
    svgCloud_element.style.fill = jsonData.data_5;
    input_element.style.color = jsonData.data_5;
    input_element.style.borderColor = jsonData.data_5;

    for(let elements of Array.from(leftPanel_element.children)) {
        elements.style.color = jsonData.data_5;
    }

    let image_background = new Image();
    image_background.src = jsonData.data_3;

    image_background.onload = function() {
        document.querySelector("#contRight").style.backgroundImage = `url(${image_background.src})`;
        document.querySelector(".load").style.display = "none";
        document.querySelector("#cont").style.display = "block";
    };
}

function isAvailable(jsonData) {
    let i = 0;
    for(let elements in jsonData) {
        if(i >= 5 && i <= 8) {
            if(elements === checkPlatform()) {
                if(jsonData[elements] === '') {
                    return false;
                } else {
                    link_download = jsonData[elements];
                    code_download = jsonData.data_10;
                    return true;
                }
            }
        }
        i++;
    }
}

function downloadAction() {

    let inputField = document.querySelector("#inputPass");

    if(inputField.value === '') {
        alert("campo vacío");
        return;
    } else if(inputField.value === code_download) {
        alert("MATCH");
        let temporalLink = document.createElement("a");
        temporalLink.setAttribute("href", link_download);
        temporalLink.setAttribute("download", "");
        temporalLink.click();
    } else {
        alert("No match");
        return
    }
}
