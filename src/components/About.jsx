import React,{useEffect} from "react";
import { FaArrowRightLong } from "react-icons/fa6";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({duration: 1000});
      }, [])
    return (
        <>
            <div className="about w-full h-screen flex items-center justify-between px-20 overflow-hidden z-10">
                <div className="about-content max-w-lg"  data-aos="fade-right">
                    <p className='text-indigo-500 font-semibold'>ABOUT US</p>
                    <h1 className='text-3xl font-semibold'>
                    IT Solutions (Indian Tech Solutions)</h1>
                    <p className='text-xl mt-5 mb-5 opacity-50'>Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et.
                        Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam
                        nam ipsum tenetur suscipit voluptatum nam et est corrupti.</p>
                    <button className='flex items-center gap-2 rounded-md w-fit px-5 py-2 mt-10 font-semibold bg-indigo-600 text-white hover:bg-indigo-500'>Read more <FaArrowRightLong /></button>
                </div>
                <img src="./src/assets/About us img.png" alt="" width="400px"  data-aos="fade-left"/>
            </div>
        </>
    )
}

export default About