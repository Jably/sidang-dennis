// src/Opening.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import '../styles.css'; // Import your CSS styles

const Opening = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const opening = () => {
    const box = document.querySelector('.box');
    const icon = box.querySelector('.fas');
    const text = box.querySelector('.judul');
    const paragraf = box.querySelector('.paragraf');
    const button = box.querySelector('.btn-77');
    
    box.classList.add('boxClick');
    icon.style.display = 'none'; // Hide the play icon

    // Listen for the end of the animation
    box.addEventListener('animationend', function() {
      text.style.display = 'block'; // Show the title text after the animation ends
      paragraf.style.display = 'block';
      button.style.display = 'block';
      setTimeout(() => {
        text.style.opacity = 1; // Fade in the text
        paragraf.style.opacity = 1;
        button.style.opacity = 1;
      }, 10); // Timeout to ensure display is set before opacity change
    }, { once: true }); // Use { once: true } to remove the listener after it fires
  };

  const transisi = () => {
    const circle = document.querySelector('.circle');
    circle.style.display = 'flex'; // Show circle with flexbox
    const big = document.querySelector('.big');
    big.style.display = 'flex'; // Show big circle with flexbox
    const tri = document.querySelector('.tri');
    tri.style.display = 'flex'; // Show triangle with flexbox

    setTimeout(() => {
      navigate('/home'); // Redirect after all animations
    }, 6000); // Change this to the total duration of all animations
  };

  return (
    <div className={`container ${isMobile ? 'mobile' : ''}`}>
      <div className="box" onClick={opening}>
        <i className="fas fa-play"></i>
        <h1 className="judul">Ngaa Den</h1>
        <p className="paragraf"> Ini Hadiah Dari Gua Den</p>
        <button className="btn-77" onClick={transisi}>Gas</button>
        <div className="circle">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="big">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="tri"></div>
      </div>
    </div>
  );
};

export default Opening;
