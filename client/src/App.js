import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/header';
// import PrivateRoute from './components/PrivateRoute';

import Layout from "./pages/layout";
import Home from "./pages/home";
import Booking from "./pages/booking";
import Cancel from "./pages/cancelBooking";
import Hostel from "./pages/hostel";
import Room from "./pages/room";
import NoPage from "./pages/noPage";
import Login from "./pages/login";



function App(){
    return (
        <BrowserRouter>
        <Header />
        <main>
            <Routes>
                    <Route ind      ex element={<Login />} />
                    <Route path="/" element={<Layout />} />
                    <Route path="home" element={<Home />} />
                    <Route path="booking" element={<Booking />} />
                    <Route path="cancel" element={<Cancel />} />
                    <Route path="hostel" element={<Hostel />} />
                    <Route path="room" element={<Room />} />
                    <Route path = "*" element = {<NoPage/>}/>
            </Routes>
        </main>
        </BrowserRouter>
      );
}
export default App;
        // <BrowserRouter>
        //     <Routes>
        //         <Route index element={<Login />} />
        //         <Route path="/" element={<Layout />}>
        //             <Route path="home" element={<Home />} />
        //             <Route path="booking" element={<Booking />} />
        //             <Route path="cancel" element={<Cancel />} />
        //             <Route path="hostel" element={<Hostel />} />
        //             <Route path="room" element={<Room />} />
        //             <Route path = "*" element = {<NoPage/>}/>
        //         </Route>
        //     </Routes>
        // </BrowserRouter>