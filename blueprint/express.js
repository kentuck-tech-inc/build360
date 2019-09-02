const express = require('express')
require('dotenv').config()
var mariadb = require('mariadb');
var {Op, Sequelize } = require('sequelize');

const healthCheck = require('./handlers/healthcheck')

const app = express()
const port = 3000

app.get('/blueprints', (req, res) => {
    const getData = new Promise(
        (resolve, reject) => {
            loadDatabase()
            .then((db) => {
                resolve(getBlueprints(db));
            })
            .catch((ex) => {
                reject( `Ok, something went seriously wrong...\n ${ex.message}`);
            });
    });
    getData
    .then(
        (blueprints) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(blueprints));
        });
});

app.get('/blueprints/search', (req, res) => {
    const getData = new Promise(
        (resolve, reject) => {
            loadDatabase()
            .then((db) => {
                resolve(searchBlueprints(db, req));
            })
            .catch((ex) => {
                reject( `Ok, something went seriously wrong...\n ${ex.message}`);
            });
        }
    );
    getData
    .then(
        (blueprints) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(blueprints));
        });

});

app.get('/health', (req, res) => res.status(200).send(healthCheck.healthcheck()))

app.listen(port, () => console.log(`Blueprint app listening on port ${port}`))

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
    if (res.query.id)
        whereStatement.id = res.query.id;
    if (res.query.bedrooms)
        whereStatement.bedrooms = { [Op.gte]: res.query.bedrooms };
    if (res.query.bathrooms)
        whereStatement.bathrooms = {[Op.gte]: res.query.bathrooms};
    if (res.query.floors)
        whereStatement.floors = {[Op.gte]: res.query.floors};
    if (res.query.sqft)
        whereStatement.totalSqFeet = {[Op.gte]: res.query.sqft};
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