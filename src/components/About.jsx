import BannerImage from "../../public/images/meghal_shah_banner.png";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Left Side: Image with "8+ Years Experience" overlay */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center relative">
          {/* Placeholder for image */}
          <div className="w-72 h-96 md:w-96 md:h-[500px] bg-black rounded-lg overflow-hidden shadow-2xl">
            <img
              src={BannerImage}
              alt="About Me"
              className="w-full h-full object-cover mix-blend-plus-lighter"
            />
          </div>
          <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 bg-primary text-white p-4 md:p-6 rounded-lg shadow-xl text-center">
            <p className="text-3xl md:text-5xl font-bold font-title">20+</p>
            <p className="text-sm md:text-base font-subtitle">
              Years Experience
            </p>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="md:w-1/2 md:pl-12 lg:pl-24 text-center md:text-left">
          <p className="text-primary font-subtitle mb-2 text-sm">
            Your Trusted Financial Strategist
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-title mb-2">
            Expert Financial Advisory
          </h2>
          <p className="text-gray font-subtitle mb-4 text-base md:text-lg leading-relaxed">
            With over 20 years of experience, CA Meghal Shah brings a wealth of
            knowledge in guiding businesses to achieve their financial goals.
            From startups to large corporations, his services span across
            critical financial areas like funding, restructuring, and
            compliance.
          </p>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold font-title mb-2 mt-12">
            Customized Growth Strategies
          </h2>
          <p className="text-gray font-subtitle mb-6 text-base md:text-lg leading-relaxed">
            We understand that every business is unique. Whether it’s an MSME
            looking for loans or a startup preparing for angel funding, our
            tailored solutions ensure your financial strategies align with your
            business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div>
              <p className="text-4xl font-bold text-primary font-title">275+</p>
              <p className="text-gray font-subtitle">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary font-title">
                1000 Cr.
              </p>
              <p className="text-gray font-subtitle">Funded More Then INR</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary font-title">20+</p>
              <p className="text-gray font-subtitle">Experience Professional</p>
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
