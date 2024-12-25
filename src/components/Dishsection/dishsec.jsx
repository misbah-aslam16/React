import React from 'react'
import DishCard from '../DishCard/dishcard'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Dishsec = () => {
    return (
        <div className='mx-5'>
            <h2 className="text-[#FF6868] fw-bold">Special Dishes</h2>
            <div className='d-flex flex-wrap justify-content-between '>
                <h1>Standout Dishes <br /> From Our Menu</h1>
                <div className='d-flex gap-5 mt-sm-5'>
                    <IoIosArrowBack size={40} className='shadow bg-white rounded-full p-2' />
                    <IoIosArrowForward size={40} className='shadow bg-[#39DB4A] rounded-full p-2' />
                </div>
            </div>
            <DishCard />
        </div>
    )
}

export default Dishsec;