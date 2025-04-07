import React from 'react'
import amazonLogo from '../assets/amazon.png'
import meundiesLogo from '../assets/meundies.png'
import sitepointLogo from '../assets/sitepoint.png'
import slackLogo from '../assets/slack.png'
import woocommerceLogo from '../assets/woocommerce.png'


const CompanyLogo = () => {

  const logos = [amazonLogo, meundiesLogo, sitepointLogo, slackLogo, woocommerceLogo]

  return (
    <div className='w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start'>
      <div className='w-[300px] shrink-0 text-gray-600 border-l-4 border-blue-500 bg-white py-2 px-5 z-10 sm:text-base text-xl font-semibold text-left'>Proud Partner at <br/> hubspot & Segment</div>
    
      <div className='flex animate-marquee whitespace-nowrap'>

        {logos.map((logo, index) => 
          <img key={index} src={logo} alt="company logos" className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'/>
        )}

        {logos.map((logo, index) => 
          <img key={`duplicate-${index}`} src={logo} alt="company logos" className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all'/>
        )}
        
      </div>
    </div>
  )
}

export default CompanyLogo