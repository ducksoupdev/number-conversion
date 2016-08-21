var WordConversion = (function () {

    var singleDigitWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    var tenWords = [null, null, "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    function WordConversion() {
        this.value = -1;
        this.text = null;
    }

    function convertNumber(num) {
        var str = null;
        if (num == null) return str;
        if (typeof num === "string") num = parseInt(num, 10);

        if (num <= 20) {
            str = singleDigitWords[num];
        } else if (num >= 21 && num <= 99) {
            str = formatTens(num);
        } else if (num >= 100 && num <= 999) {
            str = formatHundreds(num);
        } else {
            str = formatThousands(num);
        }

        return str;
    }

    function formatTens(num) {
        var ten = nearestTen(num);
        var str = tenWords[firstDigit(ten)];

        if (ten !== num) {
            var unit = num - ten;
            str += " " + singleDigitWords[unit];
        }

        return str;
    }

    function formatHundreds(num) {
        var hundred = nearestHundred(num);
        var str = singleDigitWords[firstDigit(hundred)] + " hundred";

        if (hundred !== num) {
            var ten = num - hundred;
            str += " and " + formatTens(ten);
        }

        return str;
    }

    function formatThousands(num) {
        var nearThousand = nearestThousand(num);
        var thousand = firstDigit(nearThousand);
        var str = singleDigitWords[thousand];

        if (nearThousand >= 10000) {
            thousand = firstTwoDigits(nearThousand);
            if (thousand > 20) {
                str = formatTens(thousand);
            } else {
                str = singleDigitWords[thousand];
            }
        }

        str += " thousand";

        if (nearThousand !== num) {
            var hundred = num - nearThousand;
            str += " " + formatHundreds(hundred);
        }

        return str;
    }

    function nearestTen(num) {
        return Math.floor(num / 10) * 10;
    }

    function nearestHundred(num) {
        return Math.floor(num / 100) * 100;
    }

    function nearestThousand(num) {
        return Math.floor(num / 1000) * 1000;
    }

    function firstDigit(num) {
        return parseInt(num.toString().split("")[0], 10);
    }

    function firstTwoDigits(num) {
        return parseInt(num.toString().split("").slice(0, 2).join(""), 10);
    }

    WordConversion.prototype.convert = function (num) {
        this.value = num;
        this.text = convertNumber(num);
        return this.text;
    };

    return WordConversion;
})();


