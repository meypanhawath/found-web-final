import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <>
    <Navbar />
    <section className='max-w-screen-xl container mx-auto grid grid-cols-[1.5fr_1fr]'>
      <div>
        <h1 className='text-heading font-heading my-title leading-heading'>Build Your Professional Portfolio in Minutes</h1>
        <p className='font-desc text-desc'>Crevo is redefining website design—its intuitive interface lets you create, manage, and customize your site with ease.</p>
      </div>
    </section>
    </>
  )
}

export default Home