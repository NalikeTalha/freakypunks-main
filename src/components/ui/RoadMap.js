import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import React from 'react';

import { FaCoins } from 'react-icons/fa';

const items = [
    {
        id: 10,
        description: "NFT airdrop to holders ( number will be announced soon )"
    },
    {
        id: 20,
        description: "Collaborations with artists and other projects to make ourselves a recognized brand"
    },
    {
        id: 30,
        description: "Launch Freaky punks DAO! (Decentralized Autonomous Organization) and 2 ETH added to the Community Wallet, which will be used for giveaways to loyal hodlers."
    },
    {
        id: 40,
        description: "Donation to a noble cause voted by community"
    },
    {
        id: 50,
        description: "Exclusive Freaky punks merch unlock, we will announce them soon ( only for holders)"
    },
    {
        id: 60,
        description: "Big influencers collab & 4 ETH added to the Community Wallet"
    },
    {
        id: 70,
        description: "Freaky Punks liquidity pool is initiated, 10% of secondary market royalty is added to Community Wallet"
    },
    {
        id: 80,
        description: "We will buy a land MetaVerse! Community will decide the provider (Sandbox / Decentraland / NFTWorld) and we will start moving our hub there so we can meet and have fun. Let’s get WILD!"
    },
    {
        id: 90,
        description: "Freaky punks token will be launched and holders will receive surprise, they can be traded for Merch / Eth"
    },
    {
        id: 100,
        description: "P2E game merging our punks into metaverse with our token, Investing into other potential projects based on community vote."
    },
];

const RoadMap = () => {

    return (
        <div id="roadmap" className="container mt-5">
           <div className="container-fluid">
                <div className="purple-flux no-wrap text-center" style={{textSize: "3em"}}>ROAD MAP</div>
            </div>
            <br />
            <br />
            <VerticalTimeline animate lineColor="#EE82EE">
                {items.map(item => (
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#EE82EE', color: '#8f0d93'}}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    date=""
                    iconStyle={{ background: '#8f0d93', color: '#fff' }}
                    icon={<FaCoins />}
                >
                    <h1 className="vertical-timeline-element-title mb-1">{item.id + " %"}</h1>
                    <p className="fs-5">
                    {item.description}
                    </p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );

};

export default RoadMap;