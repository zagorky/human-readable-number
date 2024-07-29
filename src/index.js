function toReadable(number) {
    number = number.toString();
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
        "eightteen",
        "nineteen",
    ];
    let numbersName3 = [
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

    if (number.length === 1) {
        return numbersName1[number];
    } else if (number.length === 2) {
        if (number < 20 && number >= 10) {
            return numbersName2[number];
        } else if (number >= 20 && number !== 0) {
            return numbersName2[1] + numbersName1[number];
        } else if (number >= 30 && number !== 0) {
            return numbersName2[2] + numbersName1[number];
        } else if (number >= 40 && number !== 0) {
            return numbersName2[3] + numbersName1[number];
        } else if (number >= 50 && number !== 0) {
            return numbersName2[4] + numbersName1[number];
        } else if (number >= 60 && number !== 0) {
            return numbersName2[5] + numbersName1[number];
        } else if (number >= 70 && number !== 0) {
            return numbersName2[6] + numbersName1[number];
        } else if (number >= 80 && number !== 0) {
            return numbersName2[7] + numbersName1[number];
        } else if (number >= 90 && number !== 0) {
            return numbersName2[8] + numbersName1[number];
        }
    } else if (number.length === 3) {
        if (number[0] == 1 && number < 110) {
            return `${numbersName1[1]} hundred ${numbersName1[number[1]]}`;
        } else if (number >= 110 && number < 120) {
            return `${numbersName1[1]} hundred ${numbersName2[number[2]]}`;
        } else if (number >= 120 && number < 200) {
            return `${numbersName1[1]} hundred ${numbersName3[number[1] - 1]} ${
                numbersName1[2]
            }`;
        } else if (number[0] == 2 && number < 210) {
            return `${numbersName1[1]} hundred ${numbersName1[number[2]]}`;
        } else if (number >= 210 || number < 220) {
            return `${numbersName1[1]} hundred ${numbersName2[number[2]]}`;
        } else if (number >= 220 || number < 300) {
            return `${numbersName1[1]} hundred ${numbersName3[number[1] - 1]} ${
                numbersName1[2]
            }`;
        } else if (number[0] == 3 && number < 310) {
            return `${numbersName1[1]} hundred ${numbersName1[number[2]]}`;
        } else if (number >= 310 || number < 320) {
            return `${numbersName1[1]} hundred ${numbersName2[number[2]]}`;
        } else if (number >= 320 || number < 400) {
            return `${numbersName1[1]} hundred ${numbersName3[number[1] - 1]} ${
                numbersName1[2]
            }`;
        } else if (number[0] == 4 && number < 410) {
            return `${numbersName1[1]} hundred ${numbersName1[number[2]]}`;
        } else if (number >= 410 || number < 420) {
            return `${numbersName1[1]} hundred ${numbersName2[number[2]]}`;
        } else if (number >= 420 || number < 500) {
            return `${numbersName1[1]} hundred ${numbersName3[number[1] - 1]} ${
                numbersName1[2]
            }`;
        } else if (number[0] == 5 && number < 510) {
            return `${numbersName1[1]} hundred ${numbersName1[number[2]]}`;
        } else if (number >= 510 || number < 520) {
            return `${numbersName1[1]} hundred ${numbersName2[number[2]]}`;
        } else if (number >= 520 || number < 600) {
            return `${numbersName1[1]} hundred ${numbersName3[number[1] - 1]} ${
                numbersName1[2]
            }`;
        } else if (number[0] == 6 && number < 610) {
            return `${numbersName1[1]} hundred ${numbersName1[number[2]]}`;
        } else if (number >= 610 || number < 620) {
            return `${numbersName1[1]} hundred ${numbersName2[number[2]]}`;
        } else if (number >= 620 || number < 700) {
            return `${numbersName1[1]} hundred ${numbersName3[number[1] - 1]} ${
                numbersName1[2]
            }`;
        } else if (number[0] == 7 && number < 710) {
            return `${numbersName1[1]} hundred ${numbersName1[number[2]]}`;
        } else if (number >= 710 || number < 720) {
            return `${numbersName1[1]} hundred ${numbersName2[number[2]]}`;
        } else if (number >= 720 || number < 800) {
            return `${numbersName1[1]} hundred ${numbersName3[number[1] - 1]} ${
                numbersName1[2]
            }`;
        } else if (number[0] == 8 && number < 810) {
            return `${numbersName1[1]} hundred ${numbersName1[number[2]]}`;
        } else if (number >= 810 || number < 820) {
            return `${numbersName1[1]} hundred ${numbersName2[number[2]]}`;
        } else if (number >= 820 || number < 900) {
            return `${numbersName1[1]} hundred ${numbersName3[number[1] - 1]} ${
                numbersName1[2]
            }`;
        } else if (number[0] == 9 && number < 910) {
            return `${numbersName1[1]} hundred ${numbersName1[number[2]]}`;
        } else if (number >= 910 || number < 920) {
            return `${numbersName1[1]} hundred ${numbersName2[number[2]]}`;
        } else if (number >= 920 || number < 1000) {
            return `${numbersName1[1]} hundred ${numbersName3[number[1] - 1]} ${
                numbersName1[2]
            }`;
        }
    }
}
