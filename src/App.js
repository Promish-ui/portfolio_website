
import React from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Hero from './component/herosection/Hero';
import Footer from './component/footer/Footer';
import Slider from './component/Slider/Slider';
import Service from './component/Service/Service';
import Work from './component/work/Work';

function App() {
  return (
   <>
<Navbar />

<Slider />
<Service/>
<Work/>


<Footer/>
   </>
  );
}

export default App;
