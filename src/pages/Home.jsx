import React from 'react'
import Hero from '../components/Homepage/Hero';
import Register from '../components/Homepage/Register';
import Team from '../components/About/Team';
import News from '../components/News/News';

const Home = () => {
  return (
    <div className='homepage'>
      <Hero />
      <News />
      <Register />
      <Team />
    </div>
  )
}

export default Home;
