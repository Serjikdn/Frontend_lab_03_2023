function addZero(number) {
    return number.toString().padStart(2, '0');
}

function showCurrentDate() {
    const months = [
        "січня", "лютого", "березня", "квітня", "травня", "червня",
        "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
    ];
    const daysOfWeek = [
        "Понеділок", "Вівторок", "Середа",
        "Четвер", "П'ятниця", "Субота", "Неділя"
    ];
    const tag = document.querySelector('#dateNow');
    const currentDate = new Date();

    const day = currentDate.getDay();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const hours = addZero(currentDate.getHours());
    const minutes = addZero(currentDate.getMinutes());
    const seconds = addZero(currentDate.getSeconds());

    const stringDate = `Date: ${addZero(day)} ${month} ${year} року`
    const stringDay = `Day: ${daysOfWeek[day]}`
    const stringTime = `Time: ${hours}:${minutes}:${seconds}`
    tag.innerHTML = `${stringDate}<br>${stringDay}<br>${stringTime}`;
}

function calcDate(text) {
    const incoming = text.split(/[./]/g);
    const currentDate = new Date();
    const incomingDate = new Date(`${incoming[2]}.${incoming[1]}.${incoming[0]}`);
    const difference = Math.floor((currentDate.getTime() - incomingDate.getTime()) / 86400000);

    if (difference === 0) {
        return 'Today';
    } else if (difference === 1) {
        return 'Yesterday';
    } else if (difference >= 2 && difference <= 6) {
        return `${Math.round(difference)} days ago`;
    } else if (difference === 7) {
        return 'One week ago';
    } else if (difference >= 365 && difference <= 366) {
        return 'One year ago';
    } else {
        const year = incomingDate.getFullYear();
        const month = addZero(incomingDate.getMonth() + 1);
        const day = addZero(incomingDate.getDate());
        return `${year}.${month}.${day}`;
    }
}

console.log(calcDate('07/11/2023'));
console.log(calcDate('03.11.2023'));
console.log(calcDate('31/10/2023'));
console.log(calcDate('07/11/2022'));
console.log(calcDate('07/11/2021'));