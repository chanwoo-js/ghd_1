// const mysql = require("mysql");
//
// const db = mysql.createConnection({
//     host:"localhost",
//     port:"3306",
//     user:"root",
//     password:"Cksdn1324132$",
//     database:"ghd",
// })
//
// db.connect((err) => {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log('connected as id ' + db.threadId);
// });
//
// module.exports = db;
// mysql://
// user : bf2ce2930817a6:
// password : becaabba@
// host : us-cdbr-east-06.cleardb.net/
// database : heroku_1c1d9fde0d345ed
// ?reconnect=true

const mysql = require("mysql");

const db = mysql.createConnection({
    host:"us-cdbr-east-06.cleardb.net",
    user:"bf2ce2930817a6",
    password:"becaabba",
    database:"heroku_1c1d9fde0d345ed",
})

db.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + db.threadId);
});