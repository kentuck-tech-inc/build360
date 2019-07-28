"use strict";

var assert = require('assert');
var builder = require('../handlers/builder')

describe('Easy test', function() {
    it('true should be true', function () {
        console.log("test hit")
        assert.equal(1,1);
    })
});

describe('BuilderByIdGET', function(){
    it('should return mock1.json', function(){
        var s = builder.GetBuilderById();
        console.log(s);
        assert.notEqual(null, s);
    })
})