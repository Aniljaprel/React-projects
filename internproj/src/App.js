import React from 'react'
import MainBanner from './MainBanner';
import NavBar from './NavBar';
import Mainbar from './Mainbar'
import About from './About';
import "./style.css"
import Footer from './Footer';
const App = () => {
  return (
    <div>
        <NavBar/>
        <MainBanner/>
        <Mainbar/>
        <About/>
        <Footer/>
        
    </div>
  )
}

export default App;