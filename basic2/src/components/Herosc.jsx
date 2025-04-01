import React from 'react'

const Herosc = () => {
  return (
    <section className='container mx-auto flex flex-col md:flex-row justify-between pt-44 pb-6 px-4 sm:px-6 lg:px-8'>


      {/* Left Col */}
      <div className='w-full md:w-1/2 space-y-8 '>


        {/* star badge */}
          <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
            <span className='text-blue-600 group-hover:text-red-500 group-hover:scale-110 transition-transform'>✦</span>
            <span className='text-sm font-medium'>Jump start your growth</span>
          </div>


        {/* Heading */}
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>We boost the growth for 
          <span className='text-blue-600 relative inline-block'> Startup to Fortune 500</span> companies
          <span className='hover:opacity-80'>⏰</span>
        </h1>


        {/* Description */}
        <p className='text-gray-600 text-lg md:text-xl lg:text-2xl max-w-xl'>Get most accurate leads, sales people training and conversions, tools and more - all within the same one billing.</p>


        {/* Input Box */}



      </div>

      {/* Right Col*/}
      <div className='w-full md:w-1/2'>
        Right
      </div>

    </section>
  )
}

export default Herosc