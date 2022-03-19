let year = parseInt(prompt('Hãy nhập năm: '));
let isLeapYear = false;

let isDivisibleBy4 = year % 4 == 0;
if (isDivisibleBy4) {
    let isDivisibleBy100 = year % 100 == 0;
    if (isDivisibleBy100) {
        let isDivisibleBy400 = year % 400 == 0;
        if (isDivisibleBy400) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    alert(year + ' ' +'is leap year !');
} else {
    alert(year + ' ' + 'is NOT leap year !');
}