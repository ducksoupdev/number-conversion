describe("Word conversion", function () {
    var wordConversion;

    beforeEach(function () {
        wordConversion = new WordConversion();
    });

    it("should have an empty value", function () {
        expect(wordConversion.value).toEqual(-1);
    });

    it("should have no text", function () {
        expect(wordConversion.text).toBeNull();
    });

    describe("converting up to 20", function () {
        var expected = {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
            20: "twenty"
        };

        function assertConversion(num) {
            it("should convert " + num + " to " + expected[num], function () {
                expect(wordConversion.convert(num)).toEqual(expected[num]);
            });
        }

        for (var num in expected) {
            if (expected.hasOwnProperty(num)) {
                assertConversion(num);
            }
        }
    });

    describe("converting tens", function () {
        var expected = {
            21: "twenty one",
            25: "twenty five",
            29: "twenty nine",
            30: "thirty",
            33: "thirty three",
            38: "thirty eight",
            44: "fourty four",
            47: "fourty seven",
            62: "sixty two",
            77: "seventy seven",
            80: "eighty",
            90: "ninety",
            99: "ninety nine"
        };

        function assertConversion(num) {
            it("should convert " + num + " to " + expected[num], function () {
                expect(wordConversion.convert(num)).toEqual(expected[num]);
            });
        }

        for (var num in expected) {
            if (expected.hasOwnProperty(num)) {
                assertConversion(num);
            }
        }
    });

    describe("converting hundreds", function () {
        var expected = {
            121: "one hundred and twenty one",
            125: "one hundred and twenty five",
            129: "one hundred and twenty nine",
            200: "two hundred",
            230: "two hundred and thirty",
            333: "three hundred and thirty three",
            438: "four hundred and thirty eight",
            544: "five hundred and fourty four",
            547: "five hundred and fourty seven",
            600: "six hundred",
            662: "six hundred and sixty two",
            850: "eight hundred and fifty",
            877: "eight hundred and seventy seven",
            780: "seven hundred and eighty",
            890: "eight hundred and ninety",
            999: "nine hundred and ninety nine"
        };

        function assertConversion(num) {
            it("should convert " + num + " to " + expected[num], function () {
                expect(wordConversion.convert(num)).toEqual(expected[num]);
            });
        }

        for (var num in expected) {
            if (expected.hasOwnProperty(num)) {
                assertConversion(num);
            }
        }
    });
    
    describe("converting thousands", function () {
        var expected = {
            1000: "one thousand",
            1121: "one thousand one hundred and twenty one",
            1125: "one thousand one hundred and twenty five",
            1129: "one thousand one hundred and twenty nine",
            2200: "two thousand two hundred",
            1230: "one thousand two hundred and thirty",
            2333: "two thousand three hundred and thirty three",
            1438: "one thousand four hundred and thirty eight",
            4544: "four thousand five hundred and fourty four",
            5547: "five thousand five hundred and fourty seven",
            6000: "six thousand",
            5662: "five thousand six hundred and sixty two",
            8850: "eight thousand eight hundred and fifty",
            7877: "seven thousand eight hundred and seventy seven",
            7780: "seven thousand seven hundred and eighty",
            8900: "eight thousand nine hundred",
            9999: "nine thousand nine hundred and ninety nine",
            10000: "ten thousand",
            11999: "eleven thousand nine hundred and ninety nine",
            13780: "thirteen thousand seven hundred and eighty",
            15850: "fifteen thousand eight hundred and fifty",
            17662: "seventeen thousand six hundred and sixty two",
            18200: "eighteen thousand two hundred",
            19000: "nineteen thousand",
            19999: "nineteen thousand nine hundred and ninety nine"
        };

        function assertConversion(num) {
            it("should convert " + num + " to " + expected[num], function () {
                expect(wordConversion.convert(num)).toEqual(expected[num]);
            });
        }

        for (var num in expected) {
            if (expected.hasOwnProperty(num)) {
                assertConversion(num);
            }
        }
    });
});
