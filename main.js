let one = "Welcome to my lab! Student of ZIPZ-22-1 group. Serhii Horshkov. Glory to Ukraine";
let two = "Для виконання коду програми натисніть на потрібне завдання після чого результат може бути на сторінкі або в консолі.";
const stringLine = document.querySelector("#myLine");
stringLine.textContent = one;
let switcher = 'one';

function assignValue() {
    if (switcher == 'two') {
        stringLine.textContent = one
        switcher = 'one'
    } else if (switcher == 'one') {
        stringLine.textContent = two
        switcher = 'two'
    }
}

setInterval(assignValue, 40000);