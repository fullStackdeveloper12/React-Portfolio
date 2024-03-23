import React from 'react'
import "./home.css"
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom'
import {FaArrowRight} from "react-icons/fa"

const home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title"><span>I'm Shubham Sharma </span>Full Stack Developer</h1>
          <p className="home__description">
            As a full-stack developer, I am dedicated to the art of crafting dynamic and user-centric web applications. With a passion for both front-end and back-end development, I thrive on bringing innovative ideas to life through seamless digital experiences.
          </p>

          <Link to="/about" className='button'>
            More About Me<span className='button__icon'><FaArrowRight/></span>
          </Link>
        </div>
      </div>




      <div className="color__block">
        
      </div>


    </section>
  )
}

export default home
