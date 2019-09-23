const mockData = require('../data/mock1.json')


/**
 * @swagger
 * /SampleGet:
 *   get:
 *     tags:
 *       - Puppies
 *     description: Returns all puppies
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 */
exports.SampleGet =function(){
    return mockData;
}

exports.SamplePost = function(){
    return true;
}