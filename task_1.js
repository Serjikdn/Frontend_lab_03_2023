function showText(text, fontSize) {
    const div = document.querySelector('#task11');
    div.style.fontSize = fontSize + "px";
    div.textContent = text;
}

let text = "That we're business partners"
showText(text, 25)

function createTable(...text) {
    const div = document.querySelector('#task12');
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    let count = 1;


    for (let item of text) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');

        cell1.textContent = count;
        cell1.style = 'border: 1px solid black; padding: 10px';
        cell2.textContent = item;
        cell2.style = 'width: 400px; border: 1px solid black; padding: 10px;';
        row.appendChild(cell1);
        row.appendChild(cell2);
        tbody.appendChild(row);
        count++;
    }
    table.style.borderCollapse = "collapse";
    table.appendChild(tbody);
    div.appendChild((table));
}

createTable('i', 'like', 'learn', 'JavaScript');

function createHeaders(number) {
    const div = document.querySelector('#task13');
    for (let item = 1; item <= number; item++) {
        let header = document.createElement('h2');
        header.textContent = 'Header' + item;
        div.appendChild(header);
    }
}

createHeaders(8);

function dataAnalyzer(...data){
    let sum = 0;
    let string = '';
    for (let item of data){
        if (parseFloat(item)){
            sum += parseFloat(item);
        } else {
            string === ''? string = item: string += ' ' + item;
        }
    }
    return [sum, string]
}
let testData = dataAnalyzer(8, 'Hello', 33, 'World', -5, '!')
console.log(`Sum = ${testData[0]}\nString: ${testData[1]}`)


