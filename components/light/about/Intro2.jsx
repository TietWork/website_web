"use client";
import React, { useEffect } from "react";
import loadBackgroudImages from "@/common/loadBackgroudImages";


function Intro2() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="page-intro-about section-padding bord-thin-bottom mb-30">
      <div className="container">
      </div>
    </section>
  );
}

export default Intro2;
