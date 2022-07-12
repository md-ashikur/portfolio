import React from "react";
import AnimatedText from "react-animated-text-content";
import { Link } from "react-router-dom";
import ashik2 from "../../image/ashik2.png";

const About = () => {
  return (
    <div className="bg-[#22252c] py-10">
      <div className="block lg:grid gap-4 grid-cols-2 mt-5 ">
        <div
          className="pt-14 px-14 lg:pl-28"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <p className=" textColor text-5xl mt-10"> ABOUT ME</p>

          <p className="py-5 font-light text-[white]">
            Hello! I’m Ashik. Frontend developer Experienced with all stages of
            the development cycle for dynamic web projects. Having an in-depth
            knowledge including advanced HTML5, CSS3, Bootstrap, tailwindcss,
            JavaScript, jQuery, React JS.
          </p>

          <ul class="list-none font-light text-xl">
            <li>
              <span className=" textColor">FULL NAME:</span> MD Ashikur Rahman
            </li>
            <li>
              <span className=" textColor">DATE OF BIRTH:</span> 22 January 2002
            </li>
            <li>
              <span className=" textColor">ADDRESS:</span> Silimpur,
              Bogura-5800, Bangladesh
            </li>
            <li>
              <span className=" textColor">PHONE:</span> +8801705-433694.
              +8801905-462300{" "}
            </li>
            <li>
              <span className=" textColor">EMAIL:</span> ashik76690@gmail.com{" "}
            </li>
          </ul>
          <h2 className=" textColor text-3xl mt-10">MY INTERESTS</h2>
        </div>
        <div
          className=""
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <img src={ashik2} alt="" />
        </div>
      </div>
     
      {/* ============MY INTERESTs================= */}

      <div class="bg-gradient-to-r from-[#02cfb4] via-[#02cfb4] to-[#02cfb4] py-10 grid  grid-flow-row-dense grid-cols-1 lg:grid-cols-3 grid-rows-1">
        <div
          class="col-span-2 text-center text-[#22252c]"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <h2 className=" text-4xl font-bold ">
            HIRE ME FOR YOUR AWESOME PROJECT
          </h2>
          <p className="px-5 lg:px-0">
            I am available for Freelance projects that depends on your project
            value.<br></br> Hire me and get your project done!
          </p>
        </div>

        <div
          className="flex items-center justify-center lg:justify-start "
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <Link to="/contact">
            <button class="btn duration-300 hover:scale-[0.96] animate-bounce px-20 lg:my-0 my-5 uppercase text-xl hover:text-[#02cfb4]">
              HIRE ME
            </button>
          </Link>
        </div>
      </div>

       {/* =====================education================== */}
      <div className="flex justify-center">
      <ul class="steps steps-vertical">
        <li class="step step-primary">Register</li>
        <li class="step step-primary">Choose plan</li>
        <li class="step">Purchase</li>
        <li class="step">Receive Product</li>
      </ul>
      </div>
    </div>
  );
};

export default About;
