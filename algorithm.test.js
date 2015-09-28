describe("tests are working", function() {
    it("should return true", function() {
        var algo = new Algorithm();
        algo.setTestsAreWorkingStatus(true);
        var result = algo.getTestsAreWorkingStatus();
        var correct = true;
        expect(result).toEqual(correct);
    });
});


describe("breakStringIntoArray", function() {
    it("should break up '123456789' into an array with 3 elements when argument is 3 ", function() {
        var stringToBreakUp = "123456789";
        var nthPosition = 3;
        var algo = new Algorithm();
        var result = algo.breakStringIntoArray(stringToBreakUp, nthPosition);
        var correct = [];
        correct.push("123");
        correct.push("456");
        correct.push("789");
        expect(result).toEqual(correct);
    });
    it("should break up '41122411224112241122411224112241122' into an array with 6 elements when argument is 5", function() {
        var stringToBreakUp = "41122411224112241122411224112241122";
        var nthPosition = 5;
        var algo = new Algorithm();
        var result = algo.breakStringIntoArray(stringToBreakUp, nthPosition);
        var correct = [];
        correct.push("41122");
        correct.push("41122");
        correct.push("41122");
        correct.push("41122");
        correct.push("41122");
        correct.push("41122");
        correct.push("41122");
        expect(result).toEqual(correct);
    });
});

describe("findSumOfStringIntegerArray", function() {
    it("should return 1368 when ['123','456','789'] are used as argument", function() {
        var arrayStringsToAdd = ["123", "456", "789"];
        var algo = new Algorithm();
        var result = algo.findSumOfStringIntegerArray(arrayStringsToAdd);
        var correct = 1368;
        expect(result).toBe(correct);
    });
});
