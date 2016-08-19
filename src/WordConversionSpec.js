describe("Word conversion", function() {
  var wordConversion;

  beforeEach(function() {
    wordConversion = new WordConversion();
  });

  it("should have an empty value", function() {
      expect(wordConversion.value).toEqual(-1);
  });

  it("should have no text", function() {
      expect(wordConversion.text).toBeNull();
  });
});
