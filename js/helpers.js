'use strict';

function makeMessages() {
    if(!(document.querySelector(".messages"))) {
        var messagesElement = document.createElement("div");
        var textMessages = document.createElement("p");
        messagesElement.className = "messages";
        textMessages.innerText = "Texto alerta completo pero sin estar completo solo para rellenar";
        document.querySelector("body").insertBefore(messagesElement, document.querySelector("body").childNodes[0]);
        messagesElement.appendChild(textMessages);
        callBackDeleteMessages();
    }
}

function callBackDeleteMessages() {
    var bodyElement = document.querySelector("body");
    var e =  document.querySelector(".messages");
    setTimeout(function() {
        e.style.WebkitAnimation = 'messagesClose 750ms ease-in-out forwards';
        e.style.animation = 'messagesClose 750ms ease-in-out forwards';
    }, 2500);
    setTimeout(function() {
        bodyElement.removeChild(e);
    }, 3250);
}


