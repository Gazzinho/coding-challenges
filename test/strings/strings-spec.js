var expect = require('chai').expect;

describe('Strings', function() {
    describe('#hasAllUniqueChars(str)', function() {
        var str;

        it('returns true when the string has all unique chars', function() {
            str = 'abcd';
            expect(hasAllUniqueChars(str)).to.equal(true);
        });

        it('returns false when the string does NOT have all unique chars', function() {
            str = 'acbcd';
            expect(hasAllUniqueChars(str)).to.equal(false);
        });
    });

    describe('#hasAllUniqueCharsInPlace(str)', function() {
        var str;

        it('returns true when the string has all unique chars', function() {
            str = 'abcd';
            expect(hasAllUniqueCharsInPlace(str)).to.equal(true);
        });

        it('returns false when the string does NOT have all unique chars', function() {
            str = 'acbcd';
            expect(hasAllUniqueCharsInPlace(str)).to.equal(false);
        });
    });
});


function hasAllUniqueChars(str) {
    var chars = {};
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (chars[char]) {
            return false;
        }
        chars[char] = 1;
    }
    return true;
}

function hasAllUniqueCharsInPlace(str) {
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (!isUnique(str, char, i+1)) {
            return false;
        }
    }
    return true;

    function isUnique(str, char, j) {
        for (var k = j; k < str.length; k++) {
            if (str.charAt(k) === char) {
                return false;
            }
        }
        return true;
    }
}
