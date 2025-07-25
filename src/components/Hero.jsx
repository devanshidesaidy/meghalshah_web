const SocialIcon = ({ icon }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 inline-block"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    {icon === "facebook" && (
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    )}
    {icon === "twitter" && (
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    )}
    {icon === "instagram" && (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    )}
    {icon === "linkedin" && (
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    )}
  </svg>
);

const Hero = () => {
  const randomCA = Math.floor(Math.random() * 100000); // Generate random number for CA

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 md:pt-0 bg-black"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left p-4">
        {/* Left Content: Text */}
        <div className="md:w-1/2 mb-10 md:mb-0 relative z-10">
          <p className="text-primary font-subtitle mb-2 text-sm">
            WELCOME TO MY WORLD
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-title mb-4 leading-tight">
            Hi, I'm <br /> <span className="text-primary">CA Meghal Shah</span>
            <br />
            {/* <span className="text-3xl md:text-5xl lg:text-6xl">
              Financial Advisor & Consultant
            </span> */}
          </h1>
          <p className="text-gray font-subtitle text-base md:text-2xl mb-8 max-w-2xl">
            Financial Advisor & Consultant
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            {/* <button className="bg-primary text-white font-subtitle px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300 w-48">
              Contact Me
            </button>
            <button className="border-2 border-primary text-primary font-subtitle px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-colors duration-300 w-48">
              Our Services
            </button> */}
          </div>
        </div>

        {/* Right Content: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          {/* Background circle decoration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[550px] md:h-[550px] rounded-full bg-primary opacity-5"></div>
          {/* Profile image container */}
          <div className="w-64 h-64  md:w-[550px] md:h-[550px]  rounded-full overflow-hidden relative z-10 bg-gradient-to-b from-primary to-primary/50 border-4 border-primary">
            <div className="w-full h-full md:w-[550px] md:h-[550px] flex items-center justify-center">
              {/* <span className="text-white text-4xl font-bold">MS</span> */}
              <img
                src="/images/DSC00218.JPG"
                alt="CA Meghal Shah"
                className="w-full h-full object-cover"
              />
              {/* <img src="../public\images\DSC00218.JPG" alt="" /> */}
              {/* <span className="absolute bottom-4 right-52 text-white text-sm bg-primary/80 px-2 py-1 rounded">
                {randomCA}
              </span> */}
            </div>
          </div>
        </div>
      </div>

      {/* Social Links - Vertical on Left */}
      {/* <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-8">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray hover:text-primary transition-colors duration-300"
        >
          <SocialIcon icon="facebook" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray hover:text-primary transition-colors duration-300"
        >
          <SocialIcon icon="twitter" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray hover:text-primary transition-colors duration-300"
        >
          <SocialIcon icon="instagram" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray hover:text-primary transition-colors duration-300"
        >
          <SocialIcon icon="linkedin" />
        </a>
      </div> */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-row space-x-8 md:flex">
        <a
          href="https://www.facebook.com/p/MSACA-61560472070432"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray hover:text-primary transition-colors duration-300"
        >
          <SocialIcon icon="facebook" />
        </a>
        <a
          href="https://x.com/MeghalShah19?t=togJqWjNqgkmKvzAKB9A9g&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray hover:text-primary transition-colors duration-300"
        >
          <SocialIcon icon="twitter" />
        </a>
        <a
          href="https://www.instagram.com/msaca_2011"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray hover:text-primary transition-colors duration-300"
        >
          <SocialIcon icon="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/ca-meghal-shah-finance-expert-25a5bb3b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray hover:text-primary transition-colors duration-300"
        >
          <SocialIcon icon="linkedin" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
