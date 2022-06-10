import React from "react";
import './Home.css';
import ashik from '../../image/ashik.png';
import Portfolio from "../Portfolio/Portfolio";
import Collection from "../Collection/Collection";

const Home = () => {
  return (
    <div className="">
      <div class="hero min-h-screen bg-base-200 ">
        <div class="hero-content flex-col lg:flex-row">
          <div class="avatar mx-5">
            <div class="w-100 rounded-full ring-[#4bffa5] ring-[20px] ring-offset-2">
              <img src={ashik} />
            </div>
          </div>
          <div>
          <p class="py-3 text-3xl">Web developer</p>
            <h1 class="text-5xl font-bold">MD. ASHIKUR RAHMAN</h1>
           
            <button class="btn uppercase btn-accent border-2 border-[#4bffa5] rounded-full my-3 drop-shadow-lg">DOWNLOAD RESUME</button>
          </div>
        </div>
      </div>
      <Portfolio></Portfolio>
<Collection></Collection>
 
    </div>
  );
};

export default Home;
