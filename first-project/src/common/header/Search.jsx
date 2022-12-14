import React from 'react'
// import {logo} from "../assets/images/logo.svg"
import { Link } from 'react-router-dom'
const Search = () => {
  window.addEventListener("scroll",function(){
    const search=document.querySelector(".search")
    search.classList.toggle("active", this.window.scroll >100)
  })
  return (
    <>
      <section className='search'>
        <div className="container c-flex">
          <div className="logo width">
            {/* <img src={logo} alt="" className="src" /> */}
            <h1>AJStore</h1>
          </div>
          <div className="search-box f-flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder='search and hit to enter' />
            <span>All category</span>

          </div>
<div className="icon f-flex width">
  <i className="fa fa-user icon-circle"></i>

</div>
<div className="cart"></div>
<Link to='/cart'>
  <i className='fa fa-shopping-bag icon-circle'>
  <span className='span'>0</span>
  </i>

</Link>

        </div>


      </section>
    </>
  )
}

export default Search
