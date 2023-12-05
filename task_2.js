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
