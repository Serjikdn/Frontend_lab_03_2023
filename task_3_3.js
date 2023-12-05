function toSnakeCase(text) {
    let words = text.match(/^[a-z0-9]+/g);
    words = [...words, ...text.match(/([A-Z][a-z0-9]+)/g)];
    return words
        .map((word, index) => index !== 0 ? word.charAt(0).toLowerCase() + word.slice(1) : word)
        .join("_");
}

console.log(toSnakeCase('newBrandProduct'));
