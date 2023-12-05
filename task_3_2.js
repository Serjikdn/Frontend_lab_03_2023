function toCamelCase(text) {
    let words = text.match(/([a-z1-9]+)/g);
    console.log(words);
    return words
        .map((word, index) => index !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
        .join("");
}

console.log(toCamelCase('new_brand_product_'));
