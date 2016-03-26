'use strict';

class RegexSwitch {

    constructor(testValue, returnValue = null, hasMatch = false) {
        this._testValue = testValue;
        this._returnValue = returnValue;
        this._hasMatch = hasMatch;
    }

    handle(regex, returnValue) {
        if (this._hasMatch) {
            return new RegexSwitch(this._testValue, this._returnValue, true);
        } else if (regex.test(this._testValue)) {
            return new RegexSwitch(this._testValue, returnValue, true);
        } else {
            return new RegexSwitch(this._testValue);
        }
    }

    otherwise(defaultValue) {
        if (this._hasMatch) {
            return this._returnValue;
        } else {
            return defaultValue;
        }
    }
}

module.exports = RegexSwitch;