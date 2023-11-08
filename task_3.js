function findDate(text) {
    return text.match(/\d{4}-\d{2}-\d{2}/gi);
}

let text = 'Hi bro. 2012-11-11 and 2000-01-13';
console.log(findDate(text));


function toCamelCase(text) {
    let words = text.match(/([a-z1-9]+)/g);
    console.log(words);
    return words
        .map((word, index) => index !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
        .join("");
}

console.log(toCamelCase('new_brand_product_'));


function toSnakeCase(text) {
    let words = text.match(/^[a-z0-9]+/g);
    words = [...words, ...text.match(/([A-Z][a-z0-9]+)/g)];
    return words
        .map((word, index) => index !== 0 ? word.charAt(0).toLowerCase() + word.slice(1) : word)
        .join("_");
}

console.log(toSnakeCase('newBrandProduct'));


function findHexColor (text){
    return text.match(/#[A-Fa-f0-9]{3,6}\b/g);
}

console.log(findHexColor("color: #3f3; background-color: #AA00ef;"));