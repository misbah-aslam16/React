import React from 'react'
import Card from '../MenuCard/card'
const Menu = () => {
    return (

        <div className="d-flex flex-column align-items-center justify-content-center mx-auto text-center my-5">
            <p className="text-[#FF6868] fw-bold">Customer Favorites</p>
            <h1>Popular Categories</h1>
            <Card />
        </div>

    )
}

export default Menu;