import React from "react";
import "./Home.css";
import ashik from "../../image/ashik.png";
import Portfolio from "../Portfolio/Portfolio";
import Collection from "./Collection/Collection";
import Contact from "../Contact/Contact";
import AnimatedText from "react-animated-text-content";
import TypeAnimation from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from "react-router-dom";
import resume  from './resume.pdf';
AOS.init();

const Home = () => {
  return (
    <div  className="">
      <div class="hero min-h-screen bg-base-200 ">
        <div  class="hero-content flex-col lg:flex-row">
          <div class="avatar mx-5">
            <div class="w-100 rounded-full ring-[#4bffa5] ring-[20px] ring-offset-2">
              <img src={ashik} alt="my pic" />
            </div>
          </div>
          <div>
            <TypeAnimation
              cursor={true}
              sequence={[
                  
                'Web developer',
                2000,
                'React Developer',
                2000,
                'Web Designer',
                2000,
              ]}
              wrapper="h3"
              className="text-2xl text-[#4bffa5]"
              repeat={Infinity}
            />
            <p class="py-3 text-3xl"></p>
            <AnimatedText
              type="wave"
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="float"
              interval={0.09}
              duration={0.9}
              tag="p"
              className="animated-paragraph text-5xl"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              MD. ASHIKUR RAHMAN
            </AnimatedText>

            <a href={resume} download='resume'><button class="btn uppercase btn-accent border-2 border-[#4bffa5] rounded-full my-3 drop-shadow-lg">
              DOWNLOAD RESUME
            </button> </a>
          </div>
        </div>
      </div>
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"   data-aos-duration="1000">
      <Portfolio></Portfolio>
      </div>
     <div data-aos="fade-up"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine"   data-aos-duration="1000">
       <Collection></Collection>
     </div>
     
      <div  data-aos="fade-up"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine"   data-aos-duration="1000">
         <Contact></Contact>
      </div>
     
    </div>
  );
};

export default Home;
