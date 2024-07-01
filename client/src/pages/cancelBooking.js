import {useState, useEffect} from 'react'
const Cancel = () =>{
    const [message, setMessage] = useState("");
    const [confirmation, setConfirmation] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert("confirmation status: "+confirmation);
        if(confirmation != "on" || confirmation == null){
            alert("You have not confirmed room cancellation.");
        }else{
            let requestData = {
                confirmation: confirmation
            }
            console.log(confirmation);
            fetch("/cancel",{
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
    }

    return(
        <div>
            <h1>Cancel Booking.</h1>
            <form onSubmit={handleSubmit}>
                <label><input type='checkbox' onChange={(e)=>{setConfirmation(e.target.value)}}/> Confirm cancellation</label><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Cancel;