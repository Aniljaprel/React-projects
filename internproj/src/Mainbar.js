import React from 'react'

const Mainbar = () => {
  return (
  
    <div className="containerbg">
        <div className="card">
            <div className="imgbox">
                <a href="#">
                <img src={require('./images/earth.png')} classNameName= "imagePage" alt=""/>
                </a>
               
            </div>
        </div>
        <div className="card">
            <div className="imgbox">
                <a href="#">
                <img src={require('./images/work culture.png')} classNameName= "imagePage2" alt=""/>
                </a>
               
            </div>
        </div>

    </div>
    )
}

export default Mainbar