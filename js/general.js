'use strict';

var link_download;
var code_download;
var textSubTitle;

function fillData(jsonData) {

    if(!isAvailable(jsonData)) {
        alert("No available");
        return;
    }

    var title_element = document.querySelector("#title");
    var subTitle_element = document.querySelector("#subTitle");
    var body_element = document.querySelector("body");
    var leftPanel_element = document.querySelector(".cont-elements");
    var svgCloud_element = document.querySelector(".svgCloud");
    var input_element = document.querySelector("#inputPass");

    title_element.innerText = jsonData.data_1;
    subTitle_element.innerText = jsonData.data_2;
    body_element.style.background = jsonData.data_4;
    svgCloud_element.style.fill = jsonData.data_5;
    input_element.style.color = jsonData.data_5;
    input_element.style.borderColor = jsonData.data_5;

    for(var i = 0; i < leftPanel_element.children.length; i++) {
        leftPanel_element.children[i].style.color = jsonData.data_5;
    }

    var image_background = new Image();
    image_background.src = jsonData.data_3;
    image_background.onload = function() {
        document.querySelector("#contRight").style.backgroundImage = "url(" + jsonData.data_3 + ")";
        document.querySelector(".load").style.display = "none";
        document.querySelector("#cont").style.display = "block";
    };
}

function isAvailable(jsonData) {
    var i = 0;
    for(var elements in jsonData) {
        if(i >= 5 && i <= 8) {
            if(elements === checkPlatform()) {
                if(jsonData[elements] === '') {
                    return false;
                } else {
                    link_download = jsonData[elements];
                    code_download = jsonData.data_10;
                    textSubTitle = jsonData.data_2;
                    alert("Available");
                    return true;
                }
            }
        }
        i++;
    }
}

function downloadAction() {
    var inputField = document.querySelector("#inputPass");
    var pattHttp = /http/i;

    if(inputField.value === '') {
        alert("campo vacío");
        return;
    } else if(inputField.value === code_download) {
        alert("MATCH");
        var temporalLink = document.createElement("a");
        temporalLink.setAttribute("href", link_download);
        if(pattHttp.test(link_download)) {
            alert("http");
            temporalLink.setAttribute("target", "_self");
        } else {
            temporalLink.setAttribute("download", textSubTitle + ".zip");
            alert("download");
        }
        temporalLink.click();
    } else {
        alert("No match");
        return
    }
}

