'use client';
import React, { useEffect, useLayoutEffect } from 'react';

import loadBackgroudImages from '@/common/loadBackgroudImages';
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
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div className="header header-project1">
      <div className="container pt-100">
        <div className="row align-items-end">
          <div className="col-lg-8 md-mb50">
            <div>
              <h3 >
              Real-Time Skin Radiation Detection for Early Cancer Diagnosis
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
