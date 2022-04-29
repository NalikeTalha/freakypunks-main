import React from 'react';
import Slider from 'react-slick';

function importAll(r) {
    let images = [];
    r.keys().map(item => images.push(r(item)));
    return images;
}

const images = importAll(require.context('../../images/freakypunks', false, /\.(png|jpeg)$/));

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
    ]
};

const settingsRTL = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    rtl: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
    ]
};

const About = () => {

    const array1 = images.slice(0, 8);
    const array2 = images.slice(6, 15);
    const array3 = images.slice(10, 19);

    return (
        <>
        <div id="about" className="container-fluid" style={{ marginTop: "50px"}}>
            
            <div className="container-fluid">
                <div className="purple-flux no-wrap text-center" style={{textSize: "3em", marginBottom: "20px"}}>ABOUT</div>
            </div>
            
            <div className="container-fluid bg-black" style={{width: "90%"}}>
                <Slider {...settings}>
                    {array1.map(item => (
                            <div className="card bg-black p-2">
                                <img className="card-img-top" src={item} alt="1"/>
                            </div>
                                
                        ))}
                </Slider>
                <br />
                <Slider {...settingsRTL}>
                    {array2.map(item => (
                            <div className="card bg-black p-2">
                                <img className="card-img-top" src={item} alt="2"/>
                            </div>
                                
                        ))}
                </Slider>
                <br />
                <Slider {...settings}>
                    {array3.map(item => (
                            <div className="card bg-black p-2">
                                <img className="card-img-top" src={item} alt="3"/>
                            </div>
                                
                        ))}
                </Slider>
                <br />
                <div className="card-body">
                    <p className="ls-sm card-text pm-color fs-2 text-center">
                    FreakyPunks is a collection of unique 1000 Punks unleashed on Polygon Blockchain imitating famous people,
                    groups and different cultures across the world. Buying one of our NFTS will seal yourself a place to be a member
                    of our Great Freaky Family where you can meet entrepreneurs , artists , NFT influencers and many others.
                    But we are not stopping there, we have a lot of giveaways and special benefits to holders including passive income for 
                    lifetime so what are you waiting for…
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;