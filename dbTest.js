const mysql = require('mysql');
const creds = require('./database/dbCredentials');

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

const query = "SELECT hostelid, roomnumber, occupancy, capacity FROM rooms;";
// const query = "SELECT * FROM samples";
conn.query(query, (err, results) => {
    if(err){
        console.log(err);
        res.send("Error.");
        return;
    }else{
        console.log(results);
        // res.json(results);
    }
});

module.exports = conn;