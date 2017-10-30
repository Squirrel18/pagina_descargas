'use strict';

function makeMessages(type, text) {
    if(!(document.querySelector(".messages"))) {
        var messagesElement = document.createElement("div");
        var textMessages = document.createElement("p");
        messagesElement.className = "messages";
        document.querySelector("body").insertBefore(messagesElement, document.querySelector("body").childNodes[0]);
        messagesElement.appendChild(textMessages);
        messagesElement.classList.add(type);
        textMessages.innerText = text;
        callBackDeleteMessages();
    }
}

function callBackDeleteMessages() {
    var bodyElement = document.querySelector("body");
    var e =  document.querySelector(".messages");
    setTimeout(function() {
        e.style.WebkitAnimation = 'messagesClose 750ms ease-in-out forwards';
        e.style.animation = 'messagesClose 750ms ease-in-out forwards';
    }, 5500);
    setTimeout(function() {
        bodyElement.removeChild(e);
    }, 6250);
}


