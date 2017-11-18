'use strict';

(function() {
    if(("XMLHttpRequest" in window)) {
        dataRequest(dataCallback);
    } else {
        alert("There is not support for XMLHttpRequest");
        return;
    }
})();

function dataRead() {
    var parameter = document.URL;
    var data = parameter.substring(parameter.lastIndexOf("?") + 1, parameter.length);
    data = parseInt(data);
    return data;
}

function dataRequest(callBack) {
    var xmlRequest = new XMLHttpRequest;
    xmlRequest.addEventListener("error", dataRequestFailed, false);
    xmlRequest.onreadystatechange = function() {
        if(this.readyState == 4) {
            if(this.status == 200) {
                callBack(this);
            } else {
                makeMessages("red", "Verificá la dirección url");
            }
        }
    };
    xmlRequest.open("GET", "php/try.php?id_design=" + dataRead() + "", true);
    xmlRequest.send();
}

function dataCallback(responseXML) {
    fillData(JSON.parse(responseXML.responseText));
}

function dataRequestFailed(event) {
    makeMessages("red", "Verificá tú conexión o intenta más tarde");
}
