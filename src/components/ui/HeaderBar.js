import React from 'react';
import king from '../../images/legendary/Legendary1.jpg';

const HeaderBar = () => {

    return (
        <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
            <div className="container-fluid">
                
                <span className="navbar-brand m-1 h1">
                    <img className="img-fluid"
                        style={{objectFit: "contain", height: "40px", width: "40px",  borderRadius: "50%"}}
                        src={king}
                        alt="..."
                    />
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item purple">
                                <a className="nav-link mb-0 h2" href="mint"><span className="text-light">MINT</span></a>
                            </li>
                            <li className="nav-item purple">
                                <a className="nav-link mb-0 h2" href="#home"><span className="text-light">Home</span></a>
                            </li>
                            <li className="nav-item purple">
                                <a className="nav-link mb-0 h2 pm-color" href="#about"><span className="text-light">About</span></a>
                            </li>
                            <li className="nav-item purple">
                                <a className="nav-link mb-0 h2 pm-color" href="#exclusive"><span className="text-light">Exclusive</span></a>
                            </li>
                            <li className="nav-item purple">
                                <a className="nav-link mb-0 h2 pm-color" href="#roadmap"><span className="text-light">Roadmap</span></a>
                            </li>
                            <li className="nav-item purple">
                                <a className="nav-link mb-0 h2 pm-color" href="#teams"><span className="text-light">Team</span></a>
                            </li>
                            <li className="nav-item purple">
                                <a className="nav-link mb-0 h2 pm-color" href="#opensea"><span className="text-light">OpenSea</span></a>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default HeaderBar;