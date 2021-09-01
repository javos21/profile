import React from 'react';
import ProfilePicture from "../images/Headshot3.jpeg";
import circuitbg from "../images/circuit-board.svg";

const Hero = () => {
    return (
        <div className="bg-hero-pattern h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                Hi! I'm Javed
            </h1>   
        </div>
    )
}

export default Hero;
