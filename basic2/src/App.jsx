import { useState } from 'react'
import Navbar from './components/Navbar'
import Herosc from './components/Herosc'
import CompanyLogo from './components/CompanyLogo'

function App() {

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-1'></div>
      <div className='overflow-hidden '> 
        <Navbar />
        <Herosc />
        <CompanyLogo />
      </div>
    </main>
  )
}

export default App
