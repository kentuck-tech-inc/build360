'use strict'

const Api = require('claudia-api-builder');
const api = new Api();
var mariadb = require('mariadb');
var {Op, Sequelize } = require('sequelize');

const blueprint = require('./handlers/blueprint')
const healthCheck = require('./handlers/healthcheck')

api.get('/blueprints', () => {
    return new Promise(
        (resolve, reject) => {
            loadDatabase()
            .then((db) => {
                resolve(getBlueprints(db));
            })
            .catch((ex) => {
                reject( `Ok, something went seriously wrong...\n ${ex.message}`);
            });
    });
});

api.get('/blueprints/search', (request) => {
    return new Promise(
        (resolve, reject) => {
            loadDatabase()
            .then((db) => {
                resolve(searchBlueprints(db, request));
            })
            .catch((ex) => {
                reject( `Ok, something went seriously wrong...\n ${ex.message}`);
            });
        }
    );
});

function loadDatabase() {
    var {Op, Sequelize} = require('sequelize');
    return new Promise(
        (resolve, reject) => {
            const db = {};
            const sequelize = new Sequelize(
                'blueprint',
                process.env.DB_USER,
                process.env.DB_PASS,
                {
                    host: process.env.DB_HOST,
                    dialect: 'mariadb',
                    port: process.env.DB_PORT,
                    pool: {
                        max: 5,
                        min: 0,
                        idle: 300
                    }
            });
            sequelize
                .authenticate()
                .then(() => {
                    console.log('Connection has been established successfully.');
                    db.blueprints = require('./models/blueprints')(sequelize, Sequelize);
                    db.sequelize = sequelize;
                    db.Sequelize = Sequelize;
                    db.op = Op;
                    resolve(db);
                })
                .catch(err => {
                    console.error('Unable to connect to the database:', err);
                    reject(err);
                });
        });
}

function getBlueprints(db) {
    return new Promise(
        (resolve, reject) => {
            db.blueprints.findAll().then((result) => {
                db.sequelize.connectionManager.close();
                resolve(result);
            }).error((err) => {
                console.log("Error:" + err);
                reject(err);
            });
    });
}

function searchBlueprints(db, res) {
    var whereStatement = {};
    if (res.queryString.id)
        whereStatement.id = res.queryString.id;
    if (res.queryString.bedrooms)
        whereStatement.bedrooms = { [Op.gte]: res.queryString.bedrooms };
    if (res.queryString.bathrooms)
        whereStatement.bathrooms = {[Op.gte]: res.queryString.bathrooms};
    if (res.queryString.floors)
        whereStatement.floors = {[Op.gte]: res.queryString.floors};
    if (res.queryString.sqft)
        whereStatement.totalSqFeet = {[Op.gte]: res.queryString.sqft};
    return new Promise(
        (resolve, reject) => {
            db.blueprints.findAll({
                where: whereStatement
            }).then((result) => {
                db.sequelize.connectionManager.close();
                resolve(result);
            }).error((err) => {
                console.log("Error:" + err);
                reject(err);
            });
    });
}

// api.get('/', () => Date.now())

// api.get('/builder', async () => { return await blueprint.GetBlueprints()})
// api.get('/heartbeat', () => {return healthCheck.healthcheck()})

module.exports = api