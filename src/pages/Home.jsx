import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import News from "../components/News";
import Pricing from "../components/Pricing";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  const services = [
    {
      title: "Corporate Finance & Advisory",
      description:
        "Strategic finance planning and project financing to ensure sustainable growth.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
    },
    {
      title: "MSME Loans",
      description:
        "Access to loans with minimal hassle, tailored to your needs.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      ),
    },
    {
      title: "Startup Funding & Angel Investment",
      description: "Helping startups secure funding and scale effectively.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      ),
    },
    {
      title: "Tax Advisory & Financial Structuring",
      description: "Optimize your taxes and financial setup for efficiency.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      ),
    },
  ];

  const testimonials = [
    {
      text: "CA Meghal Shah's advisory was pivotal in helping us restructure our debt and improve profitability.",
      author: "John Doe",
      position: "CEO, Tech Solutions Ltd",
    },
    {
      text: "Thanks to Meghal's guidance, we raised the capital we needed to scale our startup rapidly.",
      author: "Jane Smith",
      position: "Founder, Innovation Hub",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Component */}
      <Hero />

      {/* Banner Section */}
      <section className="bg-black py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-5 pattern-grid"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-title text-center mb-6">
            Strategic Financial Solutions for{" "}
            <span className="text-primary">Sustainable Business Growth</span>
          </h1>
          <p className="text-gray text-center font-subtitle max-w-3xl mx-auto">
            CA Meghal Shah offers comprehensive financial consulting to
            businesses across sectors, specializing in Corporate Finance, MSME
            Loans, Debt Restructuring, and Angel Investments. We create
            tailor-made financial solutions that enhance growth and
            sustainability.
          </p>
        </div>
      </section>

      {/* About Component */}
      <About />

      {/* Our Services Section */}
      <section className="py-16 md:py-24 bg-white bg-opacity-5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-title text-center mb-12">
            Services We <span className="text-primary">Offer</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-opacity-5 bg-white p-8 rounded-lg hover:bg-opacity-10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-title mb-4">
                  {service.title}
                </h3>
                <p className="text-gray font-subtitle">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Component */}
      <Testimonials />

      {/* Client Testimonials Section */}
      <section className="py-16 md:py-24 bg-opacity-5 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-title text-center mb-12">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-opacity-5 bg-white p-8 rounded-lg">
                <svg
                  className="w-8 h-8 text-primary mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray font-subtitle mb-6 italic">
                  {testimonial.text}
                </p>
                <div>
                  <p className="font-title font-bold">{testimonial.author}</p>
                  <p className="text-primary font-subtitle text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default HomePage;
