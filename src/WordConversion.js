var WordConversion = (function () {

    function WordConversion() {
        this.value = -1;
        this.text = null;
    }

    function convertNumber(num) {
        var str = null;
        if (num == null) return str;
        if (typeof num === "string") num = parseInt(num, 10);

        var singleDigitWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
        var tenWords = [null, null, "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];

        if (num <= 20) {
            str = singleDigitWords[num];
        } else {
            var ten = nearestTen(num);

            str = tenWords[firstDigit(ten)];

            if (ten !== num) {
                var unit = num - ten;
                str += " " + singleDigitWords[unit];
            }
        }

        return str;
    }

    function nearestTen(num) {
        return Math.floor(num / 10) * 10;
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


