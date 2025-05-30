const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 md:pt-0"
    >
      {" "}
      {/* Added pt-20 for header offset on small screens */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left p-4">
        {/* Left Content: Text */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold font-title mb-4">
            App & Software Developer
          </h1>
          <p className="text-lg font-subtitle text-gray mb-8">ROBERT MILLER</p>
          <button className="bg-primary text-white font-subtitle px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300">
            Contact Us
          </button>
        </div>

        {/* Right Content: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          {/* Placeholder for image - replace with actual image path */}
          <div className="w-64 h-64 md:w-96 md:h-96 bg-gray rounded-full overflow-hidden">
            {/* <img src="/path-to-your-image.jpg" alt="Robert Miller" className="w-full h-full object-cover" /> */}
            {/* Using a simple div as placeholder for now */}
          </div>
        </div>
      </div>
      {/* Social Links - Vertical on Left */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-4">
        <a
          href="#"
          className="text-gray hover:text-primary transform -rotate-90 origin-center"
        >
          Facebook
        </a>
        <a
          href="#"
          className="text-gray hover:text-primary transform -rotate-90 origin-center"
        >
          Twitter
        </a>
        <a
          href="#"
          className="text-gray hover:text-primary transform -rotate-90 origin-center"
        >
          Instagram
        </a>
      </div>
    </section>
  );
};

export default Hero;
