import {useState, useEffect} from 'react'
import Header from '../components/header';
import './hostelStyles.css'

const Hostel = () =>{
    const [backendData, setBackendData] = useState([{}])
    useEffect(() => {
        fetch("/hostelList").then(
            response =>response.json()
        ).then(
            data =>{
                setBackendData(data)
            }
        )
    }, []);
    return(
        <div>
            <Header />
            <div className='hostel-div'>
                <h1>View Hostel Buildings.</h1>
                <div className='table-container'>
                    <table className='hostel-table'>
                        <tr className='hostel-table-headers'>
                            <th>Hostel Name</th>
                            <th>Location</th>
                            <th>Available Rooms</th>
                            <th>Total Rooms</th>
                        </tr>
                        {backendData.map((row, key) => {
                            return(
                            <tr key={key}>
                                <td>{row.hostelname}</td>
                                <td>{row.location}</td>
                                <td>{row.availablerooms}</td>
                                <td>{row.totalrooms}</td>
                            </tr>
                            )
                        })}
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Hostel;


{/* {(typeof backendData.users == 'undefined')?(
                    <p>Loading ...</p>
                ):(
                    backendData.map((row, key) => {
                        return(
                        <tr key={key}>
                            <td>{row.id}</td>
                            <td>{row.age}</td>
                            <td>{row.resName}</td>
                        </tr>
                        )
                    })
                )} */}