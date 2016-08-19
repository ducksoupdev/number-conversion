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

        for (var num in expected) {
            if (expected.hasOwnProperty(num)) {
                it("should convert " + num + " to " + expected[num], function () {
                    expect(wordConversion.convert(num)).toEqual(expected[num]);
                });
            }
        }
    });
});
