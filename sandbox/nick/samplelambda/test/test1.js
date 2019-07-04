"use strict";

var assert = require('assert');
var sampleGET = require('../handlers/sampleGET')

describe('Easy test', function() {
    it('true should be true', function () {
        console.log("test hit")
        assert.equal(1,1);
    })
});

describe('sampleGET', function(){
    it('should return mock1.json', function(){
        var s = sampleGET();
        console.log(s);
        assert.notEqual(null, s);
    })
})