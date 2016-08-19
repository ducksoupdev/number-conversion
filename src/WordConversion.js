function WordConversion() {
    this.value = -1;
    this.text = null;
}

function _convertNumber(num) {
    var singleDigitWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return singleDigitWords[num];
}

WordConversion.prototype.convert = function(num) {
    this.value = num;
    this.text = _convertNumber(num);
    return this.text;
};