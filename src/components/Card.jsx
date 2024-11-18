import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";

function Card({ data }) {
    return (
        <>
            <div className="cardHover relative h-[340px] overflow-hidden rounded-lg"  data-aos="flip-right">
                <div className="card w-72 py-5 bg-indigo-300 rounded-lg">
                    <img src={data.img} alt="" width="250px" className='m-auto h-52' />
                    <h3 className='text-center mt-8 font-semibold text-lg'>{data.title}</h3>
                </div>
                <div className="des absolute w-72 h-80 py-5 top-96 rounded-lg bg-indigo-300">
                    <h3 className='text-center mt-8 font-semibold text-lg'>{data.title}</h3>
                    <p className='p-5 my-2'>{data.des}</p>
                    <RiVerifiedBadgeFill className='text-indigo-600 text-4xl float-end mr-8 mt-[-15px]'/>
                </div>
            </div>
        </>
    )
}

export default Card