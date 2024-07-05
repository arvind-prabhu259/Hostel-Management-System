const express = require('express');
const router = express.Router();
const conn = require('./../../database/db');


var session = {
    "rollno":"",
    "email": "",
    "password": ""
};


//Check if email address and password are valid
router.post('/login', (req, res)=>{
    const email = req.body.email;
    const password = req.body.pw;

    const query = "SELECT * FROM LOGINCREDS WHERE UNAME  = \"" + email +"\";"
    conn.query(query, (err, results)=>{
        if(err){
            console.log(err);
            return results;
        }
        // console.log(results);
        if(results.length == 0){
            return res.status(401).json({status: "Invalid email or password"});
        }

        const db_data = results[0];
        // console.log(db_data);
        // console.log(results);
        // console.log(results[0].ROLL_NO);
        if(!(password == db_data.PW)){
            return res.status(401).json({status: "Invalid email or password"});
        }
        session.rollno = db_data.ROLL_NO;
        session.email = db_data.UNAME;
        session.password = db_data.PW;
        
        res.status(200).json({status: "Logged in successfully"});
    })
})


//get a list of available hostels
router.get('/hostelList', (req, res)=>{
    const query = "CALL GET_ALL_HOSTEL_INFO;";
    conn.query(query, (err, results)=>{
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.json(results[0]);
            console.log(results[0]);
            console.log("Hostel list retrieved successfully.");
        }
    });
});


//select rooms in a particular hostel building
router.post('/roomList', (req, res)=>{
    const hostelId = req.body.hostelId;
    console.log(hostelId);
    const query = "SELECT hostelid, roomnumber, occupancy, capacity FROM rooms where hostelid = " + hostelId;
    conn.query(query, (err, results)=>{
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.json(results);
            console.log(results[0]);
            console.log("Room list retrieved successfully.");
        }
    });
});


//book a room and return confirmation
router.post('/bookRoom', (req, res)=>{
    const hostelId = req.body.hostelId;
    const roomNo = req.body.roomNo;
    // console.log(hostelId);
    const query = "select occupancy, capacity FROM rooms where (hostelid = " + hostelId + " and roomnumber = \""+roomNo + "\")";
    // const insQuery = "INSERT INTO"
    conn.query(query, (err, results)=>{
        if(err){
            console.log(err);
            res.send(err);
        }else{
            if(results.length === 0){
                res.status(400).json({message:"Invalid request"});
            }else{
                const roomData = results[0];
                // console.log(roomData);
                console.log(roomData.occupancy, roomData.capacity);
                if(roomData.occupancy < roomData.capacity){
                    res.json({message: "Successfully allotted"});
                }else{
                    res.json({message: "Invalid request"});
                }
            }
        }
    });
});


//Cancel booking
router.post('/cancel', (req, res)=>{
    const hostelId = req.body.hostelId;
    const roomNo = req.body.roomNo;
    const query = "select occupancy, capacity FROM rooms where (hostelid = " + hostelId + " and roomnumber = \""+roomNo + "\")";
    conn.query(query, (err, results)=>{
        if(err){
            console.log(err);
            res.send(err);
        }else{
            if(results.length === 0){
                res.status(400).json({message:"Invalid request"});
            }else{
                const roomData = results[0];
                console.log(roomData.occupancy, roomData.capacity);
                if(roomData.occupancy < roomData.capacity){
                    res.json({message: "Successfully canceled"});
                }else{
                    res.json({message: "Invalid request"});
                }
            }
        }
    });
});


module.exports = router;