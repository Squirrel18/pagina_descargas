'use strict';

function makeMessages(type, text) {
    if(!(document.querySelector(".messages"))) {
        var messagesElement = document.createElement("div");
        var textMessages = document.createElement("p");
        var closeIcon = "<img src='assets/delete.svg' class='closeMessage' onclick='closeMessage(this)'>";
        messagesElement.className = "messages";
        messagesElement.innerHTML = closeIcon;
        document.querySelector("body").insertBefore(messagesElement, document.querySelector("body").lastChild);
        messagesElement.appendChild(textMessages);
        messagesElement.classList.add(type);
        textMessages.innerText = text;
        //callBackDeleteMessages();
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

function closeMessage(element) {
    var bodyElement = document.querySelector("body");
    var parentElement = element.parentNode;
    parentElement.style.WebkitAnimation = 'messagesClose 750ms ease-in-out forwards';
    parentElement.style.animation = 'messagesClose 750ms ease-in-out forwards';
    setTimeout(function() {
        bodyElement.removeChild(parentElement);
    }, 750);
}
