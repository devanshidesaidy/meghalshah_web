import React from "react";

const MSACAPage = () => {
  const services = [
    {
      title: "Business Loans & Project Funding",
      description:
        "Customized financing solutions including working capital loans, machinery loans, project funding, and expansion capital.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "Debt Restructuring & Consolidation",
      description:
        "Strengthen your financial foundation with expert debt management strategies that lower costs, improve cash flow, and enhance creditworthiness.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      ),
    },
    {
      title: "Project Finance & Financial Analysis",
      description:
        "Deep insights into the financial viability of projects, cost optimization strategies, and structuring investments for sustainable growth.",
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
      title: "Financial Advisory & Taxation Services",
      description:
        "Comprehensive financial planning, tax advisory, compliance, and audit services to ensure operational efficiency and regulatory alignment.",
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

  return (
    <div className="pt-20">
      {/* Hero Section with Animated Background */}
      <section className="bg-black py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary opacity-5 pattern-grid"></div>
          {/* Animated circles */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-title mb-8 leading-tight">
              MSACA
            </h1>
            <h4 className="text-1xl md:text-6xl lg:text-3xl font-bold font-title mb-8 leading-tight">
              Driving Financial Growth with{" "}
              <span className="text-primary relative">Strategic Solutions</span>
            </h4>
            <p className="text-gray text-lg md:text-xl font-subtitle max-w-3xl mx-auto leading-relaxed">
              At MSACA Bizzsolve LLP, we are committed to empowering businesses
              with strategic financial solutions that drive growth, stability,
              and long-term success.
            </p>
            <div className="mt-8 p-6 bg-opacity-10 bg-white backdrop-blur-sm rounded-lg">
              <p className="text-gray font-subtitle">
                Based in Ahmedabad, we specialize in helping companies secure
                funding, obtain business loans, manage debt restructuring, and
                optimize financial performance with a sharp, results-driven
                approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Hover Effects */}
      <section className="py-20 md:py-32 bg-black relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-title text-center mb-16">
            Our Core <span className="text-primary">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
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
                      {service.icon}
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-title mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray font-subtitle leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Cards */}
      <section className="py-20 md:py-32 bg-opacity-5 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary opacity-5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold font-title text-center mb-16">
            Why Choose{" "}
            <span className="text-primary relative">
              MSACA Bizzsolve LLP
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary opacity-50"></span>
            </span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-opacity-5 bg-white p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-title mb-2">
                      Seasoned Expertise
                    </h3>
                    <p className="text-gray font-subtitle">
                      A team of finance professionals with rich, hands-on
                      experience across industries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-opacity-5 bg-white p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-title mb-2">
                      Custom-Built Solutions
                    </h3>
                    <p className="text-gray font-subtitle">
                      Financial strategies designed to align perfectly with your
                      business objectives and market realities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-opacity-5 bg-white p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-title mb-2">
                      Powerful Network
                    </h3>
                    <p className="text-gray font-subtitle">
                      Direct access to top banks, financial institutions, and
                      private investors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-opacity-5 bg-white p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-title mb-2">
                      360° Support
                    </h3>
                    <p className="text-gray font-subtitle">
                      From the first consultation to the final execution, we
                      walk with you at every step of your financial journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="mt-20 text-center max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-4xl text-primary opacity-20">
                ❝
              </div>
              <p className="text-2xl font-subtitle text-primary italic relative z-10">
                "Together, We Transform Financial Visions into Reality."
              </p>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-4xl text-primary opacity-20">
                ❞
              </div>
            </div>
            <a
              href="http://www.msaca.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors duration-300 mt-8 group"
            >
              <span>Visit our website</span>
              <svg
                className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MSACAPage;
