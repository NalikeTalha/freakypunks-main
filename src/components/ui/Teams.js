import React from 'react';

import team1 from '../../images/team1.jpeg';
import founder from '../../images/founder.jpeg';
import { FaTwitter } from 'react-icons/fa';

const Teams = () => {

    return (
        <>
        <div className="container-fluid mt-5">
            <div className="pulse-content">
                <div className="life-line">
                    <div className="machine-pulse"></div>
                </div>
            </div>
        </div>
        <br />
        <div id="teams" className="container">
            <div className="container-fluid">
                <div className="purple-flux no-wrap text-center" style={{textSize: "3em"}}>THE TEAM</div>
            </div>
            <br />
            <br />

            <div className="row justify-content-center align-items-center">
                <div className="col-sm-3">
                    <div className="card bg-black">
                    <img src={founder} className="card-img-top" alt="team2" style={{border: "3px solid #EE82EE"}} />
                    <div className="card-body">                        
                        <div className="container text-center">
                            <h4 className="card-title text-center pm2-color">FLAMY</h4>
                            <FaTwitter
                                size="2em"
                                style={{cursor: "pointer"}}
                                onClick={() => window.open('https://twitter.com/flamypunk')}
                                color="#00acee"
                            />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card bg-black">
                    <img src={team1} className="card-img-top" alt="team1" style={{border: "3px solid #EE82EE"}} />
                    <div className="card-body">                        
                        <div className="container text-center">
                            <h4 className="card-title text-center pm2-color">RAKESH</h4>
                            <FaTwitter
                                size="2em"
                                style={{cursor: "pointer"}}
                                onClick={() => window.open('https://twitter.com/Rakesh_Kannan_')}
                                color="#00acee"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );

};

export default Teams;