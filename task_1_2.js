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



