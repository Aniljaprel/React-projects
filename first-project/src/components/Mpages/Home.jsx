import React from 'react'
import Categories from './Categories'
import SlideCard from './SlideCard'

export const Home = () => {
  return (
    <>
        <section className="home">
          <div className="container d-flex">
           <Categories />
           <SlideCard />
          </div>
        </section>
    </>
  )
}
