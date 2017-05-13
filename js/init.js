(function() {

    if(!('body' in document)) {
        alert("body has not been loaded");
        return;
    }

    var scriptElement = document.createElement("script");
    var bodyElement = document.querySelector("body");
    scriptElement.setAttribute("type", "text/javascript");

    if(!('fetch' in window)) {
        alert('Fetch API not found');
        scriptElement.setAttribute("src", "js/dataXml.js");
    } else {
        alert("fetch");
        scriptElement.setAttribute("src", "js/dataFetch.js");
    }

    bodyElement.appendChild(scriptElement);

})();