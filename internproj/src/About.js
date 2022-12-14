import React from 'react'

const About = () => {
  return (
    <section id="about">
    <div className="container mt-4 pt-4">
        <h1 className="text-center">Features</h1>
        <div className="row mt-4">
            <div className="col-lg-4">
                <img src={require('./images/nature.jpg')} classNameName= "imageAboutPage" alt=""/>
            </div>

            <div className="col-lg-8">
                <p> Buliding Features
                    
                </p>
                <button className='btn'>Try it</button>
                
            </div>
        </div>
    </div>
    </section>
  )
}

export default About