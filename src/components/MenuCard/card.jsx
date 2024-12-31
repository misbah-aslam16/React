import React from 'react';
import Container from 'react-bootstrap/Container';

const Card = () => {
    return (
        <Container className="py-5 mx-auto mt-2">
            <div className="row gap-5 justify-content-center">
                {/* Card 1 */}
                <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                    <div className="shadow bg-white rounded-[40px] text-center p-3">
                        <div
                            className="bg-[#C1F1C6] rounded-circle d-flex align-items-center justify-content-center mx-auto"
                            style={{ width: '100px', height: '100px' }}
                        >
                            <img
                                src="./images/pngwing 4.png"
                                alt="Main Dish"
                                className="img-fluid"
                                style={{ maxWidth: '70%', maxHeight: '70%' }}
                            />
                        </div>
                        <h3 className="fs-5 mt-3">Main Dish</h3>
                        <p className="text-muted">(86 dishes)</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                    <div className="shadow bg-white rounded-[40px] text-center p-3">
                        <div
                            className="bg-[#C1F1C6] rounded-circle d-flex align-items-center justify-content-center mx-auto"
                            style={{ width: '100px', height: '100px' }}
                        >
                            <img
                                src="./images/pngwing 6.png"
                                alt="Breakfast"
                                className="img-fluid"
                                style={{ maxWidth: '70%', maxHeight: '70%' }}
                            />
                        </div>
                        <h3 className="fs-5 mt-3">Breakfast</h3>
                        <p className="text-muted">(12 items)</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                    <div className="shadow bg-white rounded-[40px] text-center p-3">
                        <div
                            className="bg-[#C1F1C6] rounded-circle d-flex align-items-center justify-content-center mx-auto"
                            style={{ width: '100px', height: '100px' }}
                        >
                            <img
                                src="./images/pngwing 3.png"
                                alt="Dessert"
                                className="img-fluid"
                                style={{ maxWidth: '70%', maxHeight: '70%' }}
                            />
                        </div>
                        <h3 className="fs-5 mt-3">Dessert</h3>
                        <p className="text-muted">(48 items)</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                    <div className="shadow bg-white rounded-[40px] text-center p-3">
                        <div
                            className="bg-[#C1F1C6] rounded-circle d-flex align-items-center justify-content-center mx-auto"
                            style={{ width: '100px', height: '100px' }}
                        >
                            <img
                                src="./images/pngwing 7.png"
                                alt="Browse All"
                                className="img-fluid"
                                style={{ maxWidth: '70%', maxHeight: '70%' }}
                            />
                        </div>
                        <h3 className="fs-5 mt-3">Browse All</h3>
                        <p className="text-muted">(225 items)</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Card;
