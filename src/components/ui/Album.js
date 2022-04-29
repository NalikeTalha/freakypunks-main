import React from 'react';

import King from '../../images/legendary/Legendary1.jpg';
import Jack from '../../images/legendary/Legendary2.jpg';
import Pirate from '../../images/legendary/Legendary3.jpg';
import Joker from '../../images/legendary/Legendary4.jpg';
import Apenator from '../../images/legendary/Legendary5.jpg';

import {FaCrown} from 'react-icons/fa';

const Album = () => {
    
    const imageObject = [
        {
            url: King,
            name: "The King",
            desc: "The King of all punks with Gold Crown, Gold chain... Nobody can mess with this man, don’t even think about it"
        },{
            url: Jack,
            name: "Jack Frost",
            desc: "He freezes everything that he doesn’t like and he also freezes the stuffs he like, okay he loves to freeze everything"
        },{
            url: Pirate,
            name: "Pirate Skull",
            desc: "He died long back but our witches summoned him for a purpose, you’ll know the reason soon"
        },{
            url: Joker,
            name: "Joker",
            desc: "He is a prankster than a threat unless your name is Batman, keep him close to stay safe shhh."
        },{
            url: Apenator,
            name: "Apenator",
            desc: "He is from the future to protect our punks from the paperhands , make sure you recharge him at regular intervals"
        }
    ];
    
    return (
        <>
        <div id="exclusive" className="container mt-5">
            <br />
            <div className="container-fluid text-center">
                <FaCrown color="GOLD" size="3em"/>
                <div className="purple-flux no-wrap text-center align-items-center" style={{textSize: "3em", paddingTop: '0px', lineHeight: '10vh'}}>
                    EXCLUSIVE PUNKS
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <section id="slideshow" style={{backgroundImage: "radial-gradient(blue, purple, black, black, black)"}}>
                        <div className="entire-content">
                            <div className="content-carrousel">
                                {imageObject.map(item => (
                                    <>
                                    <figure className="shadow">
                                        <img src={item.url} alt={item.name}/>
                                        <p className="text-white text-center bg-black">{item.name}</p>
                                        <p className="text-white text-center bg-black">{item.desc}</p>
                                    </figure>
                                    </>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div>
                        <br />
                        <br />
                        <h2 className="text-white text-end pb-2">GRAB TODAY</h2>
                        <p className="text-white fs-4 text-end">Our exclusive punks are out in the virtual world looking for owners. Mint one before the reveal and hodl to enjoy the perks they come with. Join discord for more details
                        </p>
                        <div className="text-end">
                            <button
                                class="custom-btn btn-7"
                                style={{height: "50px", width: "150px"}}>
                                    <span>Mint</span>
                            </button>
                        </div>
                    </div>
                </div>  
            </div>
            <br />
            <br />
        </div>
        <div className="container-fluid mt-5">
            <div className="pulse-content">
                <div className="life-line">
                    <div className="machine-pulse"></div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Album;