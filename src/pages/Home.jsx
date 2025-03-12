import React from 'react'
import Hero from '../components/Homepage/Hero';
import Register from '../components/Registration/Register';
import Team from '../components/About/Teaml';
import News from '../components/News/News';
import Mission from '../components/Mission/Mission';

const Home = () => {
  return (
    <div className='homepage'>
      <Hero />
      <Mission />
      <Register />
      <News />
      <Team />
    </div>
  )
}

export default Home;
