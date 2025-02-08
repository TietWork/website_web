'use client';
import React, { useEffect, useLayoutEffect } from 'react';

import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 300 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 60 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    // Cleanup function
    return () => tl.kill();
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div
      className="header section-padding"
      style={{
        backgroundImage: `url('/light/assets/imgs/header/processfinal.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '45vh',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center', // Centers content vertically
        justifyContent: 'center', // Centers content horizontally
      }}
      data-overlay-dark="4"
    >
      <div
        className="container"
        style={{
          textAlign: 'center',
          padding: '0 15px', // Adds responsive padding
          maxWidth: '90%', // Ensures title fits well on smaller screens
        }}
      >
        <h1
          className=""
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 6rem)', // Responsive font size
            color: '#fff', // Ensures the title is visible
            wordWrap: 'break-word', // Prevents text overflow
            lineHeight: '1.3', // Adjusts spacing between lines
          }}
        >
          PROCESS
        </h1>
      </div>
    </div>
  );
}

export default Header;
