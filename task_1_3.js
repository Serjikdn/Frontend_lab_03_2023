function createHeaders(number) {
    const div = document.querySelector('#task13');
    for (let item = 1; item <= number; item++) {
        let header = document.createElement('h2');
        header.textContent = 'Header' + item;
        div.appendChild(header);
    }
}

createHeaders(8);



