"use client";
import React, { useLayoutEffect } from "react";

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
  return (
    <div className="header header-project1">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-7">
            <div className="md-mb30">
              <h3 className="">
                Transforming Hollywood Casting with AI-Powered Solutions by Face
                Detection.
              </h3>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div>
              <p>
                Our advanced facial recognition technology streamlines casting
                by verifying actor resumes, reducing casting time by 80%, and
                ensuring precision in talent selection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
