import React from "react";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5 text-primary mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
);

const PricingCard = ({
  planName,
  price,
  description,
  features,
  isPopular = false,
}) => {
  return (
    <div
      className={`bg-opacity-5 bg-white p-6 md:p-8 rounded-lg shadow-lg text-center flex flex-col ${
        isPopular ? "border-2 border-primary transform scale-105" : ""
      }`}
    >
      <span
        className={`inline-block bg-primary bg-opacity-20 text-primary text-xs font-subtitle px-3 py-1 rounded-full mb-4 self-center`}
      >
        {planName}
      </span>
      <p className="text-4xl md:text-5xl font-bold font-title mb-1">
        ${price}
        <span className="text-base font-subtitle text-gray">/PER MONTH</span>
      </p>
      <p className="text-gray font-subtitle text-sm mb-6 h-12">{description}</p>{" "}
      {/* Fixed height for description consistency */}
      <ul className="space-y-3 text-left mb-8 flex-grow">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-gray font-subtitle text-sm"
          >
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-auto font-subtitle py-3 rounded-md transition-colors duration-300 ${
          isPopular
            ? "bg-primary text-white hover:bg-opacity-80"
            : "border border-primary text-primary hover:bg-primary hover:text-white"
        }`}
      >
        Choose Plan
      </button>
    </div>
  );
};

const Pricing = () => {
  const pricingData = [
    {
      planName: "BASIC",
      price: 120,
      description: "Consectetur adipiscing elit. Purusout phasellus.",
      features: [
        "Web App design",
        "Software Development",
        "3D Animation Add",
        "Web Development",
        "Graphic Design",
      ],
    },
    {
      planName: "PREMIUM",
      price: 210,
      description: "Consectetur adipiscing elit. Purusout phasellus.",
      features: [
        "Web App design",
        "Software Development",
        "3D Animation Add",
        "Web Development",
        "Graphic Design",
        "SEO Optimization",
      ],
      isPopular: true,
    },
    {
      planName: "ADVANCED",
      price: 373,
      description: "Consectetur adipiscing elit. Purusout phasellus.",
      features: [
        "Web App design",
        "Software Development",
        "3D Animation Add",
        "Web Development",
        "Graphic Design",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-subtitle mb-2 text-sm">Pricing Plan</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-title mb-12 md:mb-16">
          My Pricing Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch">
          {" "}
          {/* Ensure cards stretch to same height if needed */}
          {pricingData.map((plan, index) => (
            <PricingCard
              key={index}
              planName={plan.planName}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
