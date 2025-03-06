import React, { useState } from 'react';
import './Home.css'
import Header from '../../components/Header/Header'
import BrowserLaptops from '../../components/BrowserLaptops/BrowserLaptops'
import LaptopDisplay from '../../components/LaptopDisplay/LaptopDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
function Home() {

    const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <BrowserLaptops category={category} setCategory={setCategory}/>
      <LaptopDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
