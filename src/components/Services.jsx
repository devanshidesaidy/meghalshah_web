import React from "react";

// Placeholder for icons - consider using a library like react-icons
const ServiceIcon = ({ color = "currentColor" }) => (
  <svg className="w-12 h-12 mb-4 text-primary" fill={color} viewBox="0 0 20 20">
    {/* Replace with actual icon path or component */}
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    <path
      fillRule="evenodd"
      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform duration-300"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
);

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-opacity-5 bg-white p-6 md:p-8 rounded-lg shadow-lg group hover:shadow-primary/20 transition-shadow duration-300 flex flex-col items-start">
      <ServiceIcon />
      <h3 className="text-xl md:text-2xl font-bold font-title mb-3">{title}</h3>
      <p className="text-gray font-subtitle text-sm md:text-base mb-4 leading-relaxed flex-grow">
        {description}
      </p>
      <button className="mt-auto text-primary font-subtitle flex items-center space-x-2 group">
        <span>Read More</span>
        <ArrowIcon />
      </button>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      title: "Website Design",
      description:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
    },
    {
      title: "Mobile App Design",
      description:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
    },
    {
      title: "Brand Identity",
      description:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
    },
    {
      title: "Market Analysis",
      description:
        "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
    },
  ];

  return (
    <section id="service" className="py-16 md:py-24 bg-black">
      {" "}
      {/* Changed id to "service" to match nav */}
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-subtitle mb-2 text-sm">Check My</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-title mb-12 md:mb-16">
          My Best Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
