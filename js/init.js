'use strict';

(function() {

    if(!('body' in document)) {
        alert("body has not been loaded");
        return;
    }

    var scriptRequest = document.createElement("script");
    var scriptDataHandler = document.createElement("script");
    var bodyElement = document.querySelector("body");
    scriptRequest.setAttribute("type", "text/javascript");
    scriptDataHandler.setAttribute("type", "text/javascript");

    if(!('fetch' in window)) {
        alert('Fetch API not found');
        scriptRequest.setAttribute("src", "js/dataXML.js");
    } else {
        alert("Fetch API");
        scriptRequest.setAttribute("src", "js/dataFetch.js");
    }

    scriptDataHandler.setAttribute("src", "js/general.js");

    scriptDataHandler.addEventListener("load", function() {
        bodyElement.appendChild(scriptRequest);
    });

    bodyElement.appendChild(scriptDataHandler);

})();

function checkPlatform() {
    var mobile = new RegExp("iPhone|iPad|Android", "i");
    var desktop = new RegExp("macintosh|windows", "i")
    var isMobile = mobile.test(navigator.userAgent);
    var isDesktop = desktop.test(navigator.userAgent);
    var platform;
    var temp = "";

    if(isDesktop) {
        temp = navigator.userAgent.match(desktop).toString();
        platform = (temp === 'Windows') ? 'windows' : 'mac';
        return platform;
    } else if(isMobile) {
        temp = navigator.userAgent.match(mobile).toString();
        platform = (temp === 'iPhone' || temp === 'iPad') ? 'ios' : 'android';
        return platform;
    }
    return false;
}
