import React from 'react';
import Container from 'react-bootstrap/Container';
import Btn from '../Button/button'
import { RiPlayMiniFill } from "react-icons/ri";

const Hero = () => {
    return (
        <Container className="d-flex flex-wrap align-items-center justify-content-between">
            {/* Text Section */}
            <div className="col-lg-6 col-md-12 col-sm-12 text-start mb-4 mb-lg-0">
                <h1 className="display-5 fw-bold text-center text-lg-start mt-5">
                    Dive into Delights Of Delectable <span className='text-[#39DB4A]'>Food</span>
                </h1>
                <p className="lead my-4 text-center text-lg-start my-5">
                    Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
                </p>
                <div className="d-flex flex-column flex-lg-row gap-5 align-items-center justify-content-center justify-content-lg-start my-5">
                    <Btn value={"Order Now"} />
                    <a
                        href="#"
                        className="text-decoration-none text-dark d-flex gap-5 align-items-center"
                    >
                        Watch Video
                        <RiPlayMiniFill
                            size={30}
                            className="shadow bg-white rounded-circle me-2 p-2"
                        />

                    </a>
                </div>
            </div>

            {/* Image Section */}
            <div className="col-lg-6 col-md-12 col-sm-12 text-center position-relative mt-3 mt-lg-0">
                {/* Background Decorative Image */}
                <img
                    src="./images/Intersect.png"
                    alt="Background Decorative"
                    className=" bg-[#39DB4A] rounded-circle img-fluid position-relative m-2"
                    style={{
                        zIndex: 0,
                        // background: '#39DB4A',
                    }}
                    
                />
                {/* Foreground Main Image */}
                <img
                    src="./images/Group 15.png"
                    alt="Culinary Mastery"
                    className="img-fluid position-absolute top-20 start-40 translate-middle"
                    style={{ zIndex: 1 }}
                />

                <div className='position-absolute bottom-20'>
                    <img src="./images/tag.PNG" alt="" className='h-[80px] w-[200px]' />
                </div>
            </div>
        </Container>


    );
};

export default Hero;