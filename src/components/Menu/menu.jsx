import React from 'react'
import Card from '../MenuCard/card'
const Menu = () => {
    return (

        <div className="d-flex flex-column align-items-center justify-content-center mx-auto text-center my-5" data-aos="fade-up"
        data-aos-duration="3000">
            <p className="text-[#FF6868] fw-bold mt-5">Customer Favorites</p>
            <h1>Popular Categories</h1>
            <Card />
        </div>

    )
}

export default Menu;