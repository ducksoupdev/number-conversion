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
        } else {
            var hundred = nearestHundred(num);
            str = singleDigitWords[firstDigit(hundred)] + " hundred";

            if (hundred !== num) {
                var ten = num - hundred;
                str += " and " + formatTens(ten);
            }
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

    function nearestTen(num) {
        return Math.floor(num / 10) * 10;
    }
    
    function nearestHundred(num) {
        return Math.floor(num / 100) * 100;
    }

    function firstDigit(num) {
        return num.toString().split("")[0];
    }

    WordConversion.prototype.convert = function (num) {
        this.value = num;
        this.text = convertNumber(num);
        return this.text;
    };

    return WordConversion;
})();


