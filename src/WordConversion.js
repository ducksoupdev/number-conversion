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
        return format(num);
    }

    function format(num) {
        var str = null;
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
        var ten = nearest(num, 10);
        var str = tenWords[first(ten, 1)];

        if (ten !== num) {
            var unit = num - ten;
            str += " " + singleDigitWords[unit];
        }

        return str;
    }

    function formatHundreds(num) {
        var hundred = nearest(num, 100);
        var str = singleDigitWords[first(hundred, 1)] + " hundred";

        if (hundred !== num) {
            var ten = num - hundred;
            str += " and " + formatTens(ten);
        }

        return str;
    }

    function formatThousands(num) {
        var nearThousand = nearest(num, 1000);
        var thousand = first(nearThousand, 1);
        var str = singleDigitWords[thousand];

        if (nearThousand >= 10000 && nearThousand < 100000) {
            thousand = first(nearThousand, 2);

            if (thousand > 20) {
                str = formatTens(thousand);
            } else {
                str = singleDigitWords[thousand];
            }
        } else if (nearThousand >= 100000) {
            thousand = first(nearThousand, 3);
            str = formatHundreds(thousand);
        }

        str += " thousand";

        if (nearThousand !== num) {
            var remainder = num - nearThousand;
            var remainderStr = "";
            if (remainder <= 99) remainderStr = "and ";
            str += " " + remainderStr + format(remainder);
        }

        return str;
    }

    function nearest(num, unit) {
        return Math.floor(num / unit) * unit;
    }

    function first(num, digits) {
        return parseInt(num.toString().split("").slice(0, digits).join(""), 10);
    }

    WordConversion.prototype.convert = function (num) {
        this.value = num;
        this.text = convertNumber(num);
        return this.text;
    };

    return WordConversion;
})();


