const mysql = require("mysql");

const db = mysql.createPool({
    connectionLimit: 10,
    host:"us-cdbr-east-06.cleardb.net",
    port:"3306",
    user:"b043eccd9f3897",
    password:"3e6f047d",
    database:"heroku_86e675d781d5719",
    connectTimeout: 10000,
})

db.getConnection((err,connection) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = db;