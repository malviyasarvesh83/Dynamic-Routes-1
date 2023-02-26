const mysql = require('mysql2');

const pool=mysql.createPool({
    host: 'localhost',
    user:'root',
    database: 'nodejs',
    password: 'S09111A655@r',
})

module.exports = pool.promise();