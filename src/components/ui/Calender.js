import React from 'react';

const Calender = () => {
    return (
        <>
        <div className="container mt-5 mb-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-4">
                <div id="text-container">
                    MAKE 
                    <div id="flip">
                        <div><div>EVERYTHING</div></div>
                        <div><div>NFTS</div></div>
                        <div><div>INVESTING</div></div>
                    </div>
                    AWESOME!
                </div>
                </div>
        
                {/* <div className="col-md-4">
                    <div className="container-card">
                        <div className="card-overlay">
                            <div className = "items"></div>
                            <div className = "items head">
                                <p>Go to Nft Calender</p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-2"></div>
                    <div className="col-xs-12 col-sm-8">
                        <div className="laptop">
                            <div className="laptop-screen">
                                <img className="img-responsive" src="https://freakypunks.com/wp-content/uploads/2021/12/l6U6qVSU.png"/></div>
                            <div className="laptop-base"></div>
                        </div>
                    </div>
                    </div>
                </div> */}
        </div>
        <div id="opensea" className="container-fluid mt-5" style={{borderTop: "2px solid #8f0d93", borderBottom: "2px solid #8f0d93"}}>
                {/* <div className="n-card">
                    <h1 className="pm-color">GRAB YOUR PUNK @</h1>
                    <div className="pm-bg" style={{ color: "black", padding: '5px 10px', marginTop: '100px'}}><h1>OPENSEA</h1></div>
                </div> */}
                <div className="container p-5">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6 text-center">
                            <p className="pm-color" style={{ fontSize: "4em"}}>GRAB YOUR PUNK</p>
                            <p className="fs-3 pm-color">[ EXCLUSIVELY ON OPENSEA ]</p>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="frame">
                                <button
                                    className="n-button custom-btn btn-10"
                                    onClick={() => window.open("https://opensea.io/collection/freakypunks777 ", "blank")}>
                                        OPENSEA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
        </>
    );
}

export default Calender;