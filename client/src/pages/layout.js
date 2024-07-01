import { Outlet, Link } from "react-router-dom";
import {useState} from 'react';
import DropDownItem from "../components/dropDownItem";
import "./pageStyles.css"

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className="menu-container">
            <div className="menu-trigger">
                <button className="navButton" onClick={() => setIsOpen(!isOpen)}>Nav</button>
            </div>
            {isOpen &&(
                <div>
                    <nav>
                        <ul>
                            <DropDownItem path={"/home"} text={"Home"}/>
                            <DropDownItem path={"/hostel"} text={"Hostel"}/>
                            <DropDownItem path={"/room"} text={"View Rooms"}/>
                            <DropDownItem path={"/booking"} text={"Book a room"}/>
                            <DropDownItem path={"/cancel"} text={"Cancel booking"}/>
                        </ul>
                        
                    </nav>
                </div>
            )}
        </div>
        <Outlet />
      </>
    );
};

export default Layout;

{/* <Link to="/home">Home</Link>
<br></br>
<Link to="/hostel">View hostel Buildings</Link>
<br></br>
<Link to="/room">View rooms</Link>
<br></br>
<Link to="/booking">Book a room</Link>
<br></br>
<Link to="/cancel">Cancel Booking</Link> */}