import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/banner image/img7.jpg'
import img2 from '../../../assets/banner image/img3.jpg'
import img3 from '../../../assets/banner image/img5.jpg'
import img4 from '../../../assets/banner image/img6.jpg'
import img5 from '../../../assets/banner image/img7.jpg'
import img6 from '../../../assets/banner image/img8.jpg'


const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
            <div>
                <img src={img6} />
            </div>
        </Carousel>
    );
};

export default Banner;