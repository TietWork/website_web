'use client';
import React, { useLayoutEffect } from 'react';

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    // Cleanup function
    return () => tl.kill();
  }, []);
  return (
    <div className="header header-project1">
      <div className="container mt-100">
        <div className="row align-items-end">
          <div className="col-lg-7">
            <div className="md-mb30">
              <h1 className="fz-120">
                IoT Based Smart Locks.
              </h1>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div>
              <p>
              Revolutionizing security with IoT-enabled smart locks for seamless access and control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
