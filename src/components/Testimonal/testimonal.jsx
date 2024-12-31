import React from 'react';

const Testimonal = () => {
    return (
        <div className='container-fluid mt-5'>
            <div className='row'>
                {/* Left Column */}
                <div className='col-lg-6 col-md-12 col-sm-12 position-relative mt-lg-5 py-lg-5'>
                    {/* Background Image */}
                    <img 
                        src="./images/Rectangle 37.png" 
                        alt="Background" 
                        className='img-fluid position-relative mx-auto'
                        style={{ width: '100%', height: 'auto' }}
                    />

                    {/* Foreground Image */}
                    <img 
                        src="./images/Mask group (1).png" 
                        alt="Foreground" 
                        className='position-absolute top-50 start-50 translate-middle'
                        style={{
                            zIndex: 1, 
                            maxWidth: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '50%', // Ensure it scales on smaller screens
                        }}
                    />
                </div>

                {/* Right Column */}
                <div className='col-lg-6 col-md-12 col-sm-12 pt-5 mt-5'>
                    <h2 className="text-[#FF6868] fw-bold mb-5">Testimonials</h2>
                    <h1 className='fw-bold'>
                        What Our Customers <br /> Say About Us
                    </h1>
                    <p className='my-5 mx-3'>
                        “I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! 
                        The attention to detail in presentation and service was impeccable”
                    </p>
                    <img 
                        src="./images/testimonal.PNG" 
                        alt="Testimonial" 
                        className="img-fluid" 
                        style={{ maxWidth: '100%' }} 
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonal;
