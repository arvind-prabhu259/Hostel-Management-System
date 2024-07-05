// import {useState, useEffect} from 'react'
import Header from "../components/header";
import displayImg from '../assets/516663.jpg'
import './homeStyles.css'

const Home = () =>{
    return(
        <div>
            <Header />
            <div className="home-container">
                <h1>Welcome to Hostel Management System.</h1>
                <p>This Hostel Management System is created to facilitate quick, easy and efficient allocation and deallocation of hostel rooms to students.</p>
                <div className="img-container">
                    <img src={displayImg} alt="IMAGE" className="display-image"></img>
                    <p className="display-image-caption"> An image of the moon-blessed hunter </p>
                </div>
            </div>
        </div>
    )
    // add info abt current room, block, etc.
};

export default Home;