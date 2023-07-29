import React from 'react'
import { Link } from 'react-router-dom'
import dogVideo from '../assets/DogVideo.mp4';
import { FaPaw } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="homepage">
        <div className="homepage-wrapper">    
            <div>
                <h1><FaPaw className="paw" />We Love Dogs!</h1>
                <p>Make your <strong>DOG</strong> feel as special as they make <strong>YOU!</strong></p>
            </div>
            <button id="shop-btn"><Link to="/shop">Shop</Link></button>
        </div>
        <video autoPlay muted loop id="video" src={dogVideo}></video>
    </div>
  )
}

export default Home