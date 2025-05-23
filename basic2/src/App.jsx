import Navbar from './components/Navbar'
import Herosc from './components/Herosc'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import Schedule from './components/Schedule'
import MonitorSection from './components/MonitorSection'
import Priceing from './components/Priceing'
import ServicesSection from './components/ServicesSection'
import TestimonialSection from './components/TestimonialSection'
import NewsLetterSection from './components/NewsLetterSection'
import FooterSection from './components/FooterSection'

function App() {

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-1'></div>
      <div className='overflow-hidden '> 
        <Navbar />
        <Herosc />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <Schedule />
        <MonitorSection />
        <Priceing />
        <ServicesSection />
        <TestimonialSection />
        <NewsLetterSection />
        <FooterSection />
      </div>
    </main>
  )
}

export default App
