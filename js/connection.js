'use strict';

class connection {
    static get try () {
        return 81;
    }
}

var xmlHttp = window.XMLHttpRequest !== undefined ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
