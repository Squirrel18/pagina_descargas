'use strict';

(function() {
    if(("XMLHttpRequest" in window)) {
        dataRequest();
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

function dataRequest() {
    var xmlRequest = new XMLHttpRequest;
    xmlRequest.onreadystatechange = function() {
        if (xmlRequest.readyState == 4 && xmlRequest.status == 200) {
            alert("request Ok" + xmlRequest.responseText);
        }
    };
    xmlRequest.open("GET", "php/try.php?id_design=" + dataRead() + "", true);
    xmlRequest.send();
}