import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-opacity-5 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-title mb-4 text-white">
            Send Me A Message
          </h2>
          <p className="text-gray font-subtitle text-sm md:text-base">
            Your email address will not be published. All fields are required
          </p>
        </div>

        <form className="max-w-xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-subtitle text-gray mb-2"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 bg-black border border-gray border-opacity-30 rounded-md focus:ring-primary focus:border-primary text-white font-subtitle"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-subtitle text-gray mb-2"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 bg-black border border-gray border-opacity-30 rounded-md focus:ring-primary focus:border-primary text-white font-subtitle"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-subtitle text-gray mb-2"
            >
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full p-3 bg-black border border-gray border-opacity-30 rounded-md focus:ring-primary focus:border-primary text-white font-subtitle"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white font-subtitle px-10 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300"
            >
              Submit Now
            </button>
          </div>
        </form>
        <div className="mt-12 md:mt-16 text-center flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <p className="text-gray font-subtitle">
            {/* Placeholder for phone icon */}
            <span className="text-primary mr-2">📞</span> +12345675694
          </p>
          <p className="text-gray font-subtitle">
            {/* Placeholder for email icon */}
            <span className="text-primary mr-2">✉️</span> example@mail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
