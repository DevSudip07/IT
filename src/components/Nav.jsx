import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import callButton from "./script"

function Nav() {
    return (
        <>
            <div className="navbar fixed w-full h-20 flex items-center justify-between bg-indigo-400 text-white px-10 z-20">
                <img src="./src/assets/LOGO.png" alt="" width="220px" />
                <ul className='flex items-center gap-7 text-lg font-medium'>
                    <li className='hover:text-indigo-700'><a href="">Home</a></li>
                    <li className='hover:text-indigo-700'><a href="">About</a></li>
                    <li className='hover:text-indigo-700'><a href="">Services</a></li>
                    <li className='hover:text-indigo-700'><a href="">Portfolio</a></li>
                    <li className='hover:text-indigo-700'><a href="">Team</a></li>
                    <li className='hover:text-indigo-700'><a href="">Blog</a></li>
                    <li><button onClick={callButton} className='call-btn flex items-center gap-2 rounded-md w-fit px-5 py-1.5 bg-indigo-600 hover:bg-indigo-500'>Contact <FaArrowRightLong /></button></li>
                </ul>
            </div>
        </>
    )
}

export default Nav