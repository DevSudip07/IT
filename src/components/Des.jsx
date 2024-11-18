import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

function Des() {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <>
            <div className="description-container w-full h-3/5 flex justify-center">
                <div className="description w-9/12 m-auto flex items-center justify-around py-5">
                    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                        <div className="counter w-56 py-8 bg-[#C2EDFF] rounded-md text-center">
                            {counterOn && <CountUp className='text-3xl font-semibold text-[#012970]' start={0} end={500} duration={2} delay={0} />}
                            <span className='text-3xl font-semibold text-[#012970]'>+</span> <br />
                            <h2 className='font-semibold text-xl text-[#012970] mt-2'>Happy Clients</h2>
                        </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                        <div className="counter w-56 py-8 bg-[#5CAEFF] rounded-md text-center">
                            {counterOn && <CountUp className='text-3xl font-semibold text-[#012970]' start={0} end={1123} duration={2} delay={0} />}
                            <span className='text-3xl font-semibold text-[#012970]'>+</span> <br />
                            <h2 className='font-semibold text-xl text-[#012970] mt-2'>Projects</h2>
                        </div>
                    </ScrollTrigger>

                    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                        <div className="counter w-56 py-8 bg-[#1582FF] rounded-md text-center">
                            {counterOn && <CountUp className='text-3xl font-semibold text-[#012970]' start={0} end={24} duration={2} delay={0} />}
                            <span className='text-3xl font-semibold text-[#012970]'>/</span>
                            {counterOn && <CountUp className='text-3xl font-semibold text-[#012970]' start={0} end={7} duration={2} delay={0} />} <br />
                            <h2 className='font-semibold text-xl text-[#012970] mt-2'>Support</h2>
                        </div>
                    </ScrollTrigger>
                </div>
            </div>
        </>
    )
}

export default Des