import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";

function FeaturesItem({ features }) {
    return (
        <>
            <h2 className='w-72 flex items-center gap-4 text-2xl text-[#012970] font-semibold py-4 pl-8 my-6 m-auto rounded-md bg-[#8D9EEE]'><FaRegCheckCircle /> {features.title}</h2>
        </>
    )
}

export default FeaturesItem