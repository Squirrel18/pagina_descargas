'use strict';

(function() {
    dataRequest();
})();

function dataRead() {
    let parameter = document.URL;
    let data = parameter.substring(parameter.lastIndexOf("?") + 1, parameter.length);
    data = parseInt(data);
    return data;
}

function dataRequest() {
    let headersRequest = new Headers({ "Content-Type": "text/plain; charset=utf-8" });

    let initRequest = { method: 'GET', headers: headersRequest, mode: 'same-origin', cache: 'default' };

    const urlWithParameter = 'php/try.php?id_design=' + dataRead();

    let request = new Request(urlWithParameter, initRequest);

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
                fillData(json);
            });
        } else {
            response.text().then(function(noValidResponse) {
                makeMessages("red", "Verificá tú conexión o intenta más tarde");
            });
        }
    }).catch(function(error) {
        makeMessages("red", "Verificá la dirección url");
    });
}
