import React from 'react';
import { Carousel } from 'react-bootstrap';
import sliderImg1 from '../../Images/slidermg1.jpg'
import sliderImg2 from '../../Images/slidermg2.jpg'
import sliderImg3 from '../../Images/slidermg3.jpg'
const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={ 3000 }>
                <img
                    className="d-block w-100"
                    src={ sliderImg1 }
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="fs-2 fw-bold">Hello, This is Mr.X</h3>
                    <p className="fs-4" >I serve the people in my saloon room and I also provide home service to the clients</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={ 3000 }>
                <img
                    className="d-block w-100"
                    src={ sliderImg2 }
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="fs-2 fw-bold">I work in my saloon</h3>
                    <p className="fs-4" >I have my own space where I provide services to my clients</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={ 3000 }>
                <img
                    className="d-block w-100"
                    src={ sliderImg3 }
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="fs-2 fw-bold">I also provide home service</h3>
                    <p className="fs-4" >I carry my kits to the clients home and provide serices there.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;