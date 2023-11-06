import React from 'react'
import Hero from '../components/Homepage/Hero';
import Register from '../components/Homepage/Register';
import Team from '../components/About/Team';

const Home = () => {
  return (
    <div className='homepage'>
      <Hero />
      <Register />
      <Team />
    </div>
  )
}

export default Home;
