const mockData = require('../data/mock1.json')

exports.GetBuilders = function(zipCode){
    return mockData; 
}

exports.GetBuilderByName = function(builderName){
    return mockData;
}

exports.GetBuilderById = function(builderId){
    return mockData;
}