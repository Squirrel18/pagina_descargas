'use strict';

(function() {
    if(("XMLHttpRequest" in window)) {
        dataRequest(dataCallback);
    } else {
        alert("fuck you");
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
    xmlRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callBack(this);
        } else {
            alert("Error xmlhttp" + this.status);
        }
    };
    xmlRequest.open("GET", "php/try.php?id_design=" + dataRead() + "", true);
    xmlRequest.send();
}

function dataCallback(responseXML) {
     return JSON.parse(responseXML.responseText);
}