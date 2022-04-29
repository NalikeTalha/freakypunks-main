import React from 'react';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';
import king from '../../images/legendary/Legendary1.jpg';

const Home = () => {
    
    return (
        <>
        <div id="home" className="container" style={{marginTop: "100px"}}>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img className="img-fluid" style={{objectFit: "contain", borderRadius: "1%"}} src={king} alt="king"/>
                </div>
                <div className="col-md-6 bg-black">
                    <div className="neon text-center">WELCOME TO</div>
                    <div className="flux text-center">FREAKY PUNKS</div>
                    <br />
                    <br />
                    <div className="container text-center">
                        <FaDiscord size="3em" style={{cursor: "pointer", marginLeft: '10px'}} onClick={() => window.open('https://discord.gg/ddVDpraZg2')} color="#7289da"/>
                        <FaInstagram size="3em" style={{cursor: "pointer", marginLeft: '10px'}} onClick={() => window.open('https://www.instagram.com/freakypunks/')} color="#C13584" /> 
                        <FaTwitter size="3em" style={{cursor: "pointer", marginLeft: '10px'}} onClick={() => window.open('https://twitter.com/Freaky_Punks')} color="#00acee" /> 

                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid" style={{marginTop: "100px"}}>
            <div className="pulse-content">
                <div className="life-line">
                    <div className="machine-pulse"></div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;