function addZero(number) {
    return number.toString().padStart(2, '0');
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

console.log(calcDate('28/11/2023'));
console.log(calcDate('03.12.2023'));
console.log(calcDate('31/10/2023'));
console.log(calcDate('04/12/2023'));
console.log(calcDate('05/12/2022'));