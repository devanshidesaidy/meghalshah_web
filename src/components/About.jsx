import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Left Side: Image with "8+ Years Experience" overlay */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center relative">
          {/* Placeholder for image */}
          <div className="w-72 h-96 md:w-96 md:h-[500px] bg-gray rounded-lg overflow-hidden shadow-2xl">
            {/* <img src="/path-to-your-about-image.jpg" alt="About Me" className="w-full h-full object-cover" /> */}
          </div>
          <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 bg-primary text-white p-4 md:p-6 rounded-lg shadow-xl text-center">
            <p className="text-3xl md:text-5xl font-bold font-title">8+</p>
            <p className="text-sm md:text-base font-subtitle">
              Years Experience
            </p>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="md:w-1/2 md:pl-12 lg:pl-24 text-center md:text-left">
          <p className="text-primary font-subtitle mb-2 text-sm">About Me</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-title mb-6">
            Welcome to Tonu, Best Software Services
          </h2>
          <p className="text-gray font-subtitle mb-4 text-base md:text-lg leading-relaxed">
            I have 8+ years of experiences in Software Development for give you
            better services.
          </p>
          <p className="text-gray font-subtitle mb-6 text-base md:text-lg leading-relaxed">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div>
              <p className="text-4xl font-bold text-primary font-title">500+</p>
              <p className="text-gray font-subtitle">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary font-title">52+</p>
              <p className="text-gray font-subtitle">Awards Win</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary font-title">2M+</p>
              <p className="text-gray font-subtitle">Happy clients</p>
            </div>
          </div>
          {/* <button className="bg-primary text-white font-subtitle px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
            Download CV
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default About;
