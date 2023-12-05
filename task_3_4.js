function findHexColor (text){
    return text.match(/#[A-Fa-f0-9]{3,6}\b/g);
}

console.log(findHexColor("color: #3f3; background-color: #AA00ef;"));