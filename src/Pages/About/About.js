import React from 'react';
import ashik2 from "../../image/ashik2.png";

const About = () => {
    return (
        <div className="bg-[#0e0e0e]">
            <div className="block lg:grid gap-4 grid-cols-2 mt-5 ">
                <div>
                   <p className="text-5xl mt-10"> About </p>
                </div>
                <div className="">
                    <img src={ashik2} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default About;