import React from "react";
import ContactSection from "../../components/ContactSection";

const CredorbitPage = () => {
  const services = [
    {
      title: "Credit Management",
      description:
        "Comprehensive credit monitoring and management solutions for businesses.",
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
      title: "Risk Assessment",
      description:
        "Advanced risk analysis and mitigation strategies for financial security.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      ),
    },
    {
      title: "Financial Analytics",
      description:
        "Data-driven insights and analytics for informed decision-making.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      ),
    },
  ];

  const features = [
    {
      title: "Instant Loan Eligibility Checks",
      description:
        "Get real-time loan eligibility results in less than 2 minutes without any manual intervention.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "Automated Document Management",
      description:
        "AI-powered document validation, smart uploads, and seamless tracking—no paperwork, no bottlenecks.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
    },
    {
      title: "Multi-Bank Loan Options",
      description:
        "Explore, compare, and apply to multiple banks from a single platform—giving borrowers and partners the ultimate flexibility.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      ),
    },
    {
      title: "Self-Service, No Sales Reps Needed",
      description:
        "The complete loan journey, from eligibility to approval, is managed independently by users with intuitive dashboards and real-time updates.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      ),
    },
  ];

  const benefits = [
    {
      title: "Speed",
      description: "Instant processing with real-time approvals.",
      icon: "⚡",
    },
    {
      title: "Convenience",
      description: "100% paperless, self-driven process.",
      icon: "✨",
    },
    {
      title: "Transparency",
      description:
        "Clear eligibility, multiple bank options, and real-time tracking.",
      icon: "🎯",
    },
    {
      title: "Empowerment",
      description:
        "Whether you're a borrower, a DSA, a CA, or a bank partner, Credorbit gives you the tools to succeed.",
      icon: "💪",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-black py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary opacity-5 pattern-grid"></div>
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent animate-gradient"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-title mb-8 leading-tight">
              CredOrbit
            </h1>
            <h4 className="text-1xl md:text-6xl lg:text-3xl font-bold font-title mb-8 leading-tight">
              Revolutionizing Business Loans with{" "}
              <span className="text-primary relative">Smart Automation</span>
            </h4>
            <div className="mt-8 p-8 bg-opacity-10 bg-white backdrop-blur-sm rounded-lg border border-white/10">
              <p className="text-gray text-lg md:text-xl font-subtitle leading-relaxed">
                Welcome to Credorbit Technologies — the future of instant,
                paperless, and hassle-free business loans. We bring a
                revolutionary SaaS platform designed to streamline the entire
                loan application and approval process for businesses, CAs, DSAs,
                and banks.
              </p>
              <p className="text-gray text-lg md:text-xl font-subtitle mt-4 leading-relaxed">
                At Credorbit, we eliminate paperwork, manual processes, and
                delays with a 100% self-service model that is fast, intelligent,
                and efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-title text-center mb-12">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-black relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-title text-center mb-16">
            What We <span className="text-primary">Offer</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-opacity-5 bg-white p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-opacity-10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-title mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray font-subtitle leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-opacity-5 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary opacity-5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold font-title text-center mb-16">
            Why Choose{" "}
            <span className="text-primary relative">
              Credorbit
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary opacity-50"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-opacity-5 bg-white p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors duration-300 text-center group"
              >
                <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold font-title mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray font-subtitle">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="mt-20 text-center max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-4xl text-primary opacity-20">
                ❝
              </div>
              <p className="text-2xl font-subtitle text-primary italic relative z-10">
                At Credorbit, our mission is simple—make business financing
                faster, smarter, and frictionless.
              </p>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-4xl text-primary opacity-20">
                ❞
              </div>
            </div>
            <p className="text-xl font-subtitle text-primary mt-12">
              "Credorbit – Powering Instant Business Growth."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-title mb-6">
              Ready to Transform Your Credit Management?
            </h2>
            <p className="text-gray font-subtitle mb-8">
              Get started with Credorbit today and experience the future of
              credit management and financial analytics.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-subtitle hover:bg-opacity-90 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
    </div>
  );
};

export default CredorbitPage;
