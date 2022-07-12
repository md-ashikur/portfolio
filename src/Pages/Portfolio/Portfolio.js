import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <div className="hero cover bg-fixed ">
        <div className="hero-overlay bg-opacity-60 "></div>
      </div>

      <div class="grid lg:grid-cols-2 place-items-center my-10">
        <div className="bg-gradient-to-r from-[#00f298] via-[#02cfb4] to-[#02cfb4] rounded my-5">
          <div class="hero">
            <div class=" bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
              <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">WEBSITE</h1>
                <p class="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              <Link to="/website"> <button class="btn btn-primary uppercase">EXPLORE</button></Link>
              </div>
            </div>
          </div>
        </div>
        {/* ==============================graphic============= */}
        <div className="bg-[white] my-5 rounded">
          <div class="hero" >
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
              <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">GRAPHIC</h1>
                <p class="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <Link to="/graphic"> <button class="btn btn-primary uppercase">EXPLORE</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
