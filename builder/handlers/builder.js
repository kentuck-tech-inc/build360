const mockData = require('../data/mock1.json')
const mariadb = require('mariadb');                            
const uuidv5 = require('uuid/v5');
const uuidv4 = require('uuid/v4');

const uuidNamespace = process.env.APP_GUID;

console.log('DB_HOST - ' + process.env.DB_HOST);

const pool = mariadb.createPool({host: process.env.DB_HOST,
                                 user: process.env.DB_USER,
                                 password: process.env.DB_PASS, 
                                 connectionLimit: 5});
  /**
   * @swagger
   * definitions:
   *   builder:
   *     properties:
   *       UUID:
   *         type: string
   *       CompanyName:
   *         type: string
   *       Owner:
   *         type: string
   *       Associations:
   *         type: array
   *         items:
   *          type: string
   *       Description:
   *         type: string
   *       bbbRating:
   *         type: string
   *       portfolioURI:
   *         type: string
   *       contactURI:
   *         type: string
   *       feebackURI:
   *         type: string
   *       locationURI:
   *         type: string
   *       contactInfo:
   *        $ref: '#/definitions/Contact'
   *       feedback:
   *        $ref: '#/definitions/Feedback'
   *       portfolio:
   *        $ref: '#/definitions/Portfolio'
   *       location:
   *        $ref: '#/definitions/Location'
   */                                 
const builder = {
  UUID : "",
  CompanyName : "",
  Owner : "",
  Associations : [],
  Description : "",
  bbbRating : "",
  portfolioURI : "",
  contactURI:"",
  feedbackURI:"",
  locationURI:"",

  contactInfo: null,
  feedback:null,
  portfolio:null,
  location:null
}

const kvp = {
  key : "",
  value: ""
}

const feedback = {
  BuilderUUID:"",
       CommunicationPercent:0.0,
       ProfessionalismPercent:0.0,
       JobSiteCleanlinessPercent:0.0,
       BudgetMindfulPercent:0.0,
       QualityOfMaterialPercent:0.0,
       DeadlinesPercent:0.0,
       QualityOfWorkmanshipPercent:0.0,
       FinishedProductPercent:0.0,
       AccuracyOfQuoteAllowancePercent:0.0,
       OverallPercent:0.0
}

const locations = {
  BuilderUUID="",
       AddressLine1="",
       AddressLine2="",
       AddressLine3="",
       AddressLine4="",
       City="",
       State="",
       Zip5=12345,
       Zip4=1234
}

function mapRowToBuilder(builderRow){
  var b = null;

  var b = Object.create(builder)
                b.CompanyName = res.CompanyName;
                b.UUID = res.UUID;
                b.Owner = res.OwnerName;
                b.Associations = res.Associations.split(",");
                b.Description = res.Description;
                b.bbbRating = res.BBBRating;

                b.portfolioURI = "/builder/" + b.UUID  + "/po servicingZipcode mediumint unsignedrtfolio";
                b.contactURI = "/builder/" + b.UUID  + "/contact";
                b.feedbackURI = "/builder/" + b.UUID  + "/feedback";
                b.location = "/builder/" + b.UUID  + "/location";

  return b;
}

/**
 * @swagger
 * /builders/{zip}:
 *   get:
 *     description: Returns all builders that work in a given zip code
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 */                        
exports.GetBuildersByZipcode = function(zipcode=40272){
  return pool.getConnection()
        .then(conn => {
        
          conn.query("SELECT * from builder.servicingZipcodes inner join builder.builderEntity on builder.servicingZipcodes.builderUUID = builder.builderEntity.builderUUID  where zipcode=(?)",[zipcode])
            .then((res) => {
              var builders = [];
              console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
              conn.end();

              res.forEach(element => {
                var b = mapRowToBuilder(element);
                builders.push(b);
              });

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

/**
 * @swagger
 * /builders/:
 *   get:
 *     description: Returns all builders
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 */  
exports.GetBuilders = function(){
  return pool.getConnection()
        .then(conn => {
        
          conn.query("SELECT * from builder.builderEntityccc")
            .then((res) => {
              var builders = [];
              console.log(res);
              conn.end();

              res.forEach(element => {
                var b = mapRowToBuilder(element);

                builders.push(b);
              });

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

/**
 * @swagger
 * /builders/{builderUUID}:
 *   get:
 *     description: Returns builder of a given id
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 */  
exports.GetBuilderByUUID = function(builderUUID){
  console.log('builder.getBuilderByUUID entered');
  return pool.getConnection()
    .then(conn => {    
        console.log('builder.GetBuilderByUUID - ' + builderUUID);    
        conn.query("SELECT hex(UUID) as UUID, CompanyName, OwnerName, BBBRating, Associations, PortfolioURI, ContactInfoURI, LocationInfoURI, FeedbackURI from builder.builderEntity where UUID=unhex(?)",[builderUUID])
        .then((rows) => {
          console.log(rows); //[ {val: 1}, meta: ... ]

          var b = mapRowToBuilder(rows[0]);
          console.log(b);

          conn.end();
          return rows;
        })
        .catch(err => {
          //handle error
          conn.end();
          console.log(err);
          return err;
        })
        
    }).catch(err => {
      //not connected
      console.log(err);
      return err;
    });
}

exports.GetBuilderByName = function(builderName, convertToUUID=false){
  return pool.getConnection()
        .then(conn => {     
            if(convertToUUID){  
              var uid  = uuidv5(builderName.toLowerCase().replace(/\s+/g, ''), uuidNamespace).replace(/-/gi,'');
              conn.query("SELECT * from builder.builderEntity where UUID= unhex(?)",[uid])
              .then((rows) => {
                console.log(rows); //[ {val: 1}, meta: ... ]
                var b = mapRowToBuilder(rows[0]);
                console.log(b);

                conn.end();
                return rows;
              })
              .catch(err => {
                //handle error
                conn.end();
                return err;
              })
            }
            else{  
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
          }
        }).catch(err => {
          //not connected
          return err;
        });
}


/**
 * @swagger
 * /builder/{id}/contact:
 *   get:
 *     description: Returns builder contact info
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 */  
exports.GetBuilderContact = function(builderUUID){
  console.log('builder.GetBuilderContact entered');
  return pool.getConnection()
    .then(conn => {    
        console.log('builder.GetBuilderContact - ' + builderUUID);    
        conn.query("SELECT * from builder.builderContact where UUID=unhex(?)",[builderUUID])
        .then((rows) => {
          var contacts = [];
          console.log(rows); //[ {val: 1}, meta: ... ]

          rows.forEach(element => {
            var b = Object.create(kvp)
            b.key = element.ContactMethod;
            b.value = element.Value;
            console.log(b);
            contacts.push(b);
          });

          conn.end();
          return contacts;
        })
        .catch(err => {
          //handle error
          conn.end();
          console.log(err);
          return err;
        })
        
    }).catch(err => {
      //not connected
      console.log(err);
      return err;
    });
}


/**
 * @swagger
 * /builder/{id}/feedback:
 *   get:
 *     description: Returns builder feedback
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 */  
exports.GetBuilderFeedback = function(builderUUID){
  console.log('builder.GetBuilderFeedback entered');
  return pool.getConnection()
    .then(conn => {    
        console.log('builder.GetBuilderFeedback - ' + builderUUID);    
        
        conn.query("SELECT * from builder.builderFeedback where UUID=unhex(?)",[builderUUID])
        .then((rows) => {
          var feedback = [];
          console.log(rows); //[ {val: 1}, meta: ... ]

          rows.forEach(element => {
            var b = Object.create(feedback);

            b.BuilderUUID = element.BuilderUUID;
            b.CommunicationPercent = element.CommunicationPercent;
            b.ProfessionalismPercent = element.ProfessionalismPercent;
            b.JobSiteCleanlinessPercent = element.JobSiteCleanlinessPercent;
            b.BudgetMindfulPercent = element.BudgetMindfulPercent;
            b.QualityOfMaterialPercent = element.QualityOfMaterialPercent;
            b.DeadlinesPercent = element.DeadlinesPercent;
            b.QualityOfWorkmanshipPercent = element.QualityOfWorkmanshipPercent;
            b.FinishedProductPercent = element.FinishedProductPercent;
            b.AccuracyOfQuoteAllowancePercent = element.AccuracyOfQuoteAllowancePercent;
            b.OverallPercent = element.OverallPercent;

            console.log(b);
            feedback.push(b);
          });

          conn.end();
          return feedback;
        })
        .catch(err => {
          //handle error
          conn.end();
          console.log(err);
          return err;
        })
        
    }).catch(err => {
      //not connected
      console.log(err);
      return err;
    });
}

/**
 * @swagger
 * /builder/{id}/location:
 *   get:
 *     description: Returns builder locations
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 */  
exports.GetBuilderLocation = function(builderUUID){
  console.log('builder.GetBuilderLocation entered');
  return pool.getConnection()
    .then(conn => {    
        console.log('builder.GetBuilderLocation - ' + builderUUID);    
        
        conn.query("SELECT * from builder.builderLocations where UUID=unhex(?)",[builderUUID])
        .then((rows) => {
          var locs = [];
          console.log(rows); //[ {val: 1}, meta: ... ]

          rows.forEach(element => {
            var b = Object.create(locations);

            b.BuilderUUID=element.BuilderUUID;
            b.AddressLine1=element.AddressLine1;
            b.AddressLine2=element.AddressLine2;
            b.AddressLine3=element.AddressLine3;
            b.AddressLine4=element.AddressLine4;
            b.City=element.City;
            b.State=element.State;
            b.Zip5=element.Zip5;
            b.Zip4=elemtn.Zip4;

            console.log(b);
            locs.push(b);
          });

          conn.end();
          return locs;
        })
        .catch(err => {
          //handle error
          conn.end();
          console.log(err);
          return err;
        })
        
    }).catch(err => {
      //not connected
      console.log(err);
      return err;
    });
}

exports.InsertBuilder = function(builderName="",
                                 builderOwner,
                                 builderBBBRating,
                                 builderAssociations=""){
  return  pool.getConnection()
    .then(conn => {
        console.log('builder.InsertBuilder starting');
        var uid  = uuidv5(builderName.toLowerCase().replace(/\s+/g, ''), uuidNamespace).replace(/-/gi,'');
        console.log('builder UUID generated - ' + uid);
        var pURI = '/builder/' + uid + '/portfolio/';
        var cURI = '/builder/' + uid + '/contact/';
        var lURI = '/builder/' + uid + '/location/';
        var fURI = '/builder/' + uid + '/feedback/';
        
        conn.query("INSERT INTO builder.builderEntity (UUID, CompanyName, OwnerName, BBBRating, Associations, PortfolioURI, ContactInfoURI, LocationInfoURI, FeedbackURI) values (unhex(?), ?, ?, ?, ?, ?, ?, ?, ?)", 
            [uid,builderName, builderOwner, builderBBBRating, builderAssociations, 
            pURI, cURI, lURI, fURI])
        .then((res) => {
            console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
            conn.end();
            return uid;
        })
        .catch(err => {
            //handle error
            console.log(err);
            conn.end();
        })        
    }).catch(err => {
        console.log(err);s
        //not connected
    });
}