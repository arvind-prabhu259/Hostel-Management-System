import {useState, useEffect} from 'react'
const Booking = () =>{
    const [message, setMessage] = useState("");
    const [hostelId, setHostelId] = useState("");
    const [roomNo, setRoomNo] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let requestData = {
            hostelId: hostelId,
            roomNo: roomNo 
        }
        fetch("/bookRoom",{
            method: 'post',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(requestData)
        }).then(
            response=>response.json()
        ).then(data=>{
            setMessage(data)
        })
        console.log(message);
    }

    return(
        <div>
            <h1>Create Booking.</h1>
            <form onSubmit={handleSubmit}>
                <label>Hostel building: </label>
                <input type='number' name = "hostelId" onChange={(e) => {setHostelId(e.target.value)}}/><br/>
                <label>Room number: </label>
                <input type='text' name = "roomNo" onChange={(e) => {setRoomNo(e.target.value)}}/><br/>
                <input type='submit' value = "Book Room"/><br/>
                <p>{message.message}</p>
            </form>
        </div>
    );
};

export default Booking;