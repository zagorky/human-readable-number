let numbersName1 = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
let numbersName2 = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
let numbersName3 = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];
let remainsFromTen = number % 10;
let remainsFromHundred = number % 100;

module.exports = function toReadable(number) {
    number = number.toString();

    if (number.length === 1) {
        return numbersName1[number];
    } else if (number.length === 2) {
        return convertNumberToDozens(number);
    } else return convertNumberToHundreds(number);
};

function convertNumberToDozens(number) {
    if (number < 20 && number >= 10) {
        return numbersName2[number % 10];
    } else if (number >= 20) {
        return number % 10 == 0
            ? numbersName3[Math.floor(number / 10)]
            : numbersName3[Math.floor(number / 10)] +
                  " " +
                  numbersName1[remainsFromTen];
    }
}

function convertNumberToHundreds(number) {
    if (number < 1000 && number >= 100) {
        return remainsFromHundred === 0
            ? `${numbersName1[Math.floor(number / 100)]} hundred `
            : `${
                  numbersName1[Math.floor(number / 100)]
              } hundred ${convertNumberToDozens(remainsFromHundred)}`;
    }
}
