function findDate(text) {
    return text.match(/\d{4}-\d{2}-\d{2}/gi);
}

let text = 'Hi bro. 2012-11-11 and 2000-01-13';
console.log(findDate(text));


function toCamelCase(text){

}