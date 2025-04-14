import React from 'react'
import monitorImage from '../assets/monitor-card.webp'
import { MdOutlineDoubleArrow } from "react-icons/md";

const MonitorSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
                {/* Left */}
                <div className='md:w-1/2 w-full'>
                    <p className='text-orange-500 font-semibold'>MONITOR</p>
                    <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-3/5'>
                        Introducing best mobile carousels
                    </h2>
                    <p className='text-gray-600 mb-8'>
                       before the introduction of mobile carousels, users had to navigate through multiple pages or sections to find the information they needed.
                    </p>
                    <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 hover:text-blue-700 transition-all'>
                        Explore scheduling solutions
                        <MdOutlineDoubleArrow className='size-7'/>
                    </a>
                </div>
                {/* Right */}
                <div className='md:w-1/2 w-full'>
                    <img src={monitorImage} alt="ScheduleImage" className='w-full h-auto' />
                </div>
            </div>
        </section>
  )
}

export default MonitorSection