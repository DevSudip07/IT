import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Banner() {
    return (
        <>
            <div className="banner w-full h-screen flex items-center justify-between px-20 z-10">
                <div className="banner-content max-w-lg"  data-aos="zoom-in">
                    <h1 className='text-4xl font-semibold'>We offer modern solutions
                        for growing your business</h1>
                    <p className='text-xl mt-5 opacity-50'>We are team of talented designers making
                        websites <br />with Bootstrap</p>
                    <button className='flex items-center gap-2 rounded-md w-fit px-5 py-2 mt-10 font-semibold bg-indigo-600 text-white hover:bg-indigo-500'>Free consult <FaArrowRightLong /></button>
                </div>
                <img src="./src/assets/BANNER-IMAGE.png" alt="" width="400px" data-aos="zoom-in-up"/>
            </div>
        </>
    )
}

export default Banner