'use strict'

const textareaHeight = document.querySelector(".textarea");

textareaHeight.addEventListener("input", () => {
    textareaHeight.style.height = 0;
    textareaHeight.style.height = textareaHeight.scrollHeight + "px";
})

textareaHeight.addEventListener('focus', (event) => {
    event.target.innerText = ''
})

textareaHeight.addEventListener('blur', (event) => {
    if (event.target.innerHTML.length == 0) {
        event.target.innerText = "Message"
    }
})