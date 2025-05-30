import React from "react";

const QuoteIcon = () => (
  <svg
    className="w-12 h-12 md:w-16 md:h-16 text-primary opacity-30"
    fill="currentColor"
    viewBox="0 0 32 32"
  >
    <path d="M10.416 23.752q0 1.088-.736 1.856t-1.824.768q-1.12 0-1.856-.768t-.736-1.856V13.096q0-1.088.736-1.856t1.856-.768h6.176q.48 0 .864.192t.64.544l-3.168 7.136q-.256.576-.256 1.152v3.68zm13.312 0q0 1.088-.736 1.856t-1.824.768q-1.12 0-1.856-.768t-.736-1.856V13.096q0-1.088.736-1.856t1.856-.768h6.176q.48 0 .864.192t.64.544l-3.168 7.136q-.256.576-.256 1.152v3.68z" />
  </svg>
);

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="bg-opacity-5 bg-white p-6 md:p-8 rounded-lg shadow-lg relative text-center md:text-left">
      <div className="absolute top-4 right-4 md:top-6 md:right-6">
        <QuoteIcon />
      </div>
      <p className="text-gray font-subtitle text-base md:text-lg italic leading-relaxed mb-6 z-10 relative">
        "{quote}"
      </p>
      <div className="flex items-center justify-center md:justify-start">
        <div className="w-2 h-px bg-primary mr-3"></div>
        <p className="text-white font-title font-semibold">{author}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsData = [
    {
      quote:
        "To begin to identify aspects of students’ own portfolios To identify key portfolio features, varied styles, and organizational schemes; to begin identify aspects of students’ own portfolios that will need careful attention.",
      author: "MARRY JENEFER",
    },
    {
      quote:
        "That will need careful attention To begin to identify aspects of students’ own portfolios To identify key portfolio features, varied styles, and organizational schemes.",
      author: "ELEZABETH MARVEL", // Corrected from image
    },
    {
      quote:
        "To identify key portfolio features, varied styles, and organizational schemes. To begin to identify aspects of students’ own portfolios that will need careful attention.", // Added a third testimonial for layout balance
      author: "JOHN DOE",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-subtitle mb-2 text-sm">Testimonials</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-title mb-12 md:mb-16">
          What My Clients Say.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
