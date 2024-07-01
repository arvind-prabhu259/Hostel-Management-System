import {useState, useEffect} from 'react'

const Room = () =>{
    const [backendData, setBackendData] = useState([{}]);
    const [hostelId, setHostelId] = useState("");

    function handleForm(event){
        event.preventDefault();
        let choice = {
            hostelId:hostelId
        };
        fetch("/roomList",{
            method: "post",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(choice)
        }).then(
            response=>response.json()
        ).then(data=>{
            setBackendData(data)
        })
    }

    return(
        <div>
            <h1>View Rooms.</h1>
            <form onSubmit={handleForm}>
                <label>Hostel building: </label>
                <input type='number' name = "hostelId" onChange={(e)=>setHostelId(e.target.value)}/><br/>
                <input type='submit' value = "View Rooms"/>
            </form>
            <table>
                <tr>
                    <th>Hostel Number</th>
                    <th>Room Number</th>
                    <th>Occupants</th>
                    <th>Capacity</th>
                </tr>
                {backendData.map((row, key) => {
                    return(
                    <tr key={key}>
                        <td>{row.hostelid}</td>
                        <td>{row.roomnumber}</td>
                        <td>{row.occupancy}</td>
                        <td>{row.capacity}</td>
                    </tr>
                    )
                })}
                
            </table>
        </div>
    );
};

export default Room;