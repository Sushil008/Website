import React from 'react';
// import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import StupaImg from '../assets/stupa.jpg';


function Home() {
  return (
    <div>
    <Navbar />
    <h1 style={{ color: '#632020' }}>Turning ideas into reality....</h1>
    <h2 style={{ backgroundColor: '#4c2121', color: 'white', textAlign: 'left', width: 335 }}>
      Grow your business with us
    </h2>
    <img
  alt="HeroImg"
  src={StupaImg}
  width="100%" height="100%" // Enclosed in quotes
/>

    {/* <Hero
      cName="hero"
      heroImg=""
      title=""
      text=""
      buttonText="Grow your business with us"
      url="/"
      btnClass="show" */}
    
    <h2 style={{ color: '#632020', padding: '0.5rem', textAlign: 'center' }}>
      Our Services
    </h2>
    <p>We are ready to scale up your business with our great team.</p>
  </div>
  
  );
}

export default Home;


