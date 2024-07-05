import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Header from './components/header';
// import PrivateRoute from './components/PrivateRoute';

// import Layout from "./pages/layout";
import Home from "./pages/home";
import Booking from "./pages/booking";
import Cancel from "./pages/cancelBooking";
import Hostel from "./pages/hostel";
import Room from "./pages/room";    
import NoPage from "./pages/noPage";
import Login from "./pages/login";



const App = () => {
    const location = useLocation();
    return (
        <div>
            {location.pathname !== '/login' && <Header />}
            <main>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="/" element={<Login />} />
                    {/* <Route path="/" element={<Navigate to="/login"/>} /> */}
                    <Route path="home" element={<Home />} />
                    <Route path="booking" element={<Booking />} />
                    <Route path="cancel" element={<Cancel />} />
                    <Route path="hostel" element={<Hostel />} />
                    <Route path="room" element={<Room />} />
                    <Route path='login' element={<Login />}/>
                    <Route path = "*" element = {<NoPage/>}/>
                </Routes>
            </main>
        </div>
      );
};  

const AppWrapper = () =>{
    <BrowserRouter>
        <App/>
    </BrowserRouter>
}

export default AppWrapper;