const mockData = require('../data/mock1.json')
const mariadb = require('mariadb');                            
const uuidv5 = require('uuid/v5');
const uuidNamespace = 'http://www.build360.io'
const pool = mariadb.createPool({host: process.env.DB_HOST,
                                 user: process.env.DB_USER,
                                 password: process.env.DB_PASS, 
                                 connectionLimit: 5});
                                 
exports.GetBuilders = function(){
    pool.getConnection()
        .then(conn => {
        
          conn.query("SELECT * from builder.builderEntity")
            .then((res) => {
              console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
              conn.end();
              return res;
            })
            .catch(err => {
              //handle error
              conn.end();
              return err;
            })
            
        }).catch(err => {
          //not connected
          return err;
        });
}

exports.GetBuilderByName = function(builderName){
    pool.getConnection()
        .then(conn => {        
            conn.query("SELECT * from builder.builderEntity where CompanyName= ?",[builderName])
            .then((rows) => {
              console.log(rows); //[ {val: 1}, meta: ... ]
              conn.end();
              return rows;
            })
            .catch(err => {
              //handle error
              conn.end();
              return err;
            })
            
        }).catch(err => {
          //not connected
          return err;
        });
}

exports.GetBuilderById = function(builderId){
    return mockData;
}

exports.InsertBuilder = function(builderName,
                                 builderOwner,
                                 builderBBBRating,
                                 builderAssociations){
    pool.getConnection()
    .then(conn => {
        var uid  = uuidv5(uuidNamespace, uuidv5.URL);
        var pURI = '/builder/' + uid + '/portfolio/';
        var cURI = '/builder/' + uid + '/contact/';
        var lURI = '/builder/' + uid + '/location/';
        var fURI = '/builder/' + uid + '/feedback/';
        conn.query("INSERT INTO builderEntity (UUID, CompanyName, OwnerName, BBBRating, Associations, PortfolioURI, ContactInfoURI, LocationInfoURI, FeedbackURI) values (?, ?, ?, ?, ?, ?, ?, ?)", 
            [uid,builderName, builderOwner, builderBBBRating, builderAssociations, 
            pURI, cURI, lURI, fURI])
        .then((res) => {
            console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
            conn.end();
        })
        .catch(err => {
            //handle error
            conn.end();
        })        
    }).catch(err => {
        //not connected
    });
}