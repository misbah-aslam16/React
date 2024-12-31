import React from 'react';
import { BiCopyright, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { PiTwitterLogo, PiYoutubeLogoLight } from "react-icons/pi";

const Footer = () => {
    return (
        <div className='container-fluid py-5'>
            <div className='row d-flex flex-wrap justify-content-center my-5'>
                {/* Logo and Description Section */}
                <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
                    <img src="./images/logo.PNG" alt="Logo" className="img-fluid mb-4 mx-auto" />
                    <p className='mx-auto'>Savor the artistry where <br /> every dish is a culinary <br /> masterpiece</p>
                </div>

                {/* Useful Links Section */}
                <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
                    <p className='fw-bold'>Useful Links</p>
                    <ul className='list-unstyled'>
                        <li>About us</li>
                        <li>Events</li>
                        <li>Blogs</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                {/* Main Menu Section */}
                <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
                    <p className='fw-bold'>Main Menu</p>
                    <ul className='list-unstyled'>
                        <li>Home</li>
                        <li>Offers</li>
                        <li>Menus</li>
                        <li>Reservation</li>
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
                    <p className='fw-bold'>Contact Us</p>
                    <ul className='list-unstyled'>
                        <li>example@email.com</li>
                        <li>+64 958 248 966</li>
                        <li>Social media</li>
                    </ul>
                </div>
            </div>
            <div className='d-flex flex-wrap justify-content-around text-center gap-5 mt-5'>
                <p className='d-flex gap-5'>
                <BiLogoFacebook  size={35}/>
                <BiLogoInstagram size={35}/>
                <PiTwitterLogo size={35}/>
                <PiYoutubeLogoLight size={35}/>
                </p>
                <p className='d-flex'>Copyright  <BiCopyright className='mt-1'/> 2023 Dscode | All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
