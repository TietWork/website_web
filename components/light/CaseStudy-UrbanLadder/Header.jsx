"use client";
import React, { useEffect, useLayoutEffect } from "react";

import loadBackgroudImages from "@/common/loadBackgroudImages";
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
    tl.fromTo(
      ".header .container",
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      "-=0"
    );

    // Cleanup function
    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header header-project3 bg-img d-flex align-items-end"
      data-background="/light/assets/imgs/works/full/urban.png"
      data-overlay-dark="9"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="caption">
              <h2 style={{textTransform:"uppercase"}}>
                Digital Transformation for :
                Urban Ladder
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
