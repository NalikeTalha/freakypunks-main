import React from 'react';

const Faq = () => {

    return (
        <div id="faq" className="container bg-black text-white">
            <br />
            <div className="container-fluid">
                <div className="purple-flux no-wrap text-center" style={{textSize: "3em"}}>FAQs</div>
            </div>
            <br />
            <br />
            <div className="accordion fs-4" id="accordionExample">
                
                <div className="accordion-item pm-color bg-black">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed pm2-color bg-black pm-border fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        What is an NFT ? 
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse pm-color bg-black" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        NFT stands for “Non-fungible token” and is a cool way of saying it’s a truly unique digital 
                        item that YOU can buy, own, and trade.
                    </div>
                    </div>
                </div>

                <div className="accordion-item pm-color bg-black">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed pm2-color bg-black pm-border fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What is Metamask ?
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Metamask is a crypto-wallet that can store your Ethereum, and is needed to purchase and mint a Freaky Punk.
                    Having a wallet gives you an Ethereum address (i.e. 0xAB1C2….789),
                    this is where your NFT will be stored.
                    Learn more about Metamask and how easy it is to use over here! (https://metamask.io).
                    </div>
                    </div>
                </div>


                <div className="accordion-item pm-color bg-black">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed pm2-color bg-black pm-border fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How to mint with Metamask on a mobile phone ?
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse pm2-color bg-black" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    If you are using a mobile phone to mint our lovely Freaky Punks, you need to use the Metamask application built-in browser to mint our NFTs. Therefore, please launch the Metamask application, click the 3 lines on the top left menu in the application and select "Browser". It will open a web browser and you will be able to navigate back to freakypunks.com to do the minting.</div>
                    </div>
                </div>

                <div className="accordion-item pm-color bg-black">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed pm2-color bg-black pm-border fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Where does my NFT go after i purchase a punk ? 
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Your Freaky Punk NFT will appear in whatever address, or connected wallet you used to purchase the Punk. You can see your freshly minted NFT card directly on your Opensea.io account
                    </div>
                    </div>
                </div>

                <div className="accordion-item pm-color bg-black">
                    <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed pm2-color bg-black pm-border fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    How to mint with Metamask on a computer ?
                    </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    If you are using a computer to mint our lovely Freaky Punks, you just need to connect the Metamask plugin with our website, verify you have enough ETH to do the transaction, then you will be able to click on the Mint button to buy a few punks.
                    </div>
                    </div>
                </div>

                <div className="accordion-item pm-color bg-black">
                    <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button collapsed pm2-color bg-black pm-border fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Buying NFT for the first time ?
                    </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Get the Metamask Chrome or Firefox extension. Load it with ETH through services that allow you to change your money to ETH like Coinbase, Binance or Kraken. Then, click the button "MINT" on the site to connect your wallet and approve the transaction on Metamask. That’s it !
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );

}

export default Faq;