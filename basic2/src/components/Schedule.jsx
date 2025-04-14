import React from 'react'
import scheduleImage from '../assets/stats.webp'
import { MdOutlineDoubleArrow } from "react-icons/md";


const Schedule = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
            {/* Left */}
            <div className='md:w-1/2 w-full'>
                <img src={scheduleImage} alt="ScheduleImage" className='w-full h-auto' />
            </div>
            {/* Right */}
            <div className='md:w-1/2 w-full'>
                <p className='text-orange-500 font-semibold'>SCHEDULE</p>
                <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>
                    Streamline Your Buisness<br/> with Smart Scheduling Solutions
                </h2>
                <p className='text-gray-600 mb-8'>
                   Take control of your time and resources with our smart scheduling solutions. Our platform offers a user-friendly interface, real-time updates, and seamless integration with your existing systems. Whether you're managing appointments, meetings, or project timelines, our tools are designed to enhance productivity and ensure that you never miss a beat. Experience the future of scheduling today and watch your business thrive. 
                </p>

                <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 hover:text-blue-700 transition-all'>
                    Explore scheduling solutions
                    <MdOutlineDoubleArrow className='size-7'/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Schedule