import React from 'react';
import Btn from '../Button/button';

const Service = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                {/* Left Column */}
                <div className='col-lg-6 col-md-12 col-sm-12 position-relative mt-lg-5 py-lg-5'>
                    <h2 className="text-[#FF6868] fw-bold my-5">Our Story & Services</h2>
                    <h1 className='fw-bold'>Our Culinary Journey <br /> And Services</h1>
                    <p className='w-lg-[50%] my-5 mx-3'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                    <Btn value={"Explore"} />
                </div>

                {/* Right Column */}
                <div className='col-lg-6 col-md-12 col-sm-12 pt-5 mt-5'>
                    {/* Service Cards */}
                    <div className='row g-4'>
                        {/* Service 1 - Catering */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='shadow bg-white rounded-[20px] text-center p-3'>
                                <img
                                    src="./images/gift (1).png"
                                    alt="Catering"
                                    className="img-fluid mx-auto"
                                />
                                <h3 className="fs-5 mt-3 text-[#5FE26C]">Catering</h3>
                                <p className="text-[#90BD95] mx-3">Delight your guests with our flavors and presentation</p>
                            </div>
                        </div>

                        {/* Service 2 - Fast delivery */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='shadow bg-white rounded-[20px] text-center p-3'>
                                <img
                                    src="./images/gift (4).png"
                                    alt="Fast delivery"
                                    className="img-fluid mx-auto"
                                />
                                <h3 className="fs-5 mt-3 text-[#5FE26C]">Fast delivery</h3>
                                <p className="text-[#90BD95] mx-3">We deliver your order promptly to your door</p>
                            </div>
                        </div>
                    </div>

                    <div className='row g-4 mt-5'>
                        {/* Service 3 - Online Ordering */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='shadow bg-white rounded-[20px] text-center p-3'>
                                <img
                                    src="./images/gift (3).png"
                                    alt="Online Ordering"
                                    className="img-fluid mx-auto"
                                />
                                <h3 className="fs-5 mt-3 text-[#5FE26C]">Online Ordering</h3>
                                <p className="text-[#90BD95] mx-3">Explore menu & order with ease using our Online Ordering</p>
                            </div>
                        </div>

                        {/* Service 4 - Gift Cards */}
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='shadow bg-white rounded-[20px] text-center p-3'>
                                <img
                                    src="./images/gift (2).png"
                                    alt="Gift Cards"
                                    className="img-fluid mx-auto"
                                />
                                <h3 className="fs-5 mt-3 text-[#5FE26C]">Gift Cards</h3>
                                <p className="text-[#90BD95] mx-3">Give the gift of exceptional dining with Foodi Gift Cards</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Service;
