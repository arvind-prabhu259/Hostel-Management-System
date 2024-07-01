const mysql = require('mysql');
const creds = require('./dbCredentials');

const conn = mysql.createConnection({
    host: creds.HOST,
    user: creds.USER,
    password: creds.PASSWORD,
    database: creds.DATABASE
});

conn.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Connected to MySQL");
    }
});

module.exports = conn;