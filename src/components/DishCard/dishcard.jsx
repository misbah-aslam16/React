import React from 'react';
import Container from 'react-bootstrap/Container';
import './dishCard.css';  // Make sure to import the CSS file

const DishCard = () => {
    return (
        <Container className="py-5">
            <div className="d-flex flex-wrap justify-content-between gap-5">
                {/* Card 1 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 shadow bg-white rounded-[20px] text-center p-3 m-2 mx-auto dish-card" data-aos="zoom-out" data-aos-delay="300">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto">
                        <img
                            src="./images/Fattoush salad.png"
                            alt="salad"
                            className="img-fluid"
                        />
                    </div>
                    <h3 className="fs-5 mt-4">Fattoush salad</h3>
                    <p className="text-muted">Description of the item</p>
                    <div className='d-flex justify-content-between mt-4 mx-2 fs-5 fw-bold'>
                        <p><span className='text-[#FF6868]'>$</span>24.00</p>
                        <p className='d-flex gap-2 '><img src="./images/star.png" className='h-5 w-5 mt-1.5' />4.9</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 shadow bg-white rounded-[20px] text-center p-3 m-2 mx-auto dish-card" data-aos="zoom-out" data-aos-delay="300">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto">
                        <img
                            src="./images/Vegetable salad.png"
                            alt="salad"
                            className="img-fluid"
                        />
                    </div>
                    <h3 className="fs-5 mt-4">Vegetable salad</h3>
                    <p className="text-muted">Description of the item</p>
                    <div className='d-flex justify-content-between mt-4 mx-2 fs-5 fw-bold'>
                        <p><span className='text-[#FF6868]'>$</span>26.00</p>
                        <p className='d-flex gap-2 '><img src="./images/star.png" className='h-5 w-5 mt-1.5' />4.6</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 shadow bg-white rounded-[20px] text-center p-3 m-2 mx-auto dish-card" data-aos="zoom-out" data-aos-delay="300">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto">
                        <img
                            src="./images/Egg salad.png"
                            alt="salad"
                            className="img-fluid"
                        />
                    </div>
                    <h3 className="fs-5 mt-4" data-aos="zoom-out">Egg vegi salad</h3>
                    <p className="text-muted">Description of the item</p>
                    <div className='d-flex justify-content-between mt-4 mx-2 fs-5 fw-bold'>
                        <p><span className='text-[#FF6868]'>$</span>23.00</p>
                        <p className='d-flex gap-2 '><img src="./images/star.png" className='h-5 w-5 mt-1.5' />4.5</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default DishCard;
