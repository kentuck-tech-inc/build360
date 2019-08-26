const mariadb = require('mariadb');

console.log('DB_HOST - ' + process.env.DB_HOST);

const dbpool = mariadb.createPool({host: process.env.DB_HOST,
                                   user: process.env.DB_USER,
                                   password: process.env.DB_PASS,
                                   connectionLimit: 5
                                });

exports.GetBlueprints = () => {
    pool.getConnection()
        .then(conn => {
            conn.query("SELECT * from blueprint.blueprintEntity")
            .then((res) => {
                console.log(res);
                conn.end();
                return res;
            })
            .catch(err => {
                conn.end();
                return err;
            })
        }).catch(err => {
            return err;
        })
}