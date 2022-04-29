import { useState, useEffect } from "react";
import './mint.css';
import React from 'react';
import Web3 from "web3";
import king from './images/legendary/Legendary1.jpg';
import freakyPunks_ABI from "./contract/FreakyPunks.json";

function Mint(props) {

    const [isWalletConnected, setIsWalletConnected] = useState(false);
    let [address, setAddress] = useState("");

    const [punksAvailable, setPunksAvailable] = useState("0");

    const [isConnectBtn, setIsConnectBtn] = useState(false);
    const [isMintBtn, setIsMintBtn] = useState(false);

    const [mintAmount, setMintAmount] = useState(0);

    const [snackMsg, setSnackMsg] = useState("");
    const [isSnack, setIsSnack] = useState(false);

    const [freakyPunksContract, setFreakyPunksContract] = useState(null);

    // Polygon ID: 137 | 0x89
    // Polygon Mumbai ID: 80001 | 0x13881
    const mainNetId = 80001;
    const contractAddress = "0x36eCD3D2cd0F6Ca04b1b8cb9bd7f8B50D05DFb9f"

    // useEffect(() => {
    //     if(localStorage.getItem("prevCon") === "true") {
    //     handleWalletConnection();
    //     }
    // }, [])

    useEffect(() => {
        if(isWalletConnected && mintAmount >= 1) {
            setIsMintBtn(true);
        } else {
            setIsMintBtn(false);
        }
    }, [isWalletConnected, mintAmount])
  
    if(typeof window.ethereum !== 'undefined') {
        window.ethereum.on('accountsChanged', (accounts) => {
            setAddress(accounts[0]);
            loadAppData(accounts[0]);
            callSnackBar("Account Changed", true)
            window.location.reload();
        })

        window.ethereum.on('chainChanged', (chainId) => {
            window.location.reload();
            callSnackBar("Chain Changed", true)
        })
    }
  
  const callSnackBar = (snackMessage, withTime) => {
    if(withTime) {
      setSnackMsg(snackMessage);
      setIsSnack(true);
      setTimeout(() => {
        setIsSnack(false);
        setSnackMsg("");
      }, 3000)
    } else if(withTime === false) {
      setSnackMsg(snackMessage);
      setIsSnack(true);
    }
    
  }

    const handleWalletConnection = async () => {
        if (typeof window.ethereum !== 'undefined') {
            if(!isWalletConnected) {
                window.web3 = new Web3(window.ethereum);

                setIsConnectBtn(false);
                window.ethereum.request({ method: 'eth_requestAccounts' }).then((res) => {
                    setAddress(res[0]);
                    setIsWalletConnected(true);
                    setIsConnectBtn(true);
                    callSnackBar("Wallet Connected", true)

                    // if(localStorage.getItem("prevCon") === "true") {

                    // } else {
                    // localStorage.setItem("prevCon", "true");
                    // }

                    loadAppData(address);
                })
            } 
            else {
                setIsWalletConnected(false)
                setIsConnectBtn(false)
                callSnackBar("Wallet Disconnected", true)

                // setAddress("");
                setPunksAvailable("0");
            }
        } 
        else {
            callSnackBar("Metamask not Installed", false)
        }
    }

    const loadAppData = async (dataAddress) => {
        const web3 = window.web3;
        console.log(dataAddress);
        const networkId = await web3.eth.net.getId()
        if (networkId === mainNetId) {
        const contract = await new web3.eth.Contract(freakyPunks_ABI, contractAddress)
        setFreakyPunksContract(contract)

        const getPunksMinted = await contract.methods.totalSupply().call()
        let getPunksAvailable = 1000 - getPunksMinted; 
        setPunksAvailable(getPunksAvailable.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);

        } else {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x13881'}],
        }).then(() => {
            callSnackBar("Network switched: Polygon", true);

            loadAppData(address);
        })
        }
    }

    const handleMint = async () => {
        setIsConnectBtn(true);
        setIsMintBtn(true);

        callSnackBar("Processing...", false)

        let cost = 0;

        let isUserWhitelisted = await freakyPunksContract.methods.isWhitelisted(address).call();
        console.log(isUserWhitelisted);

        if(isUserWhitelisted)
            cost = mintAmount * 44000000000000000000;
        else
            cost = mintAmount * 77000000000000000000;

        freakyPunksContract.methods.mint(mintAmount).send({ 
            from: address, 
            value: cost
        }).once('receipt', (receipt) => {
            loadAppData(address);
            //   purchaseEvent('Purchase', {currency: "USD", value: web3.utils.fromWei(mintAmount).toString()})
            callSnackBar("Transaction Complete", true);
        })
        .catch((err) => {
            callSnackBar("Transaction Failed", true);
        })
        .finally(() => {
            setIsConnectBtn(true);
            loadAppData(address);
        })
    }

    return (
        <div className="container">

        {isSnack && (<SnackBar message={snackMsg} />)}

        <div className="image">
            <img className="mainImg" src={king}/>
        </div>

        <div className="mainMint">
            <button onClick={handleWalletConnection} className={isConnectBtn ? "app__walletconnect" : "app__walletconnectdisabled"}>{isWalletConnected ? "DISCONNECT WALLET" : "CONNECT WALLET"}</button>

            <h2 className="heading"><span>MINT</span> a Freaky Punk <span>NOW</span>!</h2>

                <div className="heading">
                    <h3>{punksAvailable} Freaky Punks available!</h3>
                </div>


                <div className="mintingButton">
                <input onChange={(e) => setMintAmount(e.target.value)} placeholder="1" className="app__inputavax" type="number" />
                </div>
                <button onClick={handleMint} disabled={!isMintBtn} className={isMintBtn ? "app__minebtn" : "app__minebtndisabled"}>MINT</button>
        </div>
        </div>
    );

    function SnackBar(props) {
        return(
        <div className="app__snackbar">
            <span>{props.message}</span>
        </div>
        )
    }
}

export default Mint;



// import React from 'react';

// const Mint = () => {
//     return (
        
//         <>
//         <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
//             <div className="container-fluid">
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarTogglerDemo02">
//                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                         <li className="nav-item purple">
//                             <a className="nav-link mb-0 h2" onClick={() => window.open('https://freakypunks.com/')}><span className="text-light">Home</span></a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//         </>
//     );
// }

// export default Mint;