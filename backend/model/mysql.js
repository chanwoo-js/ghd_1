const mysql = require("mysql");

const db = mysql.createPool({
    connectionLimit: 10,
    host:"us-cdbr-east-06.cleardb.net",
    port:"3306",
    user:"bf2ce2930817a6",
    password:"becaabba",
    database:"heroku_1c1d9fde0d345ed",
    connectTimeout: 10000,
})

db.getConnection((err,connection) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = db