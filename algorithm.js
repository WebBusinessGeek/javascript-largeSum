function Algorithm() {
    this.testsAreWorkingStatus = false;

    this.setTestsAreWorkingStatus = function(value) {
        if(value == true || value == false) {
            this.testsAreWorkingStatus = value;
        }
    };

    this.getTestsAreWorkingStatus = function() {
        return this.testsAreWorkingStatus;
    };

    this.breakStringIntoArray = function(stringToBreakUp, nthPosition) {
        var returnValue = [];
        for (var i = 0; i < stringToBreakUp.length; i += nthPosition) {
            returnValue.push(stringToBreakUp.substring(i, i + nthPosition));
        }
        return returnValue;
    };

    this.findSumOfStringIntegerArray = function(arrayWithStringsToSum) {
        returnValue = 0;
        for(var i = 0; i < arrayWithStringsToSum.length; i++) {
            returnValue += parseInt(arrayWithStringsToSum[i]);
        }
        return returnValue;
    }



}