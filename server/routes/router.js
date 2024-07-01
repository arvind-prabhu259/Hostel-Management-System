const express = require('express');
const router = express.Router();
const conn = require('./../../database/db');


var session = {"email": "", "password": ""};


//Check if email address and password are valid
router.post('/login', (req, res)=>{
    const email = req.body.email;
    const password = req.body.pw;

    const query = "SELECT * FROM logincreds WHERE email  = \"" + email +"\";"
    conn.query(query, (err, results)=>{
        if(err){
            console.log(err);
            return results;
        }
        // console.log(results);
        if(results.length == 0){
            return res.status(401).json({status: "Invalid email or password"});
        }

        const user = results[0];
        // console.log(user);
        if(!(password == user.pw)){
            return res.status(401).json({status: "Invalid email or password"});
        }

        session.email = email;
        session.password = password;
        
        res.status(200).json({status: "Logged in successfully"});
    })
})


//get a list of available hostels
router.get('/hostelList', (req, res)=>{
    const query = "SELECT hostelname, location, totalrooms, availablerooms FROM hostels;";
    conn.query(query, (err, results)=>{
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.json(results);
            // console.log(results);
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