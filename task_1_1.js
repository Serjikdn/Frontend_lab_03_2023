function showText(text, fontSize) {
    const div = document.querySelector('#task11');
    div.style.fontSize = fontSize + "px";
    div.textContent = text;
}

let text = "That we're business partners"
showText(text, 25)



